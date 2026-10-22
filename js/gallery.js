/* gallery.js — álbum con marcos polaroid y foto ampliada */
(function () {
  "use strict";
  var App = window.App, $ = App.$;
  var photos = window.SITE_MEMORIES || [];
  var g = $("gallery"), lb = $("lightbox"), img = $("lb-img"), cap = $("lb-cap"), idx = 0;
  App.wireDialog(lb);

  if (!photos.length) { g.innerHTML = '<p class="lead">Aquí aparecerán las fotos (edita data/memories.js).</p>'; return; }

  photos.forEach(function (p, i) {
    var b = document.createElement("button"); b.type = "button"; b.className = "polaroid";
    b.setAttribute("aria-label", "Ampliar foto " + (i + 1) + ": " + p.alt);
    var im = document.createElement("img");
    im.src = p.thumb || p.file; im.alt = p.alt || ""; im.loading = "lazy"; im.decoding = "async";
    if (p.width && p.height) { im.width = Math.round(p.width / 3); im.height = Math.round(p.height / 3); }
    var c = document.createElement("span"); c.className = "cap"; c.textContent = p.caption || "";
    b.appendChild(im); b.appendChild(c);
    b.addEventListener("click", function () { idx = i; render(); lb.showModal(); });
    g.appendChild(b);
  });

  function render() {
    var p = photos[idx];
    img.src = p.file; img.alt = p.alt || ""; cap.textContent = p.caption || "";
    $("lb-prev").hidden = $("lb-next").hidden = photos.length < 2;
    [idx - 1, idx + 1].forEach(function (k) {            // precarga vecinas
      var q = photos[(k + photos.length) % photos.length]; if (q) (new Image()).src = q.file;
    });
  }
  function step(d) { idx = (idx + d + photos.length) % photos.length; render(); }
  $("lb-prev").addEventListener("click", function () { step(-1); });
  $("lb-next").addEventListener("click", function () { step(1); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") step(-1); else if (e.key === "ArrowRight") step(1);
  });
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) step(dx > 0 ? -1 : 1);
  }, { passive: true });
})();
