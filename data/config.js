/* ============================================================
   CONFIGURACIÓN  (data/config.js)  <-- AQUÍ cambias los textos principales
   ============================================================ */
window.SITE_CONFIG = {
  // Nombre con el que aparece ella. Viene de tus cartas ("Mi Juquila").
  herName: "Juquila",

  // Tu nombre o apodo. VACÍO a propósito: en tus cartas firmas "Tu inge enamorada".
  // Si lo rellenas (p. ej. "Ana"), se usa en la despedida final.
  myName: "Belsy Santiago",
  signature: "Tu inge enamorada",   // firma tomada de tus cartas

  // Pantalla del sobre
  welcomeMessage: "Hay cosas que quiero decirte de mil maneras, y esta es una de ellas.",
  envelopeHint: "Toca el sobre para abrirlo",

  // Carta principal: id de una carta de data/letters.js
  mainLetterId: "carta-28",

  // Razones
  reasonsTitle: "Unas cuantas razones por las que eres tan especial para mí",
  reasonsButton: "Dame otra razón 💗",

  // Mensaje final (editable). Los párrafos se muestran uno bajo otro.
  finale: {
    title: "Para ti",
    paragraphs: [
      "Esta página está hecha de recuerdos, palabras y pequeños detalles. Pero lo más importante de todo lo que quería darte no cabe en una pantalla.",
      "Te amo hoy, mi niña. Y quiero seguir encontrando formas bonitas de demostrártelo mañana también."
    ],
    invite: "TQEMVPS",
    lastNoteId: "ultima-notita"      // botón para leer "Una última notita"
  },

  // Música (opcional). Deja "" si no hay canción.
  // Para usarla: copia tu mp3 a assets/audio/ y escribe, p. ej., "assets/audio/cancion.mp3"
  audio: "",
  audioTitle: "Nuestra canción"
};
