/* letters.js — colección de cartas y mensajes por momento */
(function () {
  "use strict";
  var App = window.App, $ = App.$, C = window.SITE_CONFIG || {};
  var all = window.SITE_LETTERS || [];
  var reader = $("reader"), body = $("reader-body"), more = $("reader-more");
  App.wireDialog(reader);

  var current = { ids: [], i: 0 };
  function show(id) {
    var l = App.letterById(id); if (!l) return;
    App.renderLetter(l, body, "reader-title");
    reader.scrollTop = 0;
    if (!reader.open) reader.showModal();
  }
  // Abre una carta; "group" (opcional) es una lista de ids para rotar entre ellas
  App.openLetter = function (id, opener, group) {
    current.ids = group || []; current.i = group ? Math.max(0, group.indexOf(id)) : 0;
    more.hidden = !(group && group.length > 1);
    show(id);
  };
  more.addEventListener("click", function () {
    current.i = (current.i + 1) % current.ids.length; show(current.ids[current.i]);
  });

  /* Colección */
  var groups = [
    { key: "cartitas", title: "Para cada momento" },
    { key: "extra", title: "Pequeñitas y espontáneas" },
    { key: "ultima", title: "Una última notita" }
  ];
  var list = $("letters-list");
  groups.forEach(function (g) {
    var items = all.filter(function (l) { return l.section === g.key && l.id !== C.mainLetterId; });
    if (!items.length) return;
    var h = document.createElement("h3"); h.textContent = g.title; list.appendChild(h);
    var grid = document.createElement("div"); grid.className = "cards";
    items.forEach(function (l) {
      var b = document.createElement("button"); b.type = "button"; b.className = "card";
      var ic = document.createElement("span"); ic.className = "ic"; ic.setAttribute("aria-hidden", "true"); ic.textContent = l.icon || "💌";
      var t = document.createElement("span"); t.textContent = l.title;
      b.appendChild(ic); b.appendChild(t);
      b.addEventListener("click", function () { App.openLetter(l.id, b); });
      grid.appendChild(b);
    });
    list.appendChild(grid);
  });
  if (!list.children.length) list.innerHTML = '<p class="lead">Aquí aparecerán las cartas (edita data/letters.js).</p>';

  /* Mensajes por momento */
  var wrap = $("moments");
  (window.SITE_MOMENTS || []).forEach(function (m) {
    var ids = (m.letters || []).filter(function (id) { return App.letterById(id); });
    if (!ids.length) return;
    var b = document.createElement("button"); b.type = "button"; b.className = "card";
    var ic = document.createElement("span"); ic.className = "ic"; ic.setAttribute("aria-hidden", "true"); ic.textContent = m.icon || "💌";
    var t = document.createElement("span"); t.textContent = m.title;
    b.appendChild(ic); b.appendChild(t);
    var n = Math.floor(Math.random() * ids.length);   // empieza en una al azar y luego rota
    b.addEventListener("click", function () { var id = ids[n % ids.length]; n++; App.openLetter(id, b, ids); });
    wrap.appendChild(b);
  });
})();
