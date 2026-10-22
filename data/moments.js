/* ============================================================
   MENSAJES PARA CADA MOMENTO  (data/moments.js)
   Cada categoría abre una de tus cartas (las que elijas en "letters").
   "letters" son ids de data/letters.js. No se duplica texto.
   Para AÑADIR una categoría:
     { id: "dormir", icon: "🌙", title: "Cuando no puedas dormir",
       letters: ["carta-16"] },
   ============================================================ */
window.SITE_MOMENTS = [
  { id: "dificil",  icon: "🌧️", title: "Cuando tengas un día difícil",
    letters: ["carta-06", "carta-01", "carta-31"] },
  { id: "extrano",  icon: "🫂", title: "Cuando me extrañes",
    letters: ["carta-04", "carta-05", "carta-25"] },
  { id: "recordar", icon: "💌", title: "Cuando necesites recordar lo mucho que te quiero",
    letters: ["carta-26", "carta-20", "carta-17"] },
  { id: "sonreir",  icon: "😂", title: "Cuando quieras sonreír",
    letters: ["carta-12", "carta-30", "carta-23"] },
  { id: "bonito",   icon: "🌷", title: "Cuando quieras leer algo bonito",
    letters: ["carta-34", "carta-29", "carta-33"] }
];
