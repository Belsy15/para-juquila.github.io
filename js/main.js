/* main.js — núcleo: textos, sobre, navegación, final y música */
(function () {
  "use strict";
  var C = window.SITE_CONFIG || {};
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (id) { return document.getElementById(id); };

  var App = window.App = {
    $: $, reduced: reduced,
    letterById: function (id) {
      return (window.SITE_LETTERS || []).filter(function (l) { return l.id === id; })[0];
    },
    // Dibuja una carta dentro de "el" usando textContent (sin HTML inyectado)
    renderLetter: function (letter, el, headingId) {
      el.textContent = "";
      var h = document.createElement("h3");
      if (headingId) h.id = headingId;
      h.textContent = letter.title;
      el.appendChild(h);
      var ul = null;
      letter.paragraphs.forEach(function (p, i) {
        if (p.indexOf("• ") === 0) {
          if (!ul) { ul = document.createElement("ul"); el.appendChild(ul); }
          var li = document.createElement("li"); li.textContent = p.slice(2); ul.appendChild(li); return;
        }
        ul = null;
        var para = document.createElement("p");
        if (i === 0 && /:$/.test(p) && p.length < 70) para.className = "salute";
        para.textContent = p; el.appendChild(para);
      });
    },
    // Cierra un <dialog> al tocar fuera o en un botón [data-close]
    wireDialog: function (dlg) {
      dlg.addEventListener("click", function (e) {
        if (e.target === dlg || (e.target.closest && e.target.closest("[data-close]"))) dlg.close();
      });
    }
  };

  /* ---- Textos ---- */
  document.title = "Para " + (C.herName || "ti") + " 💌";
  $("welcome").textContent = C.welcomeMessage || "";
  $("hint").textContent = C.envelopeHint || "";
  $("t-razones").textContent = C.reasonsTitle || "";
  $("reason-btn").textContent = C.reasonsButton || "Dame otra razón 💗";
  var F = C.finale || {};
  $("t-final").textContent = F.title || "";
  var ft = $("finale-text");
  (F.paragraphs || []).forEach(function (t) { var p = document.createElement("p"); p.textContent = t; ft.appendChild(p); });
  document.querySelector(".invite").textContent = F.invite || "";
  document.querySelector(".sign").textContent = (C.myName ? C.myName + " — " : "") + (C.signature || "");
  var last = App.letterById(F.lastNoteId);
  if (last) { $("last-note").textContent = "Leer la última notita"; $("last-note").addEventListener("click", function () { App.openLetter(last.id, this); }); }
  else $("last-note").hidden = true;

  /* ---- Corazones flotantes (pocos y discretos) ---- */
  if (!reduced) {
    var box = document.querySelector(".floaties"), sy = ["♥", "✿", "✦", "♥"];
    for (var i = 0; i < 12; i++) {
      var s = document.createElement("span");
      s.textContent = sy[i % sy.length];
      s.style.left = (Math.random() * 96) + "%"; s.style.bottom = "-2rem";
      s.style.fontSize = (0.9 + Math.random() * 1.2) + "rem";
      s.style.animationDuration = (14 + Math.random() * 14) + "s";
      s.style.animationDelay = (-Math.random() * 20) + "s";
      box.appendChild(s);
    }
  }

  /* ---- Sobre ---- */
  var env = $("envelope"), opened = false;
  function unlock(instant) {
    if (opened) return; opened = true;
    env.classList.add("open"); env.setAttribute("aria-label", "Sobre abierto"); env.disabled = true;
    $("skip").hidden = true;
    var delay = (instant || reduced) ? 0 : 1300;
    setTimeout(function () {
      $("contenido").hidden = false; $("nav").hidden = false;
      var target = $("carta");
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      $("main-letter").focus({ preventScroll: true });
    }, delay);
  }
  env.addEventListener("click", function () { unlock(false); });
  $("skip").addEventListener("click", function () { unlock(true); });

  var main = App.letterById(C.mainLetterId);
  if (main) App.renderLetter(main, $("main-letter"));
  else $("main-letter").innerHTML = "<p>(Aquí irá la carta principal: edita data/config.js)</p>";

  /* ---- Navegación: marcar sección actual ---- */
  if ("IntersectionObserver" in window) {
    var links = {}; [].forEach.call(document.querySelectorAll(".nav a"), function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && links[e.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
          links[e.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (k) { var s = $(k); if (s) io.observe(s); });
  }

  /* ---- Música opcional ---- */
  if (C.audio) {
    var a = $("audio"); a.src = C.audio; $("music").hidden = false;
    $("music-btn").addEventListener("click", function () {
      var b = this;
      if (a.paused) { a.play().then(function () { b.setAttribute("aria-pressed", "true"); $("music-label").textContent = "Pausar música"; }).catch(function () {}); }
      else { a.pause(); b.setAttribute("aria-pressed", "false"); $("music-label").textContent = C.audioTitle ? "Poner: " + C.audioTitle : "Poner música"; }
    });
    if (C.audioTitle) $("music-label").textContent = "Poner: " + C.audioTitle;
  }
})();
