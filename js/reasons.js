/* reasons.js — máquina de razones sin repetir hasta agotarlas */
(function () {
  "use strict";
  var App = window.App, $ = App.$;
  var data = window.SITE_REASONS || [];
  var btn = $("reason-btn"), out = $("reason"), from = $("reason-from"), count = $("reason-count");
  var C = window.SITE_CONFIG || {}, label = C.reasonsButton || "Dame otra razón 💗";
  if (!data.length) { btn.hidden = true; out.textContent = "Aquí aparecerán las razones (edita data/reasons.js)."; return; }

  var bag = [], shown = 0, lastText = "";
  function refill() {
    bag = data.map(function (_, i) { return i; });
    for (var i = bag.length - 1; i > 0; i--) {            // Fisher–Yates
      var j = Math.floor(Math.random() * (i + 1)), t = bag[i]; bag[i] = bag[j]; bag[j] = t;
    }
    if (bag.length > 1 && data[bag[bag.length - 1]].text === lastText) {   // no repetir la última al reiniciar
      var s = bag[0]; bag[0] = bag[bag.length - 1]; bag[bag.length - 1] = s;
    }
    shown = 0;
  }
  refill();

  btn.addEventListener("click", function () {
    if (!bag.length) { refill(); }
    var r = data[bag.pop()]; shown++; lastText = r.text;
    out.textContent = r.text; from.textContent = r.from ? "— " + r.from : "";
    out.classList.remove("pop"); void out.offsetWidth; out.classList.add("pop");   // reinicia animación
    count.textContent = "Razón " + shown + " de " + data.length;
    if (!bag.length) { btn.textContent = "Volver a empezar 💗"; count.textContent += " · ¡Esa fue la última!"; }
    else btn.textContent = label;
  });
})();
