/* ============================================================
   CARTAS  (data/letters.js)
   Texto tomado palabra por palabra de "Nuestras cartitas para Juquila".
   Cada carta:  { id, title, icon, section, paragraphs: [ ... ] }
   - section: "cartitas" | "extra" | "ultima"
   - Un párrafo que empieza con "• " se muestra como viñeta.
   - Para AÑADIR una carta, copia un bloque, cambia el id (único) y el texto.
   Ejemplo:
     { id: "carta-nueva", title: "Para cuando llueva", icon: "🌧️",
       section: "cartitas", paragraphs: ["Mi niña:", "Aquí va tu carta."] },
   La carta principal (la que se abre con el sobre) se elige en data/config.js
   (mainLetterId) y no se repite en la colección.
   ============================================================ */
window.SITE_LETTERS = [
  {
    "id": "carta-01",
    "title": "Para cuando estés triste",
    "icon": "💗",
    "section": "cartitas",
    "paragraphs": [
      "Mi niña bonita:",
      "No sé qué te puso triste hoy, pero ojalá pudiera estar ahí para abrazarte, darte besitos en la cara y hacer alguna tontería hasta sacarte una sonrisita.",
      "No tienes que estar bien todo el tiempo, ¿sí? Puedes estar cansada, llorar, enojarte con el mundo o no tener ganas de hablar. No tienes que fingir conmigo.",
      "Ojalá nunca se te olvide que no tienes que poder con todo tú solita. También puedes descansar en mí.",
      "Te amo en tus días bonitos y en esos días en los que ni tú te aguantas. Y sí, changuita, también cuando estés de malas. JAJAJA.",
      "Aquí estoy, mi amor. Siempre de tu equipo."
    ]
  },
  {
    "id": "carta-02",
    "title": "Para cuando estés feliz",
    "icon": "🌷",
    "section": "cartitas",
    "paragraphs": [
      "Mi changuita feliz:",
      "¿YA VES? 😭💗 Ojalá pudiera verte esa carita cuando algo te sale bien. Me encanta saber que estás feliz, incluso cuando no soy yo la razón de tu sonrisa.",
      "Quiero que me cuentes todo: qué pasó, qué dijiste, qué sentiste, hasta el chisme que no tiene absolutamente nada que ver JAJAJA.",
      "Me hace feliz verte cumplir tus sueños y amar tanto lo que haces. Mi doctora bonita, tú no sabes el orgullo que me da verte ser tú.",
      "Ojalá la vida te dé muchísimos días así. Y ojalá yo esté en muchos de ellos, molestándote, abrazándote y presumiendo que eres mi novia.",
      "Te amo, mi niña. Celebro tus alegrías como si también fueran mías, porque un poquito sí lo son."
    ]
  },
  {
    "id": "carta-03",
    "title": "Para cuando estés enojada conmigo",
    "icon": "🥹",
    "section": "cartitas",
    "paragraphs": [
      "A ver, mi niña, primero que nada: respira JAJAJA. 😭 Y ahora sí, hablando en serio, si estás enojada conmigo, quiero escucharte. No quiero que sientas que tienes que guardarte lo que te duele para no tener problemas conmigo.",
      "Puede que a veces no nos entendamos, porque somos dos intensas que sienten muchísimo y encima cada una tiene su cabecita. Pero yo no quiero ganarte las discusiones, quiero que aprendamos a entendernos.",
      "Si me equivoqué, quiero reconocerlo y hacerlo mejor. No porque nunca vayamos a fallar, sino porque tú y lo que tenemos me importan demasiado.",
      "Eso sí, cuando ya se nos pase el coraje, solicito oficialmente mis besitos de reconciliación. Es requisito de la relación. JAJAJA.",
      "Te amo, incluso cuando me quieras mandar a volar. 💗"
    ]
  },
  {
    "id": "carta-04",
    "title": "Para cuando me extrañes",
    "icon": "🫂",
    "section": "cartitas",
    "paragraphs": [
      "Mi amorcito:",
      "Si estás leyendo esto porque me extrañas, ven, te mando un abrazo de esos que duran tanto que ya ni sabes dónde acaba uno y empieza la otra.",
      "Yo también te extraño. Extraño tenerte cerquita, poder abrazarte sin estar contando cuánto falta para despedirnos, darte besitos porque sí y verte hacer tus cositas mientras yo hago las mías.",
      "Qué cosa tan injusta que la persona con la que más quiero estar viva lejos de mí. 😭 ¿Quién autorizó esto?",
      "Pero, entre todo lo que no me gusta de la distancia, hay algo que sí sé: yo encuentro la manera de ir a verte porque estar contigo vale muchísimo para mí.",
      "Aguántame tantito, mi niña. Nos debemos muchos abrazos, bailes y días juntas.",
      "Te extraño, pero también te estoy eligiendo."
    ]
  },
  {
    "id": "carta-05",
    "title": "Para cuando sientas que la distancia pesa demasiado",
    "icon": "💌",
    "section": "cartitas",
    "paragraphs": [
      "Mi niña hermosa:",
      "Ojalá pudiera doblar el mapa, hacerme bolita y aparecer contigo en cinco segundos. Te juro que si la ingeniería me sirve para inventar eso, lo primero que voy a hacer es patentarlo. JAJAJA.",
      "Hay días en los que también me pesa no poder estar ahí para abrazarte cuando quiero, acompañarte en cualquier cosita o simplemente compartir el mismo espacio.",
      "Pero la distancia no cambia lo que eres para mí. No te quiero solamente en las llamadas bonitas o en los días fáciles. Te quiero en la vida real, con nuestros pendientes, nuestros cansancios, nuestros planes y todo lo que todavía nos falta vivir.",
      "No puedo prometerte que nunca nos va a doler estar lejos. Sí puedo decirte que quiero seguir buscando la manera de acercarme a ti.",
      "Porque tú no eres una personita más en mi vida, eres mi persona favorita.",
      "Y qué ganas de que algún día la despedida sea solamente un «nos vemos al rato»."
    ]
  },
  {
    "id": "carta-06",
    "title": "Para cuando tengas un día de la fregada",
    "icon": "🌧️",
    "section": "cartitas",
    "paragraphs": [
      "Hola, doctora de mi corazón. 💗 ¿Hoy todo salió mal? ¿La gente está insoportable? ¿El mundo decidió ponerse de acuerdo para fastidiarte?",
      "Bueno, vengo a recordarte que tienes una novia que te ama muchísimo y que, aunque no pueda arreglar todo lo que te pasa, sí puede escucharte quejarte durante tres horas. Con pausas para el chisme, obviamente.",
      "No tienes que sacarle una enseñanza bonita a todo ni convertir cada día malo en una oportunidad de crecimiento personal. A veces un día simplemente está horrible y ya.",
      "Come algo rico, descansa tantito y acuérdate de que eres mucho más que lo que lograste hoy.",
      "Te mando besitos, abrazos y permiso oficial para no querer hacer nada.",
      "Atentamente: tu inge enamorada, disponible para apapachos y chismes."
    ]
  },
  {
    "id": "carta-07",
    "title": "Para cuando necesites recordar lo mucho que me gustas",
    "icon": "💗",
    "section": "cartitas",
    "paragraphs": [
      "Changuita, ¿ya te dije que me encantas?",
      "Pero no así de «ay, qué bonita». NO. Me encantas de una forma que a veces hasta me da risa porque, después de tanto tiempo, todavía me haces sentir todas esas cositas.",
      "Me gusta verte, escucharte, bailar contigo, hacerte reír y descubrir que sigo teniendo ganas de contarte absolutamente todo.",
      "Me gustas cuando estás arregladita y cuando andas toda despeinada. Cuando estás de buenas, cuando te emocionas hablando de lo tuyo y cuando te pones intensa por algo que te importa.",
      "Y sí, también me gusta molestarte. Es parte de mi lenguaje del amor, no acepto reclamaciones. JAJAJA.",
      "No sé cómo explicarte que eres tú, mi niña. Que te volvería a mirar entre un montón de personas y que me seguirías poniendo nerviosa de la manera más bonita."
    ]
  },
  {
    "id": "carta-08",
    "title": "Para cuando dudes de ti misma",
    "icon": "🌷",
    "section": "cartitas",
    "paragraphs": [
      "Mi doctora preciosa:",
      "Ojalá pudieras verte un ratito con mis ojos, aunque fuera para que dejaras de ser tan dura contigo misma.",
      "Yo veo a una mujer que se esfuerza, que ama lo que hace, que siente muchísimo y que sigue intentando incluso cuando las cosas no son fáciles.",
      "No tienes que ser la mejor en todo, ni tener todas las respuestas, ni demostrarle nada al mundo cada cinco minutos.",
      "Puedes aprender, equivocarte, cambiar de opinión y volver a empezar. Nada de eso te hace menos increíble.",
      "Y por si hoy se te olvidó: estoy muy orgullosa de ti. No solamente por lo que haces, sino por la persona que eres.",
      "Te amo cuando estás brillando y también cuando no alcanzas a ver tu propia luz.",
      "Ven acá, mi niña. Te doy un besito en la frente y te recuerdo lo mucho que vales. 💗"
    ]
  },
  {
    "id": "carta-09",
    "title": "Para cuando quieras saber por qué te elegí a ti",
    "icon": "💌",
    "section": "cartitas",
    "paragraphs": [
      "Mi Juquila:",
      "Porque contigo puedo ser yo. Así, sin editarme, sin pensar demasiado cómo decir las cosas, sin tener que esconder mis pensamientos más raros.",
      "Porque te puedo contar desde algo que me preocupa de verdad hasta la tontería más absurda que se me ocurrió mientras estaba haciendo cualquier cosa.",
      "Porque nos conocemos muchísimo y aun así me gusta seguir descubriéndote.",
      "Porque somos diferentes en tantas cosas, pero hay algo entre nosotras que se siente como encontrar el lugar donde sí encajas.",
      "Porque nos cuidamos, nos conocemos y tratamos de entendernos.",
      "Y porque, después de todo lo que hemos vivido, todavía quiero ir a buscarte, abrazarte y bailar contigo.",
      "No te elegí porque todo fuera perfecto. Te elijo porque eres tú.",
      "Y tú, mi niña, eres el amor de mi vida. Así de sencillo y así de enorme."
    ]
  },
  {
    "id": "carta-10",
    "title": "Para cuando te dé miedo el futuro",
    "icon": "🌙",
    "section": "cartitas",
    "paragraphs": [
      "Amor mío:",
      "No sé exactamente cómo se van a acomodar todas las cosas. Tenemos sueños, carreras, responsabilidades y muchísimas cosas que todavía estamos aprendiendo.",
      "Tú con tu medicina, yo con mi ingeniería, cada una creciendo a su manera y tratando de construir su propio camino.",
      "Pero cuando pienso en las cosas bonitas que me gustaría vivir, muchas veces te imagino ahí.",
      "No necesito que hoy tengamos resuelta toda la vida. Quiero que podamos hablar de lo que nos preocupa, celebrar lo que conseguimos y aprender a acompañarnos mientras crecemos.",
      "Me gusta pensar que podemos ser dos mujeres que construyen sus sueños sin dejar de hacer espacio para los de la otra.",
      "Y si el futuro nos cambia los planes, espero que podamos sentarnos a hablarlo, agarrarnos de la mano y descubrir juntas qué sigue.",
      "No tengo todas las respuestas, mi niña. Pero sí tengo muchísimas ganas de seguir construyendo cosas bonitas contigo."
    ]
  },
  {
    "id": "carta-11",
    "title": "Para cuando quieras bailar conmigo",
    "icon": "🎶",
    "section": "cartitas",
    "paragraphs": [
      "Mi pareja de baile favorita:",
      "No sé si te lo he dicho, pero bailar contigo es de mis cosas favoritas del mundo.",
      "Y no es solamente por bailar. Es tenerte cerquita, reírnos, mirarnos, hacer tonterías y sentir que por un ratito no hay nada más importante que ese momento.",
      "Me encanta que podamos compartir esas cosas que parecen pequeñas, pero que para mí terminan significando muchísimo.",
      "A veces me imagino que un día vamos a poder poner música y bailar sin estar pensando en cuándo nos toca despedirnos.",
      "Y hasta entonces, voy guardando las ganas.",
      "Eso sí, si me pisas, voy a reclamar. Si yo te piso, fue parte de la coreografía. JAJAJA.",
      "Te amo, mi niña. Gracias por hacer que hasta bailar una canción se convierta en un recuerdo que quiero guardar contigo."
    ]
  },
  {
    "id": "carta-12",
    "title": "Para cuando necesites reírte",
    "icon": "😂",
    "section": "cartitas",
    "paragraphs": [
      "Hola, changuita.",
      "Este documento oficial certifica que eres una niña muy bonita, muy amada y ligeramente insoportable en ocasiones. JAJAJAJA.",
      "La investigación fue realizada por tu inge favorita, quien ha dedicado una cantidad cuestionablemente grande de tiempo a observarte, extrañarte y pensar en ti.",
      "Los resultados indican que:",
      "• Tu sonrisa me distrae.",
      "• Tus abrazos son altamente adictivos.",
      "• Tus besos deberían estar disponibles bajo prescripción.",
      "• La distancia es una porquería.",
      "• Y yo estoy bien enamorada de ti, sin posibilidad de recuperación.",
      "Se recomienda una dosis diaria de besitos, llamadas conmigo y al menos una visita de tu novia cuando sea posible.",
      "En caso de efectos secundarios como sonrisas tontas, mariposas o ganas de abrazarme, favor de no suspender el tratamiento.",
      "Te amo, doctora. JAJAJA. 💗"
    ]
  },
  {
    "id": "carta-13",
    "title": "Para cuando sientas que no haces suficiente por mí",
    "icon": "🫶",
    "section": "cartitas",
    "paragraphs": [
      "Mi amor:",
      "Quiero que sepas algo: no tienes que ganarte mi amor todos los días haciendo cosas extraordinarias.",
      "No necesito que siempre tengas tiempo, que siempre sepas qué decir o que puedas estar para mí de todas las maneras posibles.",
      "Sé que tienes tu propia vida, tus pendientes, tus cansancios y tus sueños. Yo también tengo los míos.",
      "Para mí, amarte también es conocerte, respetar tus tiempos, interesarme por lo que te pasa y tratar de cuidarte sin pedirte que seas perfecta.",
      "Me hacen feliz tus detalles, sí, pero también me hace feliz saber de ti, escuchar tu voz, compartir una tontería o sentir que podemos hablarnos con honestidad.",
      "No tienes que hacer más para demostrarme que eres importante.",
      "No te amo por todo lo que haces por mí. Te amo porque eres tú, mi niña."
    ]
  },
  {
    "id": "carta-14",
    "title": "Para cuando estés orgullosa de ti",
    "icon": "🌟",
    "section": "cartitas",
    "paragraphs": [
      "MI DOCTORA LO LOGRÓ. 😭💗 ¿Ves esa personita que eres? ¿Todo lo que estás intentando, aprendiendo y construyendo? Pues yo sí lo veo y estoy muy orgullosa de ti.",
      "Sé que amas lo tuyo, y me encanta cuando hablas de eso que te apasiona. Me gusta verte emocionada, comprometida y persiguiendo tus metas.",
      "Quiero que tengas una vida que te haga sentir orgullosa de ti misma. Que cumplas sueños tuyos, que conozcas cosas nuevas y que te conviertas en todo eso que quieres ser.",
      "Y quiero estar ahí para escucharte contarme cómo te fue, para celebrar contigo y para recordarte lo increíble que eres cuando se te olvide.",
      "Aunque yo sea tu inge y tú mi doctora, aquí entre nosotras el título más importante es que soy tu novia y tu fan número uno.",
      "TE AMO, MI NIÑA. Presúmeme tus logros, que yo feliz de presumirte a ti."
    ]
  },
  {
    "id": "carta-15",
    "title": "Para cuando tengamos un malentendido",
    "icon": "💗",
    "section": "cartitas",
    "paragraphs": [
      "Mi niña:",
      "Si algo he aprendido de nosotras es que querernos muchísimo no significa que siempre vayamos a entendernos a la primera.",
      "A veces tenemos formas distintas de ver las cosas, sentimos intensamente o no encontramos las palabras que necesitamos en ese momento.",
      "Pero quiero que sigamos aprendiendo a escucharnos, incluso cuando sea difícil.",
      "No quiero que tengas miedo de decirme lo que sientes. Prefiero que podamos hablar de las cosas con cariño y honestidad, en lugar de hacer como si nada pasara.",
      "Tampoco quiero que olvidemos todo lo bonito que somos cada vez que tengamos un día complicado.",
      "No tenemos que pensar igual para amarnos bien. Podemos ser distintas y aun así aprender a encontrarnos a la mitad.",
      "Te amo, changuita. Quiero que nuestro amor sea un lugar donde las dos podamos hablar, aprender, equivocarnos y volver a intentarlo."
    ]
  },
  {
    "id": "carta-16",
    "title": "Para cuando no puedas dormir",
    "icon": "🌙",
    "section": "cartitas",
    "paragraphs": [
      "Hola, mi amor. ¿Qué haces despierta a estas horas? JAJAJA.",
      "Si pudiera, estaría ahí contigo, abrazándote por detrás y acomodándome hasta encontrar mi lugar favorito: pegadita a ti.",
      "Te acariciaría el cabello, te daría un besito y me quedaría contigo hasta que te diera sueño.",
      "Y seguramente terminaría hablándote de alguna cosa random cuando ya casi estuvieras dormida. Perdón, es que me gusta contarte todo.",
      "Pero si hoy tu cabeza no te deja descansar, no tienes que resolver tu vida entera esta noche, ¿sí?",
      "Mañana podrás pensar las cosas con más calma. Ahorita intenta descansar, mi niña.",
      "Imagínate que te estoy abrazando muy fuerte y que te doy un besito en la frente.",
      "Buenas noches, changuita. Te amo muchísimo. Si sueñas conmigo, espero salir bonita. JAJAJA."
    ]
  },
  {
    "id": "carta-17",
    "title": "Para cuando quieras saber si todavía me enamoras",
    "icon": "💗",
    "section": "cartitas",
    "paragraphs": [
      "Mi Juquila preciosa:",
      "Sí. Mil veces sí.",
      "Y no solamente porque seas bonita, aunque, a ver, tampoco vamos a fingir que no me encantas físicamente. JAJAJA.",
      "Me enamora conocerte tanto. Saber tus gestos, tus formas de reaccionar, las cosas que te emocionan y esas pequeñas costumbres que quizá tú ni notas.",
      "Me enamora que podamos hablar de cosas importantes y cinco minutos después estar diciendo la tontería más grande del planeta.",
      "Me enamora que seas tú, con tu manera de ser, con todo lo que hemos vivido y con todo lo que seguimos descubriendo.",
      "Y me parece precioso que, después de tanto tiempo, todavía tenga ganas de ir a verte, de abrazarte y de compartir mis días contigo.",
      "No quiero que nuestro amor dependa de sentir mariposas a cada segundo. Quiero ese amor que también se reconoce en la confianza, en el cuidado y en las ganas de seguir construyendo.",
      "Pero sí, mi niña: todavía me pones bien mensa. JAJAJA. 💗"
    ]
  },
  {
    "id": "carta-18",
    "title": "Para cuando quieras imaginar nuestra vida juntas",
    "icon": "🏡",
    "section": "cartitas",
    "paragraphs": [
      "Mi niña bonita:",
      "A veces me pongo a imaginar cómo sería compartir más días contigo.",
      "Despertarnos y saber que no tenemos que despedirnos pronto. Hacer nuestras cosas, escucharte contarme de tu día, contarte mis ocurrencias y decidir qué vamos a comer aunque seguramente tardemos una eternidad. JAJAJA.",
      "Imagino los días bonitos, pero también los días normales. Los de cansancio, pendientes, desorden y cero ganas de hacer algo emocionante.",
      "Porque no solamente quiero los momentos de película contigo. También quiero esos días sencillos que, sin darnos cuenta, terminan siendo los que más extrañamos.",
      "No sé exactamente cómo será nuestro futuro ni cuándo se acomodará todo, pero me emociona pensar en las posibilidades.",
      "Qué bonito sería seguir siendo nosotras, creciendo, cambiando y encontrando nuevas formas de hacernos felices.",
      "Y qué bonito sería que, entre todas las cosas que cambien, todavía podamos mirarnos y pensar: «Sí, eres tú»."
    ]
  },
  {
    "id": "carta-19",
    "title": "Para cuando sientas que nadie te entiende",
    "icon": "🫂",
    "section": "cartitas",
    "paragraphs": [
      "Mi changuita:",
      "Ojalá pudiera quitarte esa sensación de sentirte incomprendida, aunque fuera por un ratito.",
      "Sé que no siempre voy a entender exactamente lo que estás sintiendo, incluso con todo el tiempo que llevamos juntas. No puedo leer tu mente, por más que a veces quisiera tener esa actualización instalada. JAJAJA.",
      "Pero quiero preguntarte, escucharte y conocerte también en esas partes de ti que quizá te cuesta explicar.",
      "No tienes que encontrar las palabras perfectas para hablar conmigo. Podemos ir despacito, detenernos, intentarlo otra vez.",
      "Y si hoy no tienes ganas de explicar nada, también podemos quedarnos cerquita y ya.",
      "Me encanta que podamos ser tan distintas y aun así encontrar maneras de acompañarnos.",
      "No necesito entenderte perfectamente para tratarte con amor. Necesito seguir teniendo la disposición de conocerte.",
      "Y créeme, mi niña, todavía quiero conocerte muchísimo más."
    ]
  },
  {
    "id": "carta-20",
    "title": "Para cuando olvides lo importante que eres para mí",
    "icon": "💌",
    "section": "cartitas",
    "paragraphs": [
      "Mi amor de mi vida:",
      "No sé si existe una manera suficientemente grande de explicar lo que significas para mí sin que termine escribiendo veinte páginas. Y mira que me estoy intentando controlar. JAJAJA.",
      "Eres mi persona favorita. La persona a la que quiero contarle lo que me pasa, lo que me emociona, lo que me da miedo y hasta las cosas que probablemente ni siquiera eran importantes antes de contártelas.",
      "Contigo me siento querida, tranquila y acompañada. Siento que puedo ser yo, con todas mis cosas, y eso es algo que valoro muchísimo.",
      "Hemos pasado por tantas cosas juntas que a veces me sorprende pensar en todo lo que hemos aprendido y vivido.",
      "Y aun así, aquí sigo, con ganas de verte, de abrazarte, de bailar contigo y de seguir haciendo recuerdos que algún día vamos a contar.",
      "Mi niña, si alguna vez dudas del lugar que tienes en mi corazón, vuelve a leer esto: no eres una partecita cualquiera de mi vida. Eres una de las personas más importantes de ella.",
      "Te amo. Muchísimo más de lo que me cabe en estas hojas."
    ]
  },
  {
    "id": "carta-21",
    "title": "Para cuando necesites sentirte acompañada",
    "icon": "💗",
    "section": "cartitas",
    "paragraphs": [
      "Mi niña:",
      "Aunque hoy no pueda sentarme a tu lado, quiero que sepas que tienes a alguien con quien compartir lo que te pasa.",
      "Si necesitas contarme algo, quiero escucharte. Si necesitas distraerte, te cuento cualquier tontería. Si necesitas silencio, también podemos estar en llamada haciendo cada una sus cosas.",
      "No quiero que sientas que tienes que esperar a verme para compartir conmigo tu vida. Quiero acompañarte también en esos días que no tienen nada extraordinario, cuando solamente necesitas contarle a alguien cómo te fue.",
      "Y si hoy necesitas más espacio, también está bien. Amar no significa tener que estar disponibles todo el tiempo.",
      "Me gusta que podamos cuidarnos sin dejar de ser nosotras mismas.",
      "Te mando un abrazo de esos que te hacen cerrar los ojitos y soltar todo lo que traías cargando.",
      "Aquí está tu inge, mi amor. Con muchas ganas de escucharte y de darte besitos."
    ]
  },
  {
    "id": "carta-22",
    "title": "Para cuando sientas que el tiempo pasa demasiado rápido",
    "icon": "⏳",
    "section": "cartitas",
    "paragraphs": [
      "Mi Juquila:",
      "A veces me pongo a pensar en cuánto tiempo llevamos juntas y en todas las versiones de nosotras que hemos conocido.",
      "Hemos cambiado, aprendido, vivido cosas bonitas y otras que quizá nos hubiera gustado que fueran distintas.",
      "Y me da mucha ternura pensar que hemos podido conocernos tanto, descubrir cómo cuidarnos y seguir encontrando motivos para compartir nuestra vida.",
      "No quiero dar por sentado el tiempo contigo. Quiero seguir prestándole atención a tus historias, a tus cambios, a las cosas nuevas que te gustan y a esa persona en la que te estás convirtiendo.",
      "Porque amarte no significa quedarme solamente con la niña que conocí al principio. También significa tener ganas de conocer a la mujer que eres hoy.",
      "Y qué suerte la mía que, entre tantas etapas y tantos cambios, todavía pueda llamarte mi niña.",
      "Te amo en lo que fuimos, en lo que somos y en lo que nos falta descubrir."
    ]
  },
  {
    "id": "carta-23",
    "title": "Para cuando estés de malas con todo el mundo",
    "icon": "😂",
    "section": "cartitas",
    "paragraphs": [
      "JAJAJAJA, hola, mi changuita del mal humor. 💗 Antes de que me regañes por existir, vengo en son de paz.",
      "Te traigo besitos imaginarios, un abrazo y la oportunidad de que me cuentes quién te hizo enojar para juzgar la situación con la mayor objetividad posible. (Probablemente te voy a dar la razón, pero déjame fingir que soy imparcial).",
      "Ya en serio, mi niña, no tienes que estar de buenas para que yo te quiera.",
      "Puedes tener un día horrible, querer estar solita o no tener paciencia para nada. Yo también tengo mis momentos, así que tampoco me voy a hacer la santa. JAJAJA.",
      "Solamente quiero que, cuando se te pase un poquito el coraje, te acuerdes de que te amo y que podemos hablar sin hacernos daño.",
      "Y si el problema fui yo, prometo escuchar antes de sacar mi defensa de ingeniera. 😭 Te amo, enojoncita hermosa."
    ]
  },
  {
    "id": "carta-24",
    "title": "Para cuando quieras recordar que somos un equipo",
    "icon": "🫶",
    "section": "cartitas",
    "paragraphs": [
      "Mi niña:",
      "Me gusta pensar que somos un equipo, pero no porque tengamos que resolverlo todo juntas o pensar igual en cada cosa.",
      "Sino porque me gusta saber que podemos apoyarnos mientras cada una construye su camino.",
      "Tú tienes tus sueños, tu medicina y todas esas cosas que te hacen ser tú. Yo tengo mis sueños, mi ingeniería y mis propias locuras.",
      "No quiero que dejemos de ser dos personas completas para convertirnos en una sola. Quiero que podamos seguir creciendo individualmente y también encontrar maneras de crecer juntas.",
      "Quiero celebrar tus logros sin sentir que compiten con los míos, apoyarte cuando algo se te complique y saber que también puedo compartir contigo mis propias dudas.",
      "Me encanta que nos complementemos sin tener que ser iguales.",
      "Tú y yo, mi amor. No contra el mundo, sino aprendiendo a caminar por él mientras nos cuidamos.",
      "Qué bonito que, entre tantas personas, hayamos encontrado algo tan nuestro."
    ]
  },
  {
    "id": "carta-25",
    "title": "Para cuando quieras saber qué siento cuando te veo llegar",
    "icon": "💗",
    "section": "cartitas",
    "paragraphs": [
      "Mi amorcito:",
      "Cada vez que voy a verte, hay una parte de mí que se emociona muchísimo.",
      "Porque sí, organizo las cosas, hago mis planes y veo cómo llegar, pero también voy contando las ganas de tenerte enfrente y poder abrazarte de verdad.",
      "Me encanta ese momento en el que ya no tengo que imaginar cómo sería tenerte cerquita porque simplemente estás ahí.",
      "Puedo mirarte, tocarte la carita, darte besitos y molestarte en persona, como debe ser. JAJAJA.",
      "Y aunque después toque despedirnos, esos días significan muchísimo para mí.",
      "No voy solamente a visitarte. Voy a pasar tiempo con alguien que amo, a cuidar lo que tenemos y a construir recuerdos que me llevo conmigo cuando vuelvo a casa.",
      "Ojalá algún día ya no tengamos que organizar tanto para vernos.",
      "Mientras tanto, mi niña, cada abrazo tuyo sigue valiendo todo el viaje."
    ]
  },
  {
    "id": "carta-26",
    "title": "Para cuando necesites que te recuerde que te amo",
    "icon": "💌",
    "section": "cartitas",
    "paragraphs": [
      "Te amo, mi niña.",
      "Te amo cuando hablamos durante horas y cuando solamente tenemos unos minutitos.",
      "Te amo cuando nos reímos de cualquier tontería, cuando me cuentas algo que te emociona y cuando necesitas hablar de algo que te preocupa.",
      "Te amo cuando estamos juntitas y cuando toca extrañarnos.",
      "Te amo cuando todo se siente fácil y cuando necesitamos detenernos, escucharnos y volver a intentarlo.",
      "Te amo en las cosas grandes, pero también en las chiquitas: en nuestros bailes, en nuestros chismes, en nuestras bromas y en esa confianza tan bonita que hemos construido.",
      "No siempre voy a saber encontrar las palabras perfectas para demostrarte todo lo que siento.",
      "Pero quiero seguir encontrando maneras de hacértelo saber.",
      "Así que, por si hoy necesitabas leerlo de alguien que te conoce, te cuida y te elige:",
      "TE AMO, JUQUILA. MUCHÍSIMO. Y SÍ, ESTOY BIEN MENSA POR TI. 💗"
    ]
  },
  {
    "id": "carta-27",
    "title": "Para cuando sientas que ya sabes todo lo que te quiero decir",
    "icon": "🥹",
    "section": "cartitas",
    "paragraphs": [
      "JAJAJA, mi niña, ¿a poco crees que ya terminé de hablar de lo mucho que te amo?",
      "Ni de chiste.",
      "Podría contarte mil veces lo bonita que eres, lo orgullosa que estoy de ti y lo mucho que me gusta compartir mi vida contigo.",
      "Pero creo que hay algo todavía más importante: no quiero que solamente leas que te amo. Quiero que lo sientas en cómo te escucho, en cómo intento cuidarte, en cómo respeto lo que sientes y en cómo busco la manera de verte aunque estemos lejos.",
      "Quiero que lo encuentres en nuestras conversaciones, en nuestros abrazos, en las risas que nos sacamos y hasta en las veces que nos toca aprender a entendernos mejor.",
      "Las cartas se terminan, las hojas se acaban y yo seguramente voy a seguir haciendo chistes malos.",
      "Pero mis ganas de seguir conociéndote, cuidándote y construyendo cosas bonitas contigo no caben en una sola cartita.",
      "Así que ni modo, changuita: te tocó una novia que te va a seguir escribiendo cosas cursis. Te aguantas."
    ]
  },
  {
    "id": "carta-28",
    "title": "Para abrir cuando quieras llorar bonito",
    "icon": "❤️‍🩹",
    "section": "cartitas",
    "paragraphs": [
      "Mi Juquila, mi niña, mi changuita, mi amor de mi vida:",
      "A veces me cuesta creer que, entre tantas personas que existen en el mundo, haya encontrado a alguien con quien puedo compartir tantas partes de mí.",
      "Alguien a quien quiero contarle mis cosas, con quien puedo reírme hasta que me duela la panza y a quien también quiero buscar cuando la vida se pone difícil.",
      "Hemos vivido tantas cosas que no quiero que nuestro amor se reduzca a una sola etapa, a una sola versión de nosotras o a los momentos en los que todo sale bonito.",
      "Quiero recordar también todo lo que hemos aprendido, las veces que nos hemos cuidado y las maneras en las que hemos encontrado el camino de vuelta a nosotras.",
      "Me haces sentir querida y en paz. Y eso es algo que no quiero dar por sentado nunca.",
      "No sé qué hice para tener la suerte de compartir mi vida con una mujer como tú, pero sí sé que quiero cuidar lo que tenemos.",
      "Quiero verte crecer, cumplir tus sueños, enamorarte cada vez más de tu profesión y descubrir todas las cosas que todavía no sabemos de la vida.",
      "Quiero seguir bailando contigo, riéndome de nuestras tonterías, escuchando tus historias y encontrando la manera de llegar hasta ti cuando nos toque estar lejos.",
      "Y cuando pienso en mi persona favorita, no tengo que buscar demasiado. Pienso en ti.",
      "No porque seamos perfectas ni porque siempre sepamos qué hacer, sino porque eres la persona con la que quiero compartir todo eso que soy y todo eso en lo que me voy convirtiendo.",
      "Si algún día la vida se siente demasiado complicada, espero que podamos recordar que no tenemos que resolverlo todo hoy. Que podemos hablarnos, escucharnos y seguir descubriendo cómo cuidarnos mejor.",
      "Mi niña, no sé cómo explicarte lo inmenso que es que seas tú.",
      "Solamente sé que te amo. Que estoy orgullosa de ti. Que me encanta ser tu novia. Y que, entre todas las cosas que puedo imaginar para mi vida, compartirla contigo es una de las que más bonito me hace sentir el corazón.",
      "Gracias por ser tú conmigo.",
      "Te amo muchísimo, mi amor de mi vida.",
      "Con todo lo que soy, tu inge enamorada. 💗"
    ]
  },
  {
    "id": "carta-29",
    "title": "Para abrir sin motivo",
    "icon": "💗",
    "section": "extra",
    "paragraphs": [
      "Hola, mi niña. No pasó nada, no es aniversario ni es una fecha especial. Simplemente me acordé de ti y pensé que quería dejarte un recordatorio de que tienes una novia que te ama muchísimo. Bueno, eso ya lo sabes, pero te lo voy a repetir hasta que te hartes. JAJAJA."
    ]
  },
  {
    "id": "carta-30",
    "title": "Para cuando quieras un besito",
    "icon": "😘",
    "section": "extra",
    "paragraphs": [
      "Acabas de recibir un besito en la frente, uno en cada cachetito y tres en la boca. No preguntes cómo llegaron, simplemente disfruta el servicio. Para reclamar más, favor de contactar a tu novia en horario de disponibilidad emocional permanente. JAJAJA."
    ]
  },
  {
    "id": "carta-31",
    "title": "Para cuando te sientas solita",
    "icon": "🫂",
    "section": "extra",
    "paragraphs": [
      "Ojalá pudiera aparecer ahí y sentarme contigo, aunque no hiciéramos absolutamente nada. A veces no necesitamos grandes planes, solamente estar cerquita de alguien con quien nos sentimos en casa. Te mando un abrazo enorme, mi niña. No tienes que contestarme bonito ni fingir que estás bien. Puedes ser tú conmigo."
    ]
  },
  {
    "id": "carta-32",
    "title": "Para recordar una de nuestras diferencias",
    "icon": "💗",
    "section": "extra",
    "paragraphs": [
      "Me da risa pensar en lo distintas que somos y en cómo de todas formas terminamos encontrando la manera de complementarnos. Tú con tus cosas, yo con las mías, las dos bien intensas y cada una convencida de que tiene la razón. JAJAJA. Pero qué bonito que no tengamos que ser iguales para entender que queremos cuidarnos."
    ]
  },
  {
    "id": "carta-33",
    "title": "Para cuando te despiertes",
    "icon": "☀️",
    "section": "extra",
    "paragraphs": [
      "Buenos días, mi doctora hermosa. Espero que hoy te pasen cosas bonitas, que comas rico y que nadie te saque canas verdes. Si el día sale horrible, recuerda que al final tienes una novia que está bien enamorada de ti. Si sale bonito, me cuentas todo. Te amo, changuita."
    ]
  },
  {
    "id": "carta-34",
    "title": "Para cuando quieras un poquito de cursilería",
    "icon": "🌷",
    "section": "extra",
    "paragraphs": [
      "Qué suerte que existas. Qué suerte conocerte tanto. Qué suerte que podamos ser tan nosotras cuando estamos juntas. Y qué suerte que, entre todo lo que la vida nos pone enfrente, yo pueda seguir diciéndote: «Mi niña, te amo». Ya, fin del comunicado porque me puse sentimental."
    ]
  },
  {
    "id": "carta-35",
    "title": "Para cuando quieras recordar que eres mi persona favorita",
    "icon": "💌",
    "section": "extra",
    "paragraphs": [
      "Si me preguntan a quién quiero contarle algo, pienso en ti. Si me pasa algo bonito, quiero contártelo. Si algo me preocupa, también. Si veo una tontería, probablemente te la mande. Básicamente, changuita, tienes el puesto de encargada de recibir el 90 % de mis pensamientos. No hay renuncia disponible. JAJAJA."
    ]
  },
  {
    "id": "carta-36",
    "title": "Para guardar y releer",
    "icon": "💗",
    "section": "extra",
    "paragraphs": [
      "Si algún día encuentras todas estas cartitas y las lees otra vez, quiero que recuerdes algo: las escribí porque quería que tuvieras pedacitos de mi amor que pudieras tocar con las manos y que sirva de algo la ingeniería, jajajajaja. Para que, cuando yo no esté ahí, tengas algo mío cerquita. Porque sí, mi niña, soy cursi, intensa y bien enamorada de ti. Y qué bueno que seas tú quien me provoca todo esto."
    ]
  },
  {
    "id": "ultima-notita",
    "title": "Una última notita para Juquila",
    "icon": "💌",
    "section": "ultima",
    "paragraphs": [
      "Mi niña bonita:",
      "Si llegaste hasta aquí, primero que nada, ¿CÓMO QUE LEÍSTE TODO? JAJAJA. Te amo muchísimo.",
      "Hice todas estas cartitas porque a veces siento tantas cosas por ti que no sé cómo acomodarlas en una sola conversación. Y quería que tuvieras algo que pudieras leer cuando me extrañes, cuando estés feliz, cuando tengas un día horrible o simplemente cuando quieras recordar que hay alguien que te ama un montón.",
      "No importa cuál abras ni cuándo lo hagas. Ojalá cada una te recuerde un pedacito de lo que eres para mí.",
      "Gracias por compartir tu vida conmigo, por dejarme conocerte tanto y por ser esa personita a la que quiero contarle hasta la cosa más insignificante de mi día.",
      "Eres mi niña, mi changuita, mi doctora preciosa, mi persona favorita y el amor de mi vida.",
      "Y aunque la distancia a veces sea una porquería, me sigue dando muchísima ilusión encontrar la manera de verte, abrazarte y pasar tiempo contigo.",
      "Ojalá nos queden muchísimas canciones por bailar, chismes por contar, besitos por darnos y recuerdos por construir.",
      "Te amo hoy, mi niña. Y quiero seguir encontrando formas bonitas de demostrártelo mañana también.",
      "Con todo mi amor,",
      "Tu inge enamorada. 💗"
    ]
  }
];
