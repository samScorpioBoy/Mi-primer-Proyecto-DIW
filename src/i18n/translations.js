const translations = {

  // ─── NAV ───────────────────────────────────────────────────────────────────
  nav: {
    inicio:   { ES: "INICIO",              EN: "HOME",               VAL: "INICI" },
    cultura:  { ES: "CULTURA / OCIO",      EN: "CULTURE / LEISURE",  VAL: "CULTURA / OCI" },
    carne:    { ES: "CARNE JOVEN",         EN: "YOUTH CARD",         VAL: "CARNET JOVE" },
    empleo:   { ES: "EMPLEO Y FORMACIÓN",  EN: "JOBS & TRAINING",    VAL: "OCUPACIÓ I FORMACIÓ" },
    cursos:   { ES: "CURSOS",              EN: "COURSES",            VAL: "CURSOS" },
    vivienda: { ES: "VIVIENDA",            EN: "HOUSING",            VAL: "HABITATGE" },
    salud:    { ES: "SALUD",              EN: "HEALTH",             VAL: "SALUT" },
  },

  // ─── HOME ──────────────────────────────────────────────────────────────────
  home: {
    hero: { ES: "Conecta con tu ciudad...", EN: "Connect with your city...", VAL: "Connecta amb la teua ciutat..." },
    p1: {
      ES: "Sabemos que construir tu futuro no es una tarea sencilla, especialmente cuando tienes que hacer malabares con tantas responsabilidades a la vez: cuidar tu salud física y mental, descifrar cómo acceder a una vivienda o buscar las mejores oportunidades de estudio y formación. A veces, la información está demasiado dispersa y encontrar respuestas genera más estrés que soluciones.",
      EN: "We know that building your future is not an easy task, especially when you have to juggle so many responsibilities at once: taking care of your physical and mental health, figuring out how to access housing, or finding the best study and training opportunities. Sometimes information is too scattered and finding answers creates more stress than solutions.",
      VAL: "Sabem que construir el teu futur no és una tasca senzilla, especialment quan has de fer malabars amb tantes responsabilitats alhora: cuidar la teua salut física i mental, esbrinar com accedir a un habitatge o buscar les millors oportunitats d'estudi i formació. De vegades, la informació està massa dispersa i trobar respostes genera més estrès que solucions.",
    },
    p2: {
      ES: "Por eso hemos creado esta plataforma: para ser tu central de recursos integral. Nuestro compromiso es simplificar esa búsqueda, reuniendo en un solo lugar herramientas confiables y actualizadas que cubren tus necesidades reales. Desde apoyo emocional y bienestar, hasta guías prácticas para ayudas de alquiler, becas y talleres en tu zona, este es tu espacio seguro para informarte, tomar impulso y sentir que tienes el respaldo necesario para dar el siguiente paso con confianza.",
      EN: "That is why we created this platform: to be your comprehensive resource hub. Our commitment is to simplify that search, bringing together reliable and up-to-date tools in one place that cover your real needs. From emotional support and wellbeing, to practical guides for rental assistance, scholarships and workshops in your area, this is your safe space to get informed, gain momentum and feel you have the support you need to take the next step with confidence.",
      VAL: "Per això hem creat aquesta plataforma: per ser la teua central de recursos integral. El nostre compromís és simplificar eixa cerca, reunint en un sol lloc eines fiables i actualitzades que cobreixen les teues necessitats reals. Des de suport emocional i benestar, fins a guies pràctiques per a ajudes de lloguer, beques i tallers a la teua zona, aquest és el teu espai segur per a informar-te, agafar impuls i sentir que tens el suport necessari per a fer el següent pas amb confiança.",
    },
    cats: {
      formacion: { ES: "FORMACIÓN",               EN: "TRAINING",           VAL: "FORMACIÓ" },
      vivienda:  { ES: "AYUDAS ALQUILER\nY VIVIENDA", EN: "RENTAL\nASSISTANCE", VAL: "AJUDES LLOGUER\nI HABITATGE" },
      salud:     { ES: "SALUD Y\nBIENESTAR",      EN: "HEALTH &\nWELLBEING", VAL: "SALUT I\nBENESTAR" },
      cursos:    { ES: "CURSOS Y\nTALLERES",      EN: "COURSES &\nWORKSHOPS", VAL: "CURSOS I\nTALLERS" },
    },
  },

  // ─── CURSOS ─────────────────────────────────────────────────────────────────
  cursos: {
    heroTitle:     { ES: "Desarrolla tu talento:\nCursos y Talleres en Burjassot", EN: "Develop your talent:\nCourses and Workshops in Burjassot", VAL: "Desenvolupa el teu talent:\nCursos i Tallers a Burjassot" },
    heroDesc:      { ES: "Formación práctica, gratuita o de bajo coste para impulsar tus habilidades y conocer gente nueva.", EN: "Practical training, free or low-cost to boost your skills and meet new people.", VAL: "Formació pràctica, gratuïta o de baix cost per a impulsar les teues habilitats i conéixer gent nova." },
    filtCat:       { ES: "Categoría",   EN: "Category", VAL: "Categoria" },
    filtTipo:      { ES: "Tipo",        EN: "Type",     VAL: "Tipus" },
    gratis:        { ES: "Gratuito",    EN: "Free",     VAL: "Gratuït" },
    pago:          { ES: "De pago",     EN: "Paid",     VAL: "De pagament" },
    limpiar:       { ES: "✕ Limpiar filtros", EN: "✕ Clear filters", VAL: "✕ Netejar filtres" },
    cargando:      { ES: "Cargando cursos...", EN: "Loading courses...", VAL: "Carregant cursos..." },
    sinResultados: { ES: "No hay cursos con los filtros seleccionados.", EN: "No courses match the selected filters.", VAL: "No hi ha cursos amb els filtres seleccionats." },
    verTodos:      { ES: "Ver todos los cursos", EN: "See all courses", VAL: "Veure tots els cursos" },
    disponibles:   { ES: "disponibles", EN: "available",  VAL: "disponibles" },
    curso:         { ES: "curso",       EN: "course",    VAL: "curs" },
    cursos:        { ES: "cursos",      EN: "courses",   VAL: "cursos" },
    inscribete:    { ES: "Inscríbete Ahora", EN: "Sign Up Now", VAL: "Inscriu-te Ara" },
  },

  // ─── SALUD ──────────────────────────────────────────────────────────────────
  salud: {
    // Hero
    heroTitle: {
      ES: "Bienestar Joven en Burjassot:\nCuida tu Salud Física y Mental",
      EN: "Youth Wellbeing in Burjassot:\nTake Care of Your Physical and Mental Health",
      VAL: "Benestar Jove a Burjassot:\nCuida la teua Salut Física i Mental",
    },
    heroDesc: {
      ES: "El desarrollo integral de los jóvenes de Burjassot es nuestra prioridad. Una buena salud física y mental es la base para alcanzar tus metas.",
      EN: "The comprehensive development of Burjassot's youth is our priority. Good physical and mental health is the foundation for achieving your goals.",
      VAL: "El desenvolupament integral dels joves de Burjassot és la nostra prioritat. Una bona salut física i mental és la base per a assolir les teues metes.",
    },

    // Cards servicio
    card1Title: { ES: "Salud Mental Joven",          EN: "Youth Mental Health",            VAL: "Salut Mental Jove" },
    card1Desc:  { ES: "Apoyo psicológico, talleres y grupos de ayuda", EN: "Psychological support, workshops and help groups", VAL: "Suport psicològic, tallers i grups d'ajuda" },
    card1Btn:   { ES: "Más Información",              EN: "More Info",                      VAL: "Més Informació" },
    card2Title: { ES: "Actividades Saludables",       EN: "Healthy Activities",             VAL: "Activitats Saludables" },
    card2Desc:  { ES: "Deporte, nutrición y hábitos de vida activa", EN: "Sport, nutrition and active lifestyle habits", VAL: "Esport, nutrició i hàbits de vida activa" },
    card2Btn:   { ES: "Ver Programa",                 EN: "View Programme",                 VAL: "Veure Programa" },
    card3Title: { ES: "Salud Sexual y reproductiva",  EN: "Sexual & Reproductive Health",   VAL: "Salut Sexual i Reproductiva" },
    card3Desc:  { ES: "Información, asesoramiento y prevención.", EN: "Information, counselling and prevention.", VAL: "Informació, assessorament i prevenció." },
    card3Btn:   { ES: "Más Información",              EN: "More Info",                      VAL: "Més Informació" },

    // Artículos
    art1Title: { ES: "Prevención del VIH e ITS", EN: "HIV and STI Prevention", VAL: "Prevenció del VIH i ITS" },
    art1Desc: {
      ES: "La información veraz es tu mejor aliada. Conocer los métodos de transmisión y prevención del VIH y otras ITS es fundamental para tomar decisiones responsables.",
      EN: "Accurate information is your best ally. Knowing how HIV and other STIs are transmitted and prevented is essential for making responsible decisions.",
      VAL: "La informació veraç és la teua millor aliada. Conéixer els mètodes de transmissió i prevenció del VIH i altres ITS és fonamental per a prendre decisions responsables.",
    },
    art2Title: { ES: "Bienestar Emocional y Gestión del Estrés", EN: "Emotional Wellbeing and Stress Management", VAL: "Benestar Emocional i Gestió de l'Estrès" },
    art2Desc: {
      ES: "El estrés de los estudios o el trabajo puede afectar tu día a día. Te proporcionamos herramientas prácticas y talleres para gestionar la ansiedad y construir resiliencia.",
      EN: "Stress from studies or work can affect your daily life. We provide practical tools and workshops to manage anxiety and build resilience.",
      VAL: "L'estrès dels estudis o la feina pot afectar el teu dia a dia. Et proporcionem eines pràctiques i tallers per a gestionar l'ansietat i construir resiliència.",
    },
    art3Title: { ES: "Adicciones y Nutrición", EN: "Addictions and Nutrition", VAL: "Addiccions i Nutrició" },
    art3Desc: {
      ES: "Ofrecemos talleres sobre prevención de adicciones y fomentamos una relación saludable con la comida a través de charlas sobre nutrición equilibrada.",
      EN: "We offer workshops on addiction prevention and promote a healthy relationship with food through talks on balanced nutrition.",
      VAL: "Oferim tallers sobre prevenció d'addiccions i fomentem una relació saludable amb el menjar a través de xerrades sobre nutrició equilibrada.",
    },
    art4Title: { ES: "Talleres de Primeros Auxilios y RCP", EN: "First Aid and CPR Workshops", VAL: "Tallers de Primers Auxilis i RCP" },
    art4Desc: {
      ES: "Organizamos cursos básicos de primeros auxilios y RCP para que adquieras conocimientos esenciales en situaciones críticas.",
      EN: "We organise basic first aid and CPR courses so you can acquire essential knowledge for critical situations.",
      VAL: "Organitzem cursos bàsics de primers auxilis i RCP perquè adquirisques coneixements essencials en situacions crítiques.",
    },

    // Salud Sexual
    sexualTitle: {
      ES: "🌿 Salud Sexual y Reproductiva: Cuídate y Decide con Información",
      EN: "🌿 Sexual and Reproductive Health: Take Care and Decide with Information",
      VAL: "🌿 Salut Sexual i Reproductiva: Cuida't i Decideix amb Informació",
    },
    sexualIntro: {
      ES: "Tu bienestar sexual es parte fundamental de tu salud. Aquí tienes toda la información y los recursos que necesitas de forma directa, confidencial y segura.",
      EN: "Your sexual wellbeing is a fundamental part of your health. Here you have all the information and resources you need in a direct, confidential and safe way.",
      VAL: "El teu benestar sexual és part fonamental de la teua salut. Ací tens tota la informació i els recursos que necessites de forma directa, confidencial i segura.",
    },
    sex1Title: { ES: "Métodos Anticonceptivos", EN: "Contraceptive Methods", VAL: "Mètodes Anticonceptius" },
    sex1i1: { ES: "Preservativo: el único método que protege de embarazos Y de las ITS.", EN: "Condom: the only method that protects against both pregnancy AND STIs.", VAL: "Preservatiu: l'únic mètode que protegeix d'embarassos I de les ITS." },
    sex1i2: { ES: "Métodos hormonales (Píldora, Anillo, Parche, DIU, Implante): efectivos contra embarazos, pero no contra ITS.", EN: "Hormonal methods (Pill, Ring, Patch, IUD, Implant): effective against pregnancy, but not against STIs.", VAL: "Mètodes hormonals (Píndola, Anell, Pegat, DIU, Implant): efectius contra embarassos, però no contra ITS." },
    sex1i3: { ES: "¿Dónde informarte? Acude al Centro de Salud de Burjassot. Gratuito y confidencial.", EN: "Where to get information? Go to the Burjassot Health Centre. Free and confidential.", VAL: "On informar-te? Acudix al Centre de Salut de Burjassot. Gratuït i confidencial." },
    sex2Title: { ES: "Prevención y Pruebas de ITS y VIH", EN: "STI and HIV Prevention and Testing", VAL: "Prevenció i Proves d'ITS i VIH" },
    sex2i1: { ES: "Las ITS son comunes y muchas veces sin síntomas. La detección temprana es clave.", EN: "STIs are common and often have no symptoms. Early detection is key.", VAL: "Les ITS són comunes i moltes vegades sense símptomes. La detecció primerenca és clau." },
    sex2i2: { ES: "¿Has tenido una práctica de riesgo? Hacerse las pruebas es un acto de responsabilidad.", EN: "Had a risky encounter? Getting tested is an act of responsibility.", VAL: "Has tingut una pràctica de risc? Fer-se les proves és un acte de responsabilitat." },
    sex2i3: { ES: "Pruebas gratuitas en tu Centro de Salud o en el CIPS más cercano.", EN: "Free tests at your Health Centre or nearest CIPS.", VAL: "Proves gratuïtes al teu Centre de Salut o al CIPS més pròxim." },
    sex3Title: { ES: "Consentimiento y Relaciones Sanas", EN: "Consent and Healthy Relationships", VAL: "Consentiment i Relacions Sanes" },
    sex3i1: { ES: "El consentimiento debe ser libre, entusiasta y reversible en cualquier momento.", EN: "Consent must be free, enthusiastic and reversible at any time.", VAL: "El consentiment ha de ser lliure, entusiasta i reversible en qualsevol moment." },
    sex3i2: { ES: "Si hay control, chantaje o violencia en tu relación, no estás solo/a.", EN: "If there is control, blackmail or violence in your relationship, you are not alone.", VAL: "Si hi ha control, xantatge o violència en la teua relació, no estàs sol/a." },
    sex3i3: { ES: "Ayuda inmediata: llama al 016 (no deja rastro) o contacta con Servicios Sociales.", EN: "Immediate help: call 016 (leaves no trace) or contact Social Services.", VAL: "Ajuda immediata: truca al 016 (no deixa rastre) o contacta amb Serveis Socials." },
    sex4Title: { ES: "Asesoría Afectivo-Sexual en Burjassot", EN: "Affective-Sexual Counselling in Burjassot", VAL: "Assessoria Afectivo-Sexual a Burjassot" },
    sex4i1: { ES: "Servicio de Orientación Juvenil con psicólogos y sexólogos sin tabúes.", EN: "Youth Guidance Service with psychologists and sexologists, no taboos.", VAL: "Servei d'Orientació Juvenil amb psicòlegs i sexòlegs sense tabús." },
    sex4i2: { ES: "Contacto directo por teléfono, WhatsApp o correo electrónico.", EN: "Direct contact by phone, WhatsApp or email.", VAL: "Contacte directe per telèfon, WhatsApp o correu electrònic." },
    sex4i3: { ES: "Atención presencial en la Casa de la Juventud. 100% confidencial y gratuita.", EN: "In-person care at the Youth House. 100% confidential and free.", VAL: "Atenció presencial a la Casa de la Joventut. 100% confidencial i gratuïta." },

    // Salud Mental
    mentalTitle: {
      ES: "🧠 Salud Mental Joven: Tu bienestar emocional es nuestra prioridad",
      EN: "🧠 Youth Mental Health: Your emotional wellbeing is our priority",
      VAL: "🧠 Salut Mental Jove: El teu benestar emocional és la nostra prioritat",
    },
    mentalIntro: {
      ES: "Sentirse abrumado, triste, con ansiedad o estrés es completamente normal. En Jove Burjassot te ofrecemos un espacio seguro, libre de juicios, 100% confidencial y gratuito.",
      EN: "Feeling overwhelmed, sad, anxious or stressed is completely normal. At Jove Burjassot we offer you a safe, judgement-free space, 100% confidential and free.",
      VAL: "Sentir-se aclaparat, trist, amb ansietat o estrès és completament normal. A Jove Burjassot t'oferim un espai segur, lliure de judicis, 100% confidencial i gratuït.",
    },
    men1Title: { ES: "Asesoría Psicológica Individual", EN: "Individual Psychological Counselling", VAL: "Assessoria Psicològica Individual" },
    men1i1: { ES: "Estrés por estudios, ansiedad, tristeza, autoestima, conflictos familiares y gestión emocional.", EN: "Stress from studies, anxiety, sadness, self-esteem, family conflicts and emotional management.", VAL: "Estrès pels estudis, ansietat, tristesa, autoestima, conflictes familiars i gestió emocional." },
    men1i2: { ES: "Psicólogos/as especializados en juventud, atención individualizada y confidencial.", EN: "Psychologists specialised in youth, individualised and confidential care.", VAL: "Psicòlegs/es especialitzats en joventut, atenció individualitzada i confidencial." },
    men1i3: { ES: "Totalmente gratuito: recurso del ayuntamiento para ti.", EN: "Completely free: a council resource for you.", VAL: "Totalment gratuït: recurs de l'ajuntament per a tu." },
    men2Title: { ES: "Grupos de Apoyo Mutuo", EN: "Mutual Support Groups", VAL: "Grups de Suport Mutu" },
    men2i1: { ES: "Espacios seguros donde expresarte libremente y compartir experiencias sin juicios.", EN: "Safe spaces where you can express yourself freely and share experiences without judgement.", VAL: "Espais segurs on expressar-te lliurement i compartir experiències sense judicis." },
    men2i2: { ES: "Pequeños grupos con jóvenes de Burjassot en situaciones similares.", EN: "Small groups with young people from Burjassot in similar situations.", VAL: "Xicotets grups amb joves de Burjassot en situacions similars." },
    men2i3: { ES: "¡No estás solo/a! Muchas cosas que sientes son compartidas por otros.", EN: "You are not alone! Many things you feel are shared by others.", VAL: "No estàs sol/a! Moltes coses que sents les compartixen altres." },
    men3Title: { ES: "Talleres Prácticos y Actividades", EN: "Practical Workshops and Activities", VAL: "Tallers Pràctics i Activitats" },
    men3i1: { ES: "Técnicas de relajación y control de la ansiedad.", EN: "Relaxation and anxiety control techniques.", VAL: "Tècniques de relaxació i control de l'ansietat." },
    men3i2: { ES: "Gestión del tiempo y estrés frente a los exámenes.", EN: "Time management and exam stress.", VAL: "Gestió del temps i estrès davant dels exàmens." },
    men3i3: { ES: "Inteligencia emocional y cómo poner límites sanos.", EN: "Emotional intelligence and how to set healthy boundaries.", VAL: "Intel·ligència emocional i com posar límits sans." },
    men3i4: { ES: "Mejora de la autoestima en la era de las redes sociales.", EN: "Building self-esteem in the age of social media.", VAL: "Millora de l'autoestima en l'era de les xarxes socials." },

    // Emergencias
    emergenciasTitle: { ES: "📞 Líneas de Ayuda Urgente — Disponibles 24/7", EN: "📞 Emergency Helplines — Available 24/7", VAL: "📞 Línies d'Ajuda Urgent — Disponibles 24/7" },
    emergenciasDesc:  { ES: "Si estás pasando por una crisis grave o tienes pensamientos oscuros, pide ayuda inmediata:", EN: "If you are going through a serious crisis or having dark thoughts, ask for help immediately:", VAL: "Si estàs passant per una crisi greu o tens pensaments foscos, demana ajuda immediata:" },
    emergencia1: { ES: "Línea de atención a la conducta suicida — Gratuito y confidencial", EN: "Suicide behaviour helpline — Free and confidential", VAL: "Línia d'atenció a la conducta suïcida — Gratuït i confidencial" },
    emergencia2: { ES: "Teléfono de la Esperanza — Apoyo emocional en crisis", EN: "Telephone of Hope — Emotional support in crisis", VAL: "Telèfon de l'Esperança — Suport emocional en crisi" },
    emergencia3: { ES: "Emergencias", EN: "Emergencies", VAL: "Emergències" },

    // Cita
    citaTitle: { ES: "📅 ¿Cómo pedir tu cita en Jove Burjassot?", EN: "📅 How to book your appointment at Jove Burjassot?", VAL: "📅 Com demanar la teua cita a Jove Burjassot?" },
    citaDesc:  { ES: "Dar el primer paso es de valientes. Para solicitar tu primera cita solo tienes que contactarnos:", EN: "Taking the first step is brave. To request your first appointment just contact us:", VAL: "Fer el primer pas és de valents. Per a sol·licitar la teua primera cita només has de contactar-nos:" },
    citaPresencial: { ES: "Presencial:", EN: "In person:", VAL: "Presencial:" },
    citaPresencialDesc: { ES: "Pásate por la Casa de la Juventud de Burjassot.", EN: "Come to the Burjassot Youth House.", VAL: "Passa't per la Casa de la Joventut de Burjassot." },
    citaWA:    { ES: "WhatsApp/Teléfono:", EN: "WhatsApp/Phone:", VAL: "WhatsApp/Telèfon:" },
    citaWADesc: { ES: "Escríbenos o llámanos al [número].", EN: "Write or call us at [number].", VAL: "Escriu-nos o truca'ns al [número]." },
    citaEmail: { ES: "Correo:", EN: "Email:", VAL: "Correu:" },
    citaEmailDesc: { ES: "[email o enlace a formulario web].", EN: "[email or web form link].", VAL: "[email o enllaç a formulari web]." },
    citaNota:  { ES: "Tranquilo/a, todo lo que nos cuentes es confidencial.", EN: "Don't worry, everything you tell us is confidential.", VAL: "Tranquil/a, tot el que ens contes és confidencial." },
    contactoWA: { ES: "💬 Contactar por WhatsApp", EN: "💬 Contact via WhatsApp", VAL: "💬 Contactar per WhatsApp" },

    // Actividades saludables
    actTitle: {
      ES: "🏃🏽‍♀️ Salud Física y Movimiento: Tu cuerpo es tu motor",
      EN: "🏃🏽‍♀️ Physical Health and Movement: Your body is your engine",
      VAL: "🏃🏽‍♀️ Salut Física i Moviment: El teu cos és el teu motor",
    },
    actIntro: {
      ES: "Mover el cuerpo no se trata de conseguir un físico \"perfecto\" para las redes sociales, sino de cuidar la máquina que te permite disfrutar de la vida. La actividad física regular es el mejor antídoto natural contra el estrés del día a día.",
      EN: "Moving your body is not about achieving a \"perfect\" physique for social media, but about taking care of the machine that allows you to enjoy life. Regular physical activity is the best natural antidote to everyday stress.",
      VAL: "Moure el cos no es tracta d'aconseguir un físic \"perfecte\" per a les xarxes socials, sinó de cuidar la màquina que et permet gaudir de la vida. L'activitat física regular és el millor antídot natural contra l'estrès del dia a dia.",
    },
    act1Title: { ES: "Beneficios reales de estar activo", EN: "Real benefits of being active", VAL: "Beneficis reals d'estar actiu" },
    act1i1: { ES: "Libera endorfinas: el mejor antídoto natural contra el estrés y la ansiedad.", EN: "Releases endorphins: the best natural antidote to stress and anxiety.", VAL: "Allibera endorfines: el millor antídot natural contra l'estrès i l'ansietat." },
    act1i2: { ES: "Más energía y mejor descanso: el ejercicio te ayuda a dormir mejor por la noche.", EN: "More energy and better rest: exercise helps you sleep better at night.", VAL: "Més energia i millor descans: l'exercici t'ajuda a dormir millor per la nit." },
    act1i3: { ES: "Prevención: evita dolores de espalda, mejora tu postura y fortalece huesos y músculos.", EN: "Prevention: avoids back pain, improves your posture and strengthens bones and muscles.", VAL: "Prevenció: evita dolors d'esquena, millora la teua postura i enforteix ossos i músculs." },
    act2Title: { ES: "Encuentra tu propio ritmo", EN: "Find your own rhythm", VAL: "Troba el teu propi ritme" },
    act2i1: { ES: "Todo suma: caminar, ir en bici, patinar, bailar o echar un partido con los colegas.", EN: "Everything counts: walking, cycling, skating, dancing or playing a match with friends.", VAL: "Tot suma: caminar, anar en bici, patinar, ballar o fer un partit amb els col·legues." },
    act2i2: { ES: "Hazlo divertido: prueba distintos deportes hasta encontrar el que realmente disfrutes.", EN: "Make it fun: try different sports until you find one you really enjoy.", VAL: "Fes-ho divertit: prova distints esports fins a trobar el que realment gaudeixes." },
    act2i3: { ES: "No necesitas ser atleta: lo importante es romper con el sedentarismo a tu manera.", EN: "You don't need to be an athlete: the important thing is to break with sedentary habits your way.", VAL: "No necessites ser atleta: l'important és trencar amb el sedentarisme a la teua manera." },
    act3Title: { ES: "El combo ganador: Alimentación y Descanso", EN: "The winning combo: Diet and Rest", VAL: "El combo guanyador: Alimentació i Descans" },
    act3i1: { ES: "Nutrición consciente: come equilibrado, prioriza alimentos reales y mantente hidratado/a.", EN: "Mindful nutrition: eat balanced, prioritise real foods and stay hydrated.", VAL: "Nutrició conscient: menja equilibrat, prioritza aliments reals i mantén-te hidratat/a." },
    act3i2: { ES: "Descanso reparador: respeta tus 7-8 horas de sueño, tu cuerpo y cerebro lo necesitan.", EN: "Restorative rest: respect your 7-8 hours of sleep, your body and brain need it.", VAL: "Descans reparador: respecta les teues 7-8 hores de son, el teu cos i cervell ho necessiten." },
    act3i3: { ES: "Los tres pilares juntos (deporte, nutrición y descanso) te hacen sentir al 100%.", EN: "The three pillars together (sport, nutrition and rest) make you feel 100%.", VAL: "Els tres pilars junts (esport, nutrició i descans) et fan sentir al 100%." },

    // Polideportivo
    poliTitle: { ES: "📍 ¡Ponte en marcha en el Polideportivo de Burjassot!", EN: "📍 Get moving at the Burjassot Sports Centre!", VAL: "📍 Posa't en marxa al Poliesportiu de Burjassot!" },
    poliDesc:  { ES: "El Polideportivo Municipal de Burjassot es el espacio ideal para ti. Cuenta con pistas de tenis, pádel, pabellón cubierto, campos de fútbol y piscina.", EN: "The Burjassot Municipal Sports Centre is the ideal space for you. It has tennis courts, padel, an indoor hall, football pitches and a swimming pool.", VAL: "El Poliesportiu Municipal de Burjassot és l'espai ideal per a tu. Compta amb pistes de tennis, pàdel, pavelló cobert, camps de futbol i piscina." },
    polii1: { ES: "Alquila pistas para jugar con tus amigos o ve a nadar a tu ritmo.", EN: "Rent courts to play with your friends or go swimming at your own pace.", VAL: "Lloga pistes per a jugar amb els teus amics o vés a nadar al teu ritme." },
    polii2: { ES: "Apúntate a los cursos y actividades dirigidas durante todo el año.", EN: "Sign up for courses and guided activities throughout the year.", VAL: "Apunta't als cursos i activitats dirigides durant tot l'any." },
    polii3: { ES: "Una forma genial de cuidarte y conocer a otros jóvenes del pueblo.", EN: "A great way to take care of yourself and meet other young people in town.", VAL: "Una forma genial de cuidar-te i conéixer altres joves del poble." },
    polideportivo: { ES: "🏊 Ver Horarios y Pistas del Polideportivo", EN: "🏊 View Sports Centre Schedule", VAL: "🏊 Veure Horaris i Pistes del Poliesportiu" },
  },

  // ─── VIVIENDA ───────────────────────────────────────────────────────────────
  vivienda: {
    heroTitle:   { ES: "Tu Espacio Burjassot:\nGuía de Vivienda Joven", EN: "Your Burjassot Space:\nYouth Housing Guide", VAL: "El teu Espai Burjassot:\nGuia d'Habitatge Jove" },
    ayudasTitle: { ES: "Ayudas y Subvenciones Clave", EN: "Key Grants and Subsidies", VAL: "Ajudes i Subvencions Clau" },
    card1Title:  { ES: "Bono Alquiler Joven Estatal",    EN: "National Youth Rental Bonus",         VAL: "Bo Lloguer Jove Estatal" },
    card1Desc:   { ES: "Hasta 250€/mes para tu alquier. Ayuda directa del gobierno.", EN: "Up to €250/month for your rent. Direct government aid.", VAL: "Fins a 250€/mes per al teu lloguer. Ajuda directa del govern." },
    card1Btn:    { ES: "Requisitos y Solicitud",          EN: "Requirements & Application",          VAL: "Requisits i Sol·licitud" },
    card2Title:  { ES: "Ayudas Municipales Burjassot",    EN: "Burjassot Municipal Aid",             VAL: "Ajudes Municipals Burjassot" },
    card2Desc:   { ES: "Apoyo específico del Ayuntamiento empadronados.", EN: "Specific support from the Town Hall for registered residents.", VAL: "Suport específic de l'Ajuntament per a empadronats." },
    card2Btn:    { ES: "Consultar en el Ayuntamiento",   EN: "Contact Town Hall",                   VAL: "Consultar a l'Ajuntament" },
    card3Title:  { ES: "Guía de Emancipación",            EN: "Emancipation Guide",                  VAL: "Guia d'Emancipació" },
    card3Desc:   { ES: "Aprende sobre contrato, fianzas y tus derechos.", EN: "Learn about contracts, deposits and your rights.", VAL: "Aprén sobre contracte, fiances i els teus drets." },
    card3Btn:    { ES: "Descargar Guía PDF",              EN: "Download PDF Guide",                  VAL: "Descarregar Guia PDF" },
  },

  // ─── CARNET JOVEN ───────────────────────────────────────────────────────────
  carne: {
    titulo:    { ES: "CARNET JOVEN",    EN: "YOUTH CARD",     VAL: "CARNET JOVE" },
    solicitar: { ES: "SOLICITAR CARNET", EN: "APPLY FOR CARD", VAL: "SOL·LICITAR CARNET" },
    smallText: {
      ES: "ACCEDE A CIENTOS DE DESCUENTOS EN TIENDAS, TRANSPORTE, CINES Y MUCHO MÁS. TU CARNET ES VÁLIDO EN BURJASSOT, EN LA COMUNITAT Y POR TODA EUROPA. SI TIENES ENTRE 14 Y 30 AÑOS, ¡ES PARA TI!",
      EN: "ACCESS HUNDREDS OF DISCOUNTS IN SHOPS, TRANSPORT, CINEMAS AND MUCH MORE. YOUR CARD IS VALID IN BURJASSOT, IN THE REGION AND ACROSS EUROPE. IF YOU ARE BETWEEN 14 AND 30 YEARS OLD, IT'S FOR YOU!",
      VAL: "ACCEDEIX A CENTENARS DE DESCOMPTES EN BOTIGUES, TRANSPORT, CINEMES I MOLT MÉS. EL TEU CARNET ÉS VÀLID A BURJASSOT, A LA COMUNITAT I PER TOTA EUROPA. SI TENS ENTRE 14 I 30 ANYS, ÉS PER A TU!",
    },
    ventajas:  { ES: "VENTAJAS",   EN: "BENEFITS",  VAL: "AVANTATGES" },
    subtitle:  { ES: "Más planes, menos gasto. Accede a ventajas exclusivas para ti.", EN: "More plans, less spending. Access exclusive benefits for you.", VAL: "Més plans, menys despesa. Accedeix a avantatges exclusius per a tu." },
    v1Title:   { ES: "Cines",       EN: "Cinemas",   VAL: "Cinemes" },
    v1Desc:    { ES: "Obtén entre un 15% y 25% en tus funciones favoritas.", EN: "Get 15% to 25% off your favourite screenings.", VAL: "Obté entre un 15% i 25% en les teues funcions favorites." },
    v2Title:   { ES: "Restaurantes", EN: "Restaurants", VAL: "Restaurants" },
    v2Desc:    { ES: "Descuentos y menús especiales en locales.", EN: "Discounts and special menus at local venues.", VAL: "Descomptes i menús especials en locals." },
    v3Title:   { ES: "Deportes",    EN: "Sports",    VAL: "Esports" },
    v3Desc:    { ES: "Cuotas reducidas en gimnasios y pistas.", EN: "Reduced fees at gyms and courts.", VAL: "Quotes reduïdes en gimnasos i pistes." },
    v4Title:   { ES: "Transporte Mobilis 30", EN: "Mobilis 30 Transport", VAL: "Transport Mobilis 30" },
    v4Desc:    { ES: "Bono mensual a 14,90 € en la mobilis30.", EN: "Monthly pass at €14.90 on mobilis30.", VAL: "Bo mensual a 14,90 € en la mobilis30." },
    v5Title:   { ES: "Tecnología",  EN: "Technology", VAL: "Tecnologia" },
    v5Desc:    { ES: "Ofertas en reparaciones y tiendas locales.", EN: "Deals on repairs and local shops.", VAL: "Ofertes en reparacions i botigues locals." },
    v6Title:   { ES: "Museos",      EN: "Museums",   VAL: "Museus" },
    v6Desc:    { ES: "Hasta un 50% de descuento en la entrada.", EN: "Up to 50% off admission.", VAL: "Fins a un 50% de descompte en l'entrada." },
  },

  // ─── EMPLEO Y FORMACIÓN ─────────────────────────────────────────────────────
  empleo: {
    heroTitle: { ES: "Tu futuro Laboral en Burjassot:\nEmpleo y Becas Joven", EN: "Your Professional Future in Burjassot:\nJobs and Youth Grants", VAL: "El teu futur Laboral a Burjassot:\nOcupació i Beques Jove" },
    intro1:    { ES: "Creemos en tu talento y queremos impulsarte hacia el futuro que mereces.", EN: "We believe in your talent and want to drive you towards the future you deserve.", VAL: "Creiem en el teu talent i volem impulsar-te cap al futur que mereixes." },
    intro2:    { ES: "¿Qué lo económico no te frene? La Beca MEC es el impulso clave que necesitas para tu crecimiento profesional.", EN: "Don't let finances hold you back. The MEC Grant is the key boost you need for your professional growth.", VAL: "Que l'econòmic no et frene? La Beca MEC és l'impuls clau que necessites per al teu creixement professional." },
    footer:    { ES: "¿Te cuesta encontrar empleo? No estás solo en la búsqueda. Gracias a LABORA, multiplica tus probabilidades de acceder al mercado laboral.", EN: "Struggling to find work? You are not alone. Thanks to LABORA, multiply your chances of accessing the labour market.", VAL: "Et costa trobar ocupació? No estàs sol en la cerca. Gràcies a LABORA, multiplica les teues probabilitats d'accedir al mercat laboral." },
    btn1:      { ES: "Accede a Labora",       EN: "Access Labora",        VAL: "Accedeix a Labora" },
    btn2:      { ES: "Más Información",       EN: "More Information",     VAL: "Més Informació" },
    btn3:      { ES: "Ver Recursos Locales",  EN: "View Local Resources", VAL: "Veure Recursos Locals" },
  },

  // ─── CULTURA ────────────────────────────────────────────────────────────────
  cultura: {
    titulo:    { ES: "Cultura y Ocio",                          EN: "Culture and Leisure",                      VAL: "Cultura i Oci" },
    subtitulo: { ES: "El ocio y la cultura joven en Burjassot", EN: "Youth leisure and culture in Burjassot",   VAL: "L'oci i la cultura jove a Burjassot" },
    col1:      { ES: "Música y conciertos",   EN: "Music and concerts",   VAL: "Música i concerts" },
    col2:      { ES: "Teatro y cine",          EN: "Theatre and cinema",   VAL: "Teatre i cinema" },
    col3:      { ES: "Talleres creativos",     EN: "Creative workshops",   VAL: "Tallers creatius" },
    col4:      { ES: "Fiestas locales",        EN: "Local festivals",      VAL: "Festes locals" },
  },
};

export default translations;