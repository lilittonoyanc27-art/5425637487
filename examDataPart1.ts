import { ExamQuestion } from './examTypes';

export const TEST_1_QUESTIONS: ExamQuestion[] = [
  // Parte 1 — Preguntas 1–10
  {
    id: 1,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: 'Completa: «Yo ___ de Marruecos.»',
    promptHy: 'Լրացրո՛ւ․ «Ես Մարոկկոյից եմ»։',
    options: [
      {
        key: 'A',
        es: 'estoy',
        hy: 'ես գտնվում եմ',
        wrongReasonHy:
          '«Estoy»-ը «estar» բայն է, որն արտահայտում է գտնվելու վայր կամ ժամանակավոր վիճակ (որտե՞ղ եմ հիմա), ոչ թե ծագում կամ քաղաքացիություն։',
      },
      {
        key: 'B',
        es: 'es',
        hy: 'նա է',
        wrongReasonHy:
          '«Es»-ը «ser» բայի 3-րդ դեմք եզակի թիվն է (él/ella/usted — նա է), մինչդեռ ենթական «Yo»-ն է (ես)։',
      },
      {
        key: 'C',
        es: 'soy',
        hy: 'ես եմ',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'tengo',
        hy: 'ես ունեմ',
        wrongReasonHy:
          '«Tengo»-ն նշանակում է «ես ունեմ» («tener» բայ), որը չի կիրառվում ծագումը կամ ազգությունը «de + երկիր» կառույցով նշելու համար։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Yo soy de Marruecos.',
    exampleHy: 'Ես Մարոկկոյից եմ։',
    whyCorrectHy:
      'Իսպաներենում ծագումն ու ազգությունը («…-ից լինել») միշտ արտահայտվում են «ser + de» կառույցով։ «Yo» (ես) դեմքի համար «ser» բայի ներկա ժամանակաձևը «soy» է։',
    grammarNoteHy: 'Քերականական կանոն՝ Ser (yo soy) + de + երկիր = ծագում։',
  },
  {
    id: 2,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: 'Completa: «Mañana yo ___ a trabajar a las ocho.»',
    promptHy: 'Լրացրո՛ւ․ «Վաղը ես ժամը ութին գնում եմ աշխատանքի»։',
    options: [
      {
        key: 'A',
        es: 'va',
        hy: 'նա գնում է',
        wrongReasonHy:
          '«Va»-ն 3-րդ դեմք եզակի թիվն է (նա գնում է), սակայն նախադասության ենթական «yo»-ն է (ես)։',
      },
      {
        key: 'B',
        es: 'voy',
        hy: 'ես գնում եմ',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'vas',
        hy: 'դու գնում ես',
        wrongReasonHy:
          '«Vas»-ը 2-րդ դեմք եզակի թիվն է (tú — դու գնում ես), որը չի համապատասխանում «yo» դերանվանը։',
      },
      {
        key: 'D',
        es: 'van',
        hy: 'նրանք գնում են',
        wrongReasonHy:
          '«Van»-ը 3-րդ դեմք հոգնակի թիվն է (ellos/ellas/ustedes — նրանք գնում են), այլ ոչ թե «yo»։',
      },
    ],
    correctKey: 'B',
    exampleEs: 'Mañana yo voy a trabajar a las ocho.',
    exampleHy: 'Վաղը ես ժամը ութին գնում եմ աշխատանքի։',
    whyCorrectHy:
      '«Ir» (գնալ) անկանոն բայի ներկա ժամանակի 1-ին դեմք եզակին («yo») «voy» է։ «Ir a + ինֆինիտիվ» կառույցը նաև օգտագործվում է մոտ ապագա պլանների համար։',
    grammarNoteHy: 'Ir բայի խոնարհումը՝ yo voy, tú vas, él/ella va, ellos van։',
  },
  {
    id: 3,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: '¿Con qué cobra el cajero a los clientes en el supermercado?',
    promptHy: 'Ինչո՞վ է գանձապահը սուպերմարկետում հաճախորդներից գումար գանձում։',
    options: [
      {
        key: 'A',
        es: 'Con la escoba',
        hy: 'Ավելով',
        wrongReasonHy:
          '«La escoba» նշանակում է «ավել», որն օգտագործվում է մաքրության համար, ոչ թե գումար գանձելու։',
      },
      {
        key: 'B',
        es: 'Con el horno',
        hy: 'Վառարանով',
        wrongReasonHy:
          '«El horno» նշանակում է «վառարան», որը կիրառվում է խոհանոցում կամ հացաբուլկեղենի բաժնում թխելու համար։',
      },
      {
        key: 'C',
        es: 'Con la carretilla',
        hy: 'Սայլակով',
        wrongReasonHy:
          '«La carretilla» նշանակում է «սայլակ» (բեռ տեղափոխելու համար), ոչ թե դրամական հաշվարկի սարք։',
      },
      {
        key: 'D',
        es: 'Con la caja registradora',
        hy: 'Դրամարկղային մեքենայով',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    whyCorrectHy:
      '«La caja registradora» նշանակում է «դրամարկղային մեքենա» (ՀԴՄ / դրամարկղ), որով գանձապահը («el cajero») սուպերմարկետում գանձում է վճարումը հաճախորդներից։',
  },
  {
    id: 4,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: '¿Qué día va después del lunes?',
    promptHy: 'Ո՞ր օրն է գալիս երկուշաբթիից հետո։',
    options: [
      {
        key: 'A',
        es: 'El martes',
        hy: 'Երեքշաբթի',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'El miércoles',
        hy: 'Չորեքշաբթի',
        wrongReasonHy:
          '«El miércoles»-ը չորեքշաբթին է, որը գալիս է երեքշաբթիից հետո (շաբաթվա 3-րդ օրը)։',
      },
      {
        key: 'C',
        es: 'El domingo',
        hy: 'Կիրակի',
        wrongReasonHy:
          '«El domingo»-ն կիրակին է՝ շաբաթվա վերջին օրը, որը նախորդում է երկուշաբթիին, ոչ թե հաջորդում։',
      },
      {
        key: 'D',
        es: 'El jueves',
        hy: 'Հինգշաբթի',
        wrongReasonHy:
          '«El jueves»-ը հինգշաբթին է՝ շաբաթվա 4-րդ օրը, ոչ թե երկուշաբթիին անմիջապես հաջորդող օրը։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«Lunes» նշանակում է երկուշաբթի, իսկ «después del lunes»՝ երկուշաբթիից հետո։ Հաջորդ օրը «el martes»-ն է (երեքշաբթի)։',
  },
  {
    id: 5,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs:
      'Lee el cartel: «Horario: de lunes a viernes, de 9:00 a 14:00. Sábados cerrado.» ¿Está abierto el sábado?',
    promptHy:
      'Կարդա՛ հայտարարությունը․ «Աշխատանքային ժամեր՝ երկուշաբթիից ուրբաթ, 9:00–14:00։ Շաբաթ օրերին փակ է»։ Շաբաթ օրը բա՞ց է։',
    options: [
      {
        key: 'A',
        es: 'Sí, de 9:00 a 14:00',
        hy: 'Այո, 9:00–14:00',
        wrongReasonHy:
          '9:00–14:00 աշխատանքային ժամերը վերաբերում են միայն երկուշաբթիից ուրբաթ («de lunes a viernes»), ոչ թե շաբաթ օրվան։',
      },
      {
        key: 'B',
        es: 'Sí, por la tarde',
        hy: 'Այո, կեսօրից հետո',
        wrongReasonHy:
          'Հայտարարության մեջ նշված է «Sábados cerrado» (շաբաթ օրերին փակ է), և կեսօրից հետո աշխատելու մասին խոսք չկա։',
      },
      {
        key: 'C',
        es: 'No',
        hy: 'Ոչ',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'Solo el sábado',
        hy: 'Միայն շաբաթ օրը',
        wrongReasonHy:
          'Ճիշտ հակառակն է․ աշխատում է երկուշաբթիից ուրբաթ, իսկ շաբաթ օրերին փակ է։',
      },
    ],
    correctKey: 'C',
    whyCorrectHy:
      'Հայտարարության վերջում հստակ գրված է «Sábados cerrado» («Շաբաթ օրերին փակ է»), հետևաբար «¿Está abierto el sábado?» (Շաբաթ օրը բա՞ց է) հարցի ճիշտ պատասխանն է «No» (Ոչ)։',
  },
  {
    id: 6,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: 'En la pared pone «Prohibido fumar». ¿Qué significa?',
    promptHy: 'Պատին գրված է «Ծխելն արգելվում է»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Que aquí se puede fumar',
        hy: 'Այստեղ կարելի է ծխել',
        wrongReasonHy:
          '«Prohibido» նշանակում է «արգելված է», ուստի «se puede fumar» (կարելի է ծխել) արտահայտությունը հակասում է նշանին։',
      },
      {
        key: 'B',
        es: 'Que aquí no se puede fumar',
        hy: 'Այստեղ չի կարելի ծխել',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Que aquí se venden cigarrillos',
        hy: 'Այստեղ ծխախոտ են վաճառում',
        wrongReasonHy:
          '«Vender cigarrillos» նշանակում է «ծխախոտ վաճառել», ինչը կապ չունի արգելող ցուցանակի հետ։',
      },
      {
        key: 'D',
        es: 'Que es una zona para fumadores',
        hy: 'Սա ծխողների համար նախատեսված տարածք է',
        wrongReasonHy:
          '«Zona para fumadores» նշանակում է ծխողների գոտի, մինչդեռ «Prohibido fumar» արգելում է ծխելը։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Prohibido» նշանակում է «արգելվում է», իսկ «fumar»՝ «ծխել»։ Այսինքն՝ «aquí no se puede fumar» (այստեղ չի կարելի ծխել)։',
  },
  {
    id: 7,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: 'Llegas al trabajo a las 8 de la mañana. ¿Cómo saludas?',
    promptHy: 'Առավոտյան ժամը 8-ին գալիս ես աշխատանքի։ Ինչպե՞ս ես բարևում։',
    options: [
      {
        key: 'A',
        es: 'Buenos días',
        hy: 'Բարի լույս',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Buenas noches',
        hy: 'Բարի երեկո / բարի գիշեր',
        wrongReasonHy:
          '«Buenas noches» ասում են երեկոյան կամ գիշերը, ոչ թե առավոտյան ժամը 8-ին։',
      },
      {
        key: 'C',
        es: 'Adiós',
        hy: 'Ցտեսություն',
        wrongReasonHy:
          '«Adiós»-ը հրաժեշտի խոսք է (ցտեսություն), ոչ թե ողջույնի։',
      },
      {
        key: 'D',
        es: 'Hasta mañana',
        hy: 'Մինչև վաղը',
        wrongReasonHy:
          '«Hasta mañana» նշանակում է «մինչև վաղը» և օգտագործվում է աշխատանքից կամ հանդիպումից հեռանալիս։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'Առավոտյան («por la mañana», ժամը 8-ին) իսպաներենում ողջունում են «Buenos días» արտահայտությամբ։',
  },
  {
    id: 8,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: 'El encargado te dice: «Lleva estas cajas al almacén, por favor.» ¿Qué haces?',
    promptHy: 'Պատասխանատուն ասում է․ «Խնդրում եմ, այս արկղերը տար պահեստ»։ Ի՞նչ ես անում։',
    options: [
      {
        key: 'A',
        es: 'Abro las cajas aquí',
        hy: 'Այստեղ բացում եմ արկղերը',
        wrongReasonHy:
          '«Abrir» նշանակում է «բացել», բայց պատասխանատուն խնդրել է տանել («llevar»), ոչ թե բացել։',
      },
      {
        key: 'B',
        es: 'Tiro las cajas a la basura',
        hy: 'Արկղերը նետում եմ աղբը',
        wrongReasonHy:
          '«Tirar a la basura» նշանակում է «աղբը նետել», ինչը ճիշտ չէ։',
      },
      {
        key: 'C',
        es: 'Cuento las cajas en la oficina',
        hy: 'Գրասենյակում հաշվում եմ արկղերը',
        wrongReasonHy:
          '«Contar en la oficina» նշանակում է «գրասենյակում հաշվել», մինչդեռ հրահանգը պահեստ տանելն էր։',
      },
      {
        key: 'D',
        es: 'Llevo las cajas al almacén',
        hy: 'Արկղերը տանում եմ պահեստ',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    whyCorrectHy:
      '«Llevar» նշանակում է «տանել», «estas cajas»՝ «այս արկղերը», իսկ «al almacén»՝ «պահեստ»։ Այսպիսով՝ ճիշտ գործողությունը արկղերը պահեստ տանելն է։',
  },
  {
    id: 9,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1–A2',
    promptEs: 'Completa: «Ayer ___ ocho horas en el restaurante.»',
    promptHy: 'Լրացրո՛ւ․ «Երեկ ռեստորանում ութ ժամ աշխատեցի»։',
    options: [
      {
        key: 'A',
        es: 'trabajo',
        hy: 'աշխատում եմ',
        wrongReasonHy:
          '«Trabajo»-ն ներկա ժամանակ է (Presente), բայց «ayer» (երեկ) բառը պահանջում է անցյալ կատարյալ ժամանակ։',
      },
      {
        key: 'B',
        es: 'trabajé',
        hy: 'աշխատեցի',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'trabajaré',
        hy: 'կաշխատեմ',
        wrongReasonHy:
          '«Trabajaré»-ն ապառնի ժամանակ է (կաշխատեմ), որը չի համապատասխանում «ayer» (երեկ) ժամանակային մակբային։',
      },
      {
        key: 'D',
        es: 'trabajando',
        hy: 'աշխատելով',
        wrongReasonHy:
          '«Trabajando»-ն դերբայ է (Gerundio) և առանց օժանդակ բայի չի կարող հանդես գալ որպես ստորոգյալ։',
      },
    ],
    correctKey: 'B',
    exampleEs: 'Ayer trabajé ocho horas en el restaurante.',
    exampleHy: 'Երեկ ռեստորանում ութ ժամ աշխատեցի։',
    whyCorrectHy:
      '«Ayer» (երեկ) բառը ցույց է տալիս ավարտված անցյալ գործողություն, ուստի օգտագործվում է Pretérito Indefinido (անցյալ կատարյալ)՝ «trabajé» (աշխատեցի)։',
    grammarNoteHy: 'Անցյալի ցուցիչներ (ayer, anoche, la semana pasada) → Pretérito Indefinido։',
  },
  {
    id: 10,
    part: 1,
    partTitleEs: 'Parte 1 — Preguntas 1–10',
    partTitleHy: 'Մաս 1 — Հարցեր 1–10',
    levelLabel: 'A1',
    promptEs: 'En la mesa, a un compañero: «¿Me ___ la sal, por favor?»',
    promptHy: 'Սեղանի շուրջ գործընկերոջդ ասում ես․ «Խնդրում եմ, աղը կփոխանցե՞ս ինձ»։',
    options: [
      {
        key: 'A',
        es: 'pasar',
        hy: 'փոխանցել',
        wrongReasonHy:
          '«Pasar»-ը բայի անորոշ ձևն է (ինֆինիտիվ) և հարցական խնդրանքի մեջ առանց խոնարհվելու չի դրվում «me»-ից հետո։',
      },
      {
        key: 'B',
        es: 'paso',
        hy: 'ես փոխանցում եմ',
        wrongReasonHy:
          '«Paso»-ն 1-ին դեմքն է (ես փոխանցում եմ), բայց դու դիմում ես գործընկերոջդ՝ «tú» դեմքով։',
      },
      {
        key: 'C',
        es: 'pasas',
        hy: 'դու փոխանցում ես',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'pasado',
        hy: 'անցած / փոխանցված',
        wrongReasonHy:
          '«Pasado»-ն անցյալ դերբայ է (Participio) և այս կառույցում առանց «haber» բայի չի օգտագործվում։',
      },
    ],
    correctKey: 'C',
    exampleEs: '¿Me pasas la sal, por favor?',
    exampleHy: 'Խնդրում եմ, աղը կփոխանցե՞ս ինձ։',
    whyCorrectHy:
      'Գործընկերոջը քաղաքավարի խնդրանքով դիմելիս («tú»՝ դու) օգտագործվում է ներկա ժամանակի 2-րդ դեմք եզակի թիվը՝ «pasas» («¿Me pasas...?» — կփոխանցե՞ս ինձ)։',
  },

  // Parte 2 — Preguntas 11–20
  {
    id: 11,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2–B1',
    promptEs: 'En la nómina, ¿qué es el «salario bruto»?',
    promptHy: 'Աշխատավարձի հաշվարկային թերթիկում ի՞նչ է նշանակում «համախառն աշխատավարձ»։',
    options: [
      {
        key: 'A',
        es: 'El dinero que te llega al banco',
        hy: 'Այն գումարը, որը ստանում ես բանկային հաշվիդ',
        wrongReasonHy:
          'Բանկային հաշվին փոխանցվող գումարը «salario neto»-ն է (զուտ աշխատավարձ՝ հարկերից հետո), ոչ թե «salario bruto»-ն։',
      },
      {
        key: 'B',
        es: 'El dinero de las propinas',
        hy: 'Թեյավճարներից ստացված գումարը',
        wrongReasonHy:
          '«Las propinas» նշանակում է թեյավճարներ, որոնք չեն կազմում պաշտոնական համախառն աշխատավարձը։',
      },
      {
        key: 'C',
        es: 'Una paga extra de Navidad',
        hy: 'Սուրբ Ծննդյան հավելյալ վճարը',
        wrongReasonHy:
          'Սուրբ Ծննդյան հավելյալ վճարը («paga extra») առանձին պարգևավճար է, ոչ թե «salario bruto» հասկացության սահմանումը։',
      },
      {
        key: 'D',
        es: 'El sueldo antes de quitar impuestos y cotizaciones',
        hy: 'Աշխատավարձը՝ մինչև հարկերի և սոցիալական վճարների պահումները',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    whyCorrectHy:
      '«Salario bruto» (համախառն աշխատավարձ) նշանակում է ամբողջական գումարը՝ նախքան հարկերը («impuestos») և սոցիալական ապահովագրության պահումները («cotizaciones») հանելը։',
  },
  {
    id: 12,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2',
    promptEs: 'Un compañero dice: «Esta semana estoy de baja.» ¿Qué significa?',
    promptHy:
      'Գործընկերդ ասում է․ «Այս շաբաթ հիվանդության պատճառով աշխատանքի չեմ գնում»։ Ի՞նչ է նշանակում այս արտահայտությունը։',
    options: [
      {
        key: 'A',
        es: 'Que trabaja en la planta baja',
        hy: 'Նա աշխատում է առաջին հարկում',
        wrongReasonHy:
          '«Planta baja» նշանակում է առաջին հարկ, սակայն «estar de baja» աշխատանքային տերմին է և նշանակում է բժշկական արձակուրդում (բյուլետենի մեջ) գտնվել։',
      },
      {
        key: 'B',
        es: 'Que le han despedido',
        hy: 'Նրան աշխատանքից ազատել են',
        wrongReasonHy:
          '«Despedir» նշանակում է աշխատանքից ազատել, ինչը տարբեր է ժամանակավոր անաշխատունակությունից։',
      },
      {
        key: 'C',
        es: 'Que no va a trabajar porque tiene una baja médica',
        hy: 'Նա աշխատանքի չի գնում, քանի որ բժշկական արձակուրդում է',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'Que está de vacaciones',
        hy: 'Նա արձակուրդում է',
        wrongReasonHy:
          'Սովորական հանգստյան արձակուրդը կոչվում է «estar de vacaciones», մինչդեռ «estar de baja»-ն վերաբերում է առողջական պատճառով բացակայությանը։',
      },
    ],
    correctKey: 'C',
    whyCorrectHy:
      'Իսպաներենում «estar de baja» կամ «baja médica» նշանակում է հիվանդության կամ վնասվածքի պատճառով պաշտոնական բժշկական արձակուրդում լինել և աշխատանքի չգնալ։',
  },
  {
    id: 13,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2',
    promptEs:
      'Lee el mensaje: «Hola, Ahmed. Mañana no vengas a las 7. El camión llega tarde, así que empezamos a las 9. Un saludo, Marta.» ¿A qué hora empieza Ahmed mañana?',
    promptHy:
      'Կարդա՛ հաղորդագրությունը․ «Բարև, Ահմեդ։ Վաղը ժամը 7-ին մի՛ եկ։ Բեռնատարը ուշ է գալիս, ուստի սկսում ենք ժամը 9-ին։ Ողջույններով՝ Մարտա»։ Վաղը ժամը քանիսի՞ն է Ահմեդը սկսում աշխատել։',
    options: [
      {
        key: 'A',
        es: 'A las 9',
        hy: 'Ժամը 9-ին',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'A las 7',
        hy: 'Ժամը 7-ին',
        wrongReasonHy:
          'Հաղորդագրության մեջ ուղիղ գրված է «Mañana no vengas a las 7» (Վաղը ժամը 7-ին մի՛ եկ)։',
      },
      {
        key: 'C',
        es: 'A las 8',
        hy: 'Ժամը 8-ին',
        wrongReasonHy:
          'Ժամը 8-ի մասին տեքստում ոչ մի խոսք չկա։',
      },
      {
        key: 'D',
        es: 'No trabaja mañana',
        hy: 'Վաղը նա չի աշխատում',
        wrongReasonHy:
          'Ահմեդը վաղն աշխատում է, պարզապես սկսում է ավելի ուշ՝ ժամը 9-ին։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'Մարտան հստակ գրում է․ «empezamos a las 9» («սկսում ենք ժամը 9-ին»), քանի որ բեռնատարը ուշ է գալիս։',
  },
  {
    id: 14,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2–B1',
    promptEs:
      'Lee el anuncio: «Se busca camarero/a. Jornada completa. Imprescindible formación en manipulación de alimentos.» ¿Qué es obligatorio?',
    promptHy:
      'Կարդա՛ հայտարարությունը․ «Պահանջվում է մատուցող։ Ամբողջ դրույքով աշխատանք։ Սննդամթերքի հետ աշխատելու վերաբերյալ ուսուցումը պարտադիր է»։ Ի՞նչն է պարտադիր։',
    options: [
      {
        key: 'A',
        es: 'Trabajar media jornada',
        hy: 'Կես դրույքով աշխատելը',
        wrongReasonHy:
          'Հայտարարության մեջ նշված է «Jornada completa» (ամբողջ դրույք), ոչ թե «media jornada» (կես դրույք)։',
      },
      {
        key: 'B',
        es: 'Tener formación en manipulación de alimentos',
        hy: 'Սննդամթերքի հետ աշխատելու վերաբերյալ ուսուցում անցած լինելը',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Hablar inglés',
        hy: 'Անգլերեն խոսելը',
        wrongReasonHy:
          'Անգլերենի իմացության մասին հայտարարության մեջ ոչինչ նշված չէ։',
      },
      {
        key: 'D',
        es: 'Tener coche',
        hy: 'Ավտոմեքենա ունենալը',
        wrongReasonHy:
          'Ավտոմեքենա ունենալու պահանջ տեքստում չկա։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Imprescindible» նշանակում է «անհրաժեշտ / պարտադիր»։ Ուստի «Imprescindible formación en manipulación de alimentos» նշանակում է, որ սննդամթերքի հետ աշխատելու ուսուցումը պարտադիր պահանջ է։',
  },
  {
    id: 15,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2',
    promptEs: 'Estás enfermo y llamas a la empresa. ¿Qué dices?',
    promptHy: 'Դու հիվանդ ես և զանգահարում ես ընկերություն։ Ի՞նչ ես ասում։',
    options: [
      {
        key: 'A',
        es: 'Hola. Hoy no trabajo. Adiós.',
        hy: 'Բարև։ Այսօր չեմ աշխատում։ Ցտեսություն։',
        wrongReasonHy:
          'Սա չափազանց կտրուկ և ոչ պրոֆեսիոնալ է․ չի նշվում ո՛չ անունը, ո՛չ բացակայության պատճառը։',
      },
      {
        key: 'B',
        es: 'Mañana estoy enfermo, ¿vale?',
        hy: 'Վաղը հիվանդ եմ, լա՞վ։',
        wrongReasonHy:
          'Հնարավոր չէ նախապես պլանավորել վաղը հիվանդ լինելը, և ձևակերպումը անբնական ու անհարգալից է։',
      },
      {
        key: 'C',
        es: 'Yo enfermo, no ir.',
        hy: 'Ես հիվանդ, չգնալ։',
        wrongReasonHy:
          'Սա քերականորեն սխալ նախադասություն է (բայերը չեն խոնարհված՝ բացակայում են «estoy» և «puedo»)։',
      },
      {
        key: 'D',
        es: 'Hola, soy Iván. Hoy no puedo ir a trabajar porque estoy enfermo. Voy al médico.',
        hy: 'Բարև, ես Իվանն եմ։ Այսօր չեմ կարող աշխատանքի գնալ, որովհետև հիվանդ եմ։ Գնում եմ բժշկի։',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    whyCorrectHy:
      'Քաղաքավարի և պրոֆեսիոնալ հեռախոսազանգի ժամանակ պետք է ներկայանալ («soy Iván»), հստակ հայտնել, որ չես կարող գալ («no puedo ir a trabajar»), և բացատրել պատճառը («porque estoy enfermo»)։',
  },
  {
    id: 16,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2',
    promptEs: 'Un cliente pregunta: «¿Dónde están los servicios?» ¿Qué respondes?',
    promptHy: 'Հաճախորդը հարցնում է․ «Որտե՞ղ է զուգարանը»։ Ի՞նչ ես պատասխանում։',
    options: [
      {
        key: 'A',
        es: 'Son las tres y media.',
        hy: 'Ժամը երեքն անց կես է։',
        wrongReasonHy:
          'Սա պատասխանում է ժամի մասին հարցին («¿Qué hora es?»), ոչ թե տեղի մասին («¿Dónde...?»)։',
      },
      {
        key: 'B',
        es: 'Al fondo, a la derecha.',
        hy: 'Վերջում՝ աջ կողմում։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Cuestan dos euros.',
        hy: 'Արժեն երկու եվրո։',
        wrongReasonHy:
          'Սա պատասխանում է գնի մասին հարցին («¿Cuánto cuesta?»), ոչ թե գտնվելու վայրի մասին։',
      },
      {
        key: 'D',
        es: 'Sí, por favor.',
        hy: 'Այո, խնդրեմ։',
        wrongReasonHy:
          '«¿Dónde...?» (որտե՞ղ) հարցին «Այո» կամ «Ոչ» պատասխանել հնարավոր չէ։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Los servicios» (կամ «los baños») նշանակում է զուգարան։ «¿Dónde están?» (որտե՞ղ են) հարցին տեղ ցույց տալու ճիշտ պատասխանն է՝ «Al fondo, a la derecha» (Վերջում՝ աջ կողմում)։',
  },
  {
    id: 17,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'B1',
    promptEs: 'Completa: «Cuando ___ el turno, te llamo.»',
    promptHy: 'Լրացրո՛ւ․ «Երբ հերթափոխս ավարտեմ, քեզ կզանգեմ»։',
    options: [
      {
        key: 'A',
        es: 'termine',
        hy: 'ավարտեմ',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'termino',
        hy: 'ավարտում եմ',
        wrongReasonHy:
          '«Termino»-ն սահմանական եղանակ է (Indicativo) և օգտագործվում է սովորական, կրկնվող գործողությունների համար, ոչ թե ապագա մեկանգամյա իրադարձության («cuando» + ապագա իմաստ)։',
      },
      {
        key: 'C',
        es: 'terminaré',
        hy: 'կավարտեմ',
        wrongReasonHy:
          'Իսպաներենում ժամանակի երկրորդական նախադասություններում «cuando» շաղկապից հետո ԵՐԲԵՔ ապառնի ժամանակ (Futuro Simple) չի դրվում։',
      },
      {
        key: 'D',
        es: 'terminar',
        hy: 'ավարտել',
        wrongReasonHy:
          '«Terminar»-ը բայի անորոշ ձևն է (ինֆինիտիվ) և «cuando»-ից հետո անձնական ձևով չի համապատասխանում։',
      },
    ],
    correctKey: 'A',
    exampleEs: 'Cuando termine el turno, te llamo.',
    exampleHy: 'Երբ հերթափոխս ավարտեմ, քեզ կզանգեմ։',
    whyCorrectHy:
      'Երբ «cuando» շաղկապը վերաբերում է ապագա գործողության (հերթափոխը դեռ չի ավարտվել, ապագայում կավարտվի), իսպաներենում պարտադիր օգտագործվում է Presente de Subjuntivo՝ «termine»։',
    grammarNoteHy: 'Cuando + Presente de Subjuntivo = ապագա ժամանակային իմաստ։',
  },
  {
    id: 18,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2–B1',
    promptEs: 'Completa: «Si tengo tiempo, ___ el informe hoy.»',
    promptHy: 'Լրացրո՛ւ․ «Եթե ժամանակ ունենամ, այսօր կավարտեմ հաշվետվությունը»։',
    options: [
      {
        key: 'A',
        es: 'terminaría',
        hy: 'կավարտեի',
        wrongReasonHy:
          '«Terminaría»-ն պայմանական եղանակ է (Condicional) և զուգակցվում է Imperfecto de Subjuntivo-ի հետ («si tuviera»), ոչ թե «si tengo» ներկայի։',
      },
      {
        key: 'B',
        es: 'terminara',
        hy: 'ավարտեի',
        wrongReasonHy:
          '«Terminara»-ն Imperfecto de Subjuntivo է, որը գլխավոր նախադասությունում արդյունքի համար չի օգտագործվում։',
      },
      {
        key: 'C',
        es: 'terminaré',
        hy: 'կավարտեմ',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'haya terminado',
        hy: 'ավարտած լինեմ',
        wrongReasonHy:
          '«Haya terminado»-ն Pretérito Perfecto de Subjuntivo է և այստեղ քերականորեն սխալ է առաջին տիպի պայմանական նախադասության մեջ։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Si tengo tiempo, terminaré el informe hoy.',
    exampleHy: 'Եթե ժամանակ ունենամ, այսօր կավարտեմ հաշվետվությունը։',
    whyCorrectHy:
      'Սա իրական պայմանական նախադասություն է (1-ին տիպ)․ «Si + Presente de Indicativo (tengo) → Futuro Simple (terminaré)»։',
    grammarNoteHy: '1-ին տիպի պայմանական՝ Si + Presente → Futuro / Presente / Imperativo։',
  },
  {
    id: 19,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'B1',
    promptEs: '¿Qué es un «contrato indefinido»?',
    promptHy: 'Ի՞նչ է նշանակում «անժամկետ աշխատանքային պայմանագիր»։',
    options: [
      {
        key: 'A',
        es: 'Un contrato sin fecha de fin',
        hy: 'Պայմանագիր, որը չունի ավարտի հստակ ամսաթիվ',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Un contrato de prueba de un mes',
        hy: 'Մեկամսյա փորձաշրջանի պայմանագիր',
        wrongReasonHy:
          'Մեկամսյա փորձաշրջանը կամ ժամանակավոր պայմանագիրը («contrato temporal») ունի հստակ ժամկետ, ի տարբերություն «indefinido»-ի։',
      },
      {
        key: 'C',
        es: 'Un contrato sin sueldo',
        hy: 'Պայմանագիր՝ առանց աշխատավարձի',
        wrongReasonHy:
          'Աշխատանքային պայմանագիրը ենթադրում է վարձատրություն․ «indefinido» վերաբերում է տևողությանը, ոչ թե աշխատավարձի բացակայությանը։',
      },
      {
        key: 'D',
        es: 'Un contrato que no está firmado',
        hy: 'Չստորագրված պայմանագիր',
        wrongReasonHy:
          '«Indefinido» չի նշանակում չստորագրված, այն նշանակում է ժամկետով չսահմանափակված (անժամկետ)։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«Contrato indefinido» (անժամկետ պայմանագիր) նշանակում է մշտական աշխատանքային պայմանագիր՝ առանց ավարտի հստակ ամսաթվի («sin fecha de fin»)։',
  },
  {
    id: 20,
    part: 2,
    partTitleEs: 'Parte 2 — Preguntas 11–20',
    partTitleHy: 'Մաս 2 — Հարցեր 11–20',
    levelLabel: 'A2–B1',
    promptEs: '¿Qué significa «hacer horas extra»?',
    promptHy: 'Ի՞նչ է նշանակում «արտաժամյա աշխատել»։',
    options: [
      {
        key: 'A',
        es: 'Trabajar menos horas',
        hy: 'Ավելի քիչ ժամեր աշխատել',
        wrongReasonHy:
          '«Extra» նշանակում է հավելյալ, ոչ թե պակաս։',
      },
      {
        key: 'B',
        es: 'Trabajar más horas que las de tu jornada',
        hy: 'Սահմանված աշխատանքային ժամերից ավելի աշխատել',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Cambiar el turno con un compañero',
        hy: 'Գործընկերոջ հետ հերթափոխը փոխել',
        wrongReasonHy:
          'Հերթափոխը փոխելը կոչվում է «cambiar el turno», ոչ թե «hacer horas extra»։',
      },
      {
        key: 'D',
        es: 'Pedir vacaciones',
        hy: 'Արձակուրդ խնդրել',
        wrongReasonHy:
          'Արձակուրդ խնդրելը «pedir vacaciones» է։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Hacer horas extra» նշանակում է աշխատել պայմանագրով սահմանված աշխատանքային գրաֆիկից («jornada») ավելի շատ ժամեր (արտաժամյա աշխատանք)։',
  },

  // Parte 3 — Preguntas 21–30
  {
    id: 21,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1',
    promptEs:
      'Lee: «A partir del 1 de diciembre, los turnos de fin de semana serán rotativos. Quien necesite un cambio deberá solicitarlo por escrito con una semana de antelación.» ¿Qué tiene que hacer quien quiera cambiar de turno?',
    promptHy:
      'Կարդա՛․ «Դեկտեմբերի 1-ից սկսած՝ հանգստյան օրերի հերթափոխերը կլինեն հերթագայությամբ։ Նա, ով ցանկանում է փոխել հերթափոխը, պետք է գրավոր դիմի մեկ շաբաթ առաջ»։ Ի՞նչ պետք է անի հերթափոխը փոխել ցանկացողը։',
    options: [
      {
        key: 'A',
        es: 'Hablar con un compañero el mismo día',
        hy: 'Նույն օրը խոսել գործընկերոջ հետ',
        wrongReasonHy:
          'Տեքստում պահանջվում է դիմել գրավոր («por escrito») և մեկ շաբաթ առաջ, ոչ թե բանավոր ու նույն օրը։',
      },
      {
        key: 'B',
        es: 'Trabajar todos los fines de semana',
        hy: 'Աշխատել բոլոր հանգստյան օրերին',
        wrongReasonHy:
          'Հերթափոխերը հերթագայությամբ են («rotativos»), ինչը նշանակում է՝ ոչ բոլոր հանգստյան օրերին։',
      },
      {
        key: 'C',
        es: 'Pedirlo por escrito una semana antes',
        hy: 'Մեկ շաբաթ առաջ գրավոր դիմել',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'Esperar al 1 de diciembre',
        hy: 'Սպասել մինչև դեկտեմբերի 1-ը',
        wrongReasonHy:
          'Դեկտեմբերի 1-ը նոր կարգի ուժի մեջ մտնելու օրն է, ոչ թե հերթափոխը փոխելու պայմանը։',
      },
    ],
    correctKey: 'C',
    whyCorrectHy:
      '«Solicitarlo por escrito con una semana de antelación» նշանակում է՝ դիմել գրավոր («por escrito») առնվազն մեկ շաբաթ նախապես («una semana antes»)։',
  },
  {
    id: 22,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1–B2',
    promptEs:
      'Lee el contrato: «Periodo de prueba: 2 meses. Durante este periodo, cualquiera de las partes podrá terminar la relación laboral sin preaviso.» ¿Qué significa?',
    promptHy:
      'Կարդա՛ պայմանագիրը․ «Փորձաշրջան՝ 2 ամիս։ Այս ժամանակահատվածում կողմերից յուրաքանչյուրը կարող է դադարեցնել աշխատանքային հարաբերությունները՝ առանց նախապես զգուշացնելու»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Solo la empresa puede terminar el contrato',
        hy: 'Միայն ընկերությունը կարող է դադարեցնել պայմանագիրը',
        wrongReasonHy:
          '«Cualquiera de las partes» նշանակում է «կողմերից յուրաքանչյուրը» (և՛ ընկերությունը, և՛ աշխատողը), ոչ թե միայն ընկերությունը։',
      },
      {
        key: 'B',
        es: 'Nadie puede terminar el contrato esos 2 meses',
        hy: 'Այդ երկու ամսվա ընթացքում ոչ ոք չի կարող դադարեցնել պայմանագիրը',
        wrongReasonHy:
          'Հակառակը՝ փորձաշրջանի ընթացքում երկու կողմն էլ կարող են հեշտությամբ դադարեցնել այն։',
      },
      {
        key: 'C',
        es: 'El trabajador no cobra esos 2 meses',
        hy: 'Աշխատողն այդ երկու ամիսների ընթացքում աշխատավարձ չի ստանում',
        wrongReasonHy:
          'Փորձաշրջանը վճարվող աշխատանքային ժամանակահատված է․ աշխատավարձ չստանալու մասին խոսք չկա։',
      },
      {
        key: 'D',
        es: 'Durante esos 2 meses, la empresa o el trabajador pueden terminar el contrato sin avisar antes',
        hy: 'Այդ երկու ամիսների ընթացքում և՛ ընկերությունը, և՛ աշխատողը կարող են դադարեցնել պայմանագիրը՝ առանց նախապես զգուշացնելու',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    whyCorrectHy:
      '«Cualquiera de las partes» նշանակում է պայմանագրի երկու կողմերից ցանկացածը (գործատուն կամ աշխատողը), իսկ «sin preaviso»՝ առանց նախնական ծանուցման։',
  },
  {
    id: 23,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1',
    promptEs: 'Un cliente se queja de que la comida está fría. ¿Qué le dices?',
    promptHy: 'Հաճախորդը բողոքում է, որ ուտելիքը սառն է։ Ի՞նչ ես ասում նրան։',
    options: [
      {
        key: 'A',
        es: 'En mi país se come así.',
        hy: 'Իմ երկրում այդպես են ուտում։',
        wrongReasonHy:
          'Այս պատասխանն անտեսում է հաճախորդի դժգոհությունը և ոչ պրոֆեսիոնալ է սպասարկման ոլորտում։',
      },
      {
        key: 'B',
        es: 'Disculpe, ahora mismo se lo cambio por un plato caliente.',
        hy: 'Կներեք, հենց հիմա կփոխեմ և տաք ուտեստ կբերեմ։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'No es culpa mía, es de cocina.',
        hy: 'Դա իմ մեղքը չէ, խոհանոցի մեղքն է։',
        wrongReasonHy:
          'Մեղքը խոհանոցի վրա գցելը չի լուծում հաճախորդի խնդիրը և վնասում է հաստատության համբավին։',
      },
      {
        key: 'D',
        es: 'Pues no se la coma.',
        hy: 'Դե, մի՛ կերեք։',
        wrongReasonHy:
          'Սա կոպիտ և վիրավորական պատասխան է հաճախորդին։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Հաճախորդների սպասարկման ոլորտում ճիշտ և պրոֆեսիոնալ արձագանքն է՝ ներողություն խնդրել («Disculpe») և անմիջապես առաջարկել լուծում («ahora mismo se lo cambio por un plato caliente»)։',
  },
  {
    id: 24,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1',
    promptEs:
      'En una entrevista te preguntan: «¿Por qué quiere trabajar con nosotros?» ¿Cuál es la mejor respuesta?',
    promptHy:
      'Աշխատանքի հարցազրույցում քեզ հարցնում են․ «Ինչո՞ւ եք ցանկանում աշխատել մեզ մոտ»։ Ո՞րն է լավագույն պատասխանը։',
    options: [
      {
        key: 'A',
        es: 'Porque tengo experiencia en almacén y me interesa crecer en una empresa como la suya.',
        hy: 'Որովհետև պահեստում աշխատելու փորձ ունեմ և ցանկանում եմ մասնագիտորեն զարգանալ ձեր նման ընկերությունում։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Porque necesito dinero y nada más.',
        hy: 'Որովհետև ինձ գումար է պետք, ուրիշ ոչինչ։',
        wrongReasonHy:
          'Չնայած աշխատավարձը կարևոր է, հարցազրույցում «միայն փողի համար» ասելը ցույց է տալիս մոտիվացիայի և հետաքրքրության պակաս։',
      },
      {
        key: 'C',
        es: 'No sé, me lo dijo un amigo.',
        hy: 'Չգիտեմ, ընկերս է ասել։',
        wrongReasonHy:
          'Սա ցույց է տալիս, որ թեկնածուն չի պատրաստվել հարցազրույցին և սեփական մոտիվացիա չունի։',
      },
      {
        key: 'D',
        es: 'Porque está cerca de mi casa y ya está.',
        hy: 'Որովհետև իմ տան մոտ է, և վերջ։',
        wrongReasonHy:
          'Միայն տանը մոտ լինելը և «և վերջ» («y ya está») արտահայտությունը պրոֆեսիոնալ չեն հնչում հարցազրույցում։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'Լավագույն պատասխանը ընդգծում է թե՛ քո մասնագիտական փորձը («tengo experiencia»), թե՛ զարգանալու ցանկությունը հենց տվյալ ընկերությունում («me interesa crecer en una empresa como la suya»)։',
  },
  {
    id: 25,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1–B2',
    promptEs: 'Completa: «Me pidieron que ___ el inventario antes del viernes.»',
    promptHy: 'Լրացրո՛ւ․ «Ինձ խնդրեցին, որ մինչև ուրբաթ գույքագրում կատարեի»։',
    options: [
      {
        key: 'A',
        es: 'hago',
        hy: 'ես անում եմ',
        wrongReasonHy:
          '«Hago»-ն ներկա ժամանակի սահմանական եղանակ է, որը չի համապատասխանում անցյալ խնդրանք արտահայտող «Me pidieron que...» կառույցին։',
      },
      {
        key: 'B',
        es: 'haré',
        hy: 'ես կանեմ',
        wrongReasonHy:
          '«Pedir que» (խնդրել, որ) բայից հետո պարտադիր է Subjuntivo-ն, ոչ թե ապառնի Indicativo («haré»)։',
      },
      {
        key: 'C',
        es: 'hiciera',
        hy: 'ես անեի',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'hacer',
        hy: 'անել',
        wrongReasonHy:
          '«Que» շաղկապի առկայության դեպքում (երբ երկու նախադասությունների ենթակաները տարբեր են) պետք է խոնարհված բայ, ոչ թե ինֆինիտիվ։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Me pidieron que hiciera el inventario antes del viernes.',
    exampleHy: 'Ինձ խնդրեցին, որ մինչև ուրբաթ գույքագրում կատարեի։',
    whyCorrectHy:
      'Գլխավոր նախադասության բայը անցյալ ժամանակում է («Me pidieron» — ինձ խնդրեցին), և խնդրանք արտահայտող բայերը պահանջում են Subjuntivo։ Անցյալի համաձայնեցման կանոնով դրվում է Imperfecto de Subjuntivo՝ «hiciera»։',
    grammarNoteHy: 'Անցյալ ժամանակ (pedir/querer/decir) + que + Imperfecto de Subjuntivo։',
  },
  {
    id: 26,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1',
    promptEs: 'Completa: «Es importante que todos ___ el casco en la obra.»',
    promptHy: 'Լրացրո՛ւ․ «Կարևոր է, որ շինհրապարակում բոլորը սաղավարտ կրեն»։',
    options: [
      {
        key: 'A',
        es: 'llevan',
        hy: 'նրանք կրում են',
        wrongReasonHy:
          '«Llevan»-ը սահմանական եղանակ է (Indicativo), մինչդեռ «Es importante que...» գնահատողական կառույցը պահանջում է Subjuntivo։',
      },
      {
        key: 'B',
        es: 'llevarán',
        hy: 'նրանք կկրեն',
        wrongReasonHy:
          '«Es importante que» արտահայտությունից հետո ապառնի սահմանական («llevarán») չի օգտագործվում։',
      },
      {
        key: 'C',
        es: 'llevando',
        hy: 'կրելով',
        wrongReasonHy:
          '«Llevando»-ն դերբայ է և չի կարող հանդես գալ որպես «que todos...» երկրորդական նախադասության ստորոգյալ։',
      },
      {
        key: 'D',
        es: 'lleven',
        hy: 'նրանք կրեն',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Es importante que todos lleven el casco en la obra.',
    exampleHy: 'Կարևոր է, որ շինհրապարակում բոլորը սաղավարտ կրեն։',
    whyCorrectHy:
      'Անդեմ գնահատողական կառույցներից հետո («Es importante que», «Es necesario que») միշտ դրվում է Subjuntivo։ «Llevar» բայի ներկա Subjuntivo-ն 3-րդ դեմք հոգնակիում («todos») «lleven» է։',
    grammarNoteHy: 'Es importante/necesario que + Presente de Subjuntivo։',
  },
  {
    id: 27,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1–B2',
    promptEs: '¿Qué es el «finiquito»?',
    promptHy: 'Ի՞նչ է նշանակում «finiquito»՝ աշխատանքային վերջնահաշվարկ։',
    options: [
      {
        key: 'A',
        es: 'El documento con lo que te debe la empresa cuando acaba el contrato',
        hy: 'Փաստաթուղթ, որտեղ նշված են այն գումարները, որոնք ընկերությունը պարտավոր է վճարել պայմանագրի ավարտին',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'La primera nómina',
        hy: 'Աշխատավարձի առաջին հաշվարկային թերթիկը',
        wrongReasonHy:
          'Առաջին աշխատավարձի թերթիկը կոչվում է «primera nómina», իսկ «finiquito»-ն տրվում է աշխատանքային հարաբերությունների ավարտին։',
      },
      {
        key: 'C',
        es: 'Una multa al trabajador',
        hy: 'Աշխատողին նշանակված տուգանք',
        wrongReasonHy:
          '«Finiquito»-ն տուգանք չէ, այլ վերջնահաշվարկ (չօգտագործված արձակուրդի, աշխատած օրերի և այլնի վճարում)։',
      },
      {
        key: 'D',
        es: 'El contrato de trabajo',
        hy: 'Աշխատանքային պայմանագիր',
        wrongReasonHy:
          'Պայմանագիրը ստորագրվում է աշխատանքի ընդունվելիս, իսկ «finiquito»-ն՝ պայմանագրի ավարտին։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«El finiquito»-ն իսպանական աշխատանքային իրավունքում վերջնահաշվարկի փաստաթուղթն է, որտեղ գրանցվում են պայմանագրի ավարտին աշխատողին հասանելիք բոլոր գումարները։',
  },
  {
    id: 28,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1',
    promptEs: 'Un compañero te dice: «¿Me echas una mano?» ¿Qué te pide?',
    promptHy: 'Գործընկերդ ասում է․ «Կօգնե՞ս ինձ»։ Ի՞նչ է նա խնդրում։',
    options: [
      {
        key: 'A',
        es: 'Que le despidas',
        hy: 'Որ իրեն աշխատանքից ազատես',
        wrongReasonHy:
          '«Despedir» նշանակում է աշխատանքից ազատել, ինչը ոչ մի կապ չունի «echar una mano» դարձվածքի հետ։',
      },
      {
        key: 'B',
        es: 'Que le saludes',
        hy: 'Որ իրեն բարևես',
        wrongReasonHy:
          '«Saludar» նշանակում է բարևել, մինչդեռ դարձվածքը վերաբերում է գործնական օգնությանը։',
      },
      {
        key: 'C',
        es: 'Que le ayudes',
        hy: 'Որ իրեն օգնես',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'Que le des la mano para despedirte',
        hy: 'Որ հրաժեշտ տալիս սեղմես նրա ձեռքը',
        wrongReasonHy:
          'Արտահայտությունը չպետք է բառացի հասկանալ որպես ձեռք մեկնել․ սա կայուն դարձվածք է։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Echar una mano',
    exampleHy: 'Օգնության ձեռք մեկնել, օգնել։',
    whyCorrectHy:
      '«Echar una mano» իսպաներենի շատ տարածված դարձվածք է, որը բառացի նշանակում է «ձեռք գցել/մեկնել», իսկ իմաստով՝ «օգնել» («ayudar»)։',
  },
  {
    id: 29,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B2',
    promptEs:
      'Lee: «El comité de empresa ha convocado una huelga para el jueves. No obstante, la dirección recuerda que se mantendrán los servicios mínimos y que la participación es voluntaria.» ¿Qué es cierto?',
    promptHy:
      'Կարդա՛․ «Աշխատողների ներկայացուցիչների կոմիտեն հինգշաբթի օրվա համար գործադուլ է հայտարարել։ Այնուամենայնիվ, ղեկավարությունը հիշեցնում է, որ նվազագույն անհրաժեշտ ծառայությունները կպահպանվեն, և մասնակցությունը կամավոր է»։ Ո՞ր պնդումն է ճիշտ։',
    options: [
      {
        key: 'A',
        es: 'La huelga está prohibida',
        hy: 'Գործադուլն արգելված է',
        wrongReasonHy:
          'Գործադուլն արգելված չէ․ այն հայտարարված է հինգշաբթի օրվա համար, պարզապես մասնակցությունը կամավոր է։',
      },
      {
        key: 'B',
        es: 'Habrá servicios mínimos y nadie está obligado a hacer huelga',
        hy: 'Կպահպանվեն նվազագույն անհրաժեշտ ծառայությունները, և ոչ ոք պարտավոր չէ մասնակցել գործադուլին',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Todos deben hacer huelga',
        hy: 'Բոլորը պարտավոր են գործադուլ անել',
        wrongReasonHy:
          'Տեքստում ասվում է «la participación es voluntaria» (մասնակցությունը կամավոր է), այսինքն՝ պարտադիր չէ։',
      },
      {
        key: 'D',
        es: 'La dirección ha convocado la huelga',
        hy: 'Գործադուլը հայտարարել է ղեկավարությունը',
        wrongReasonHy:
          'Գործադուլը հայտարարել է «el comité de empresa»-ն (աշխատողների ներկայացուցիչների կոմիտեն), ոչ թե ղեկավարությունը («la dirección»)։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Հաղորդագրության մեջ նշված է երկու հիմնական փաստ․ 1) «se mantendrán los servicios mínimos» (կպահպանվեն նվազագույն ծառայությունները), և 2) «la participación es voluntaria» (մասնակցությունը կամավոր է, այսինքն՝ ոչ ոք պարտավոր չէ)։',
  },
  {
    id: 30,
    part: 3,
    partTitleEs: 'Parte 3 — Preguntas 21–30',
    partTitleHy: 'Մաս 3 — Հարցեր 21–30',
    levelLabel: 'B1–B2',
    promptEs:
      'Lee la oferta: «Se valorará experiencia en atención al cliente, si bien no es requisito indispensable.» ¿Qué significa?',
    promptHy:
      'Կարդա՛ աշխատանքի առաջարկը․ «Հաճախորդների սպասարկման փորձը կգնահատվի, թեև պարտադիր պահանջ չէ»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Sin experiencia no te pueden contratar',
        hy: 'Առանց փորձի քեզ չեն կարող աշխատանքի ընդունել',
        wrongReasonHy:
          'Քանի որ նշված է «no es requisito indispensable» (պարտադիր պահանջ չէ), առանց փորձի էլ կարող են ընդունել։',
      },
      {
        key: 'B',
        es: 'La experiencia no cuenta',
        hy: 'Փորձը նշանակություն չունի',
        wrongReasonHy:
          '«Se valorará» նշանակում է «կգնահատվի / առավելություն կլինի», ուստի փորձն ունի նշանակություն։',
      },
      {
        key: 'C',
        es: 'Solo contratan a personas sin experiencia',
        hy: 'Աշխատանքի են ընդունում միայն փորձ չունեցող մարդկանց',
        wrongReasonHy:
          'Սա հակասում է «se valorará experiencia» արտահայտությանը։',
      },
      {
        key: 'D',
        es: 'La experiencia ayuda, pero no es obligatoria',
        hy: 'Փորձը առավելություն է, բայց պարտադիր չէ',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    whyCorrectHy:
      '«Se valorará» նշանակում է «կգնահատվի» (օգտակար առավելություն է), իսկ «si bien no es requisito indispensable» նշանակում է «թեև պարտադիր պահանջ չէ»։',
  },

  // Parte 4 — Preguntas 31–40
  {
    id: 31,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2',
    promptEs: 'En tu nómina de octubre faltan las horas extra. ¿Qué correo envías a Recursos Humanos?',
    promptHy:
      'Քո հոկտեմբեր ամսվա աշխատավարձի հաշվարկում արտաժամյա աշխատանքային ժամերը նշված չեն։ Ի՞նչ նամակ ես ուղարկում կադրերի բաժին։',
    options: [
      {
        key: 'A',
        es: '¡Me habéis robado dinero otra vez!',
        hy: 'Դուք նորից իմ գումարն եք գողացել։',
        wrongReasonHy:
          'Մեղադրական և ագրեսիվ տոնը («գողացել եք») անընդունելի է պաշտոնական նամակագրության մեջ։',
      },
      {
        key: 'B',
        es: 'Les escribo porque en la nómina de octubre no aparecen las horas extra que hice. ¿Podrían revisarlo, por favor?',
        hy: 'Գրում եմ ձեզ, քանի որ հոկտեմբեր ամսվա աշխատավարձի հաշվարկում իմ կատարած արտաժամյա աշխատանքային ժամերը նշված չեն։ Կարո՞ղ եք, խնդրում եմ, ստուգել։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Quiero mi dinero ya o me voy.',
        hy: 'Հենց հիմա ուզում եմ իմ գումարը, թե չէ հեռանում եմ։',
        wrongReasonHy:
          'Սպառնալիքով և պահանջկոտ տոնով նամակը պրոֆեսիոնալ չէ։',
      },
      {
        key: 'D',
        es: 'Nómina mal. Arreglar.',
        hy: 'Աշխատավարձի հաշվարկը սխալ։ Ուղղել։',
        wrongReasonHy:
          'Հրահանգային ու կտրուկ հեռագրական ոճը («Սխալ։ Ուղղել։») քաղաքավարի և գրագետ չէ։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Պաշտոնական նամակագրության մեջ («Recursos Humanos») կիրառվում է հարգալից «ustedes» դիմելաձևը («Les escribo», «¿Podrían revisarlo, por favor?»), ինչպես նաև հստակ և հանգիստ նկարագրվում է խնդիրը։',
  },
  {
    id: 32,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2',
    promptEs: 'Quieres cambiar tu turno del sábado. ¿Cómo se lo pides al encargado?',
    promptHy: 'Ցանկանում ես փոխել շաբաթ օրվա հերթափոխդ։ Ինչպե՞ս ես դա խնդրում պատասխանատուից։',
    options: [
      {
        key: 'A',
        es: '¿Sería posible cambiar mi turno del sábado? Puedo cubrir el domingo a cambio.',
        hy: 'Հնարավո՞ր կլինի փոխել իմ շաբաթ օրվա հերթափոխը։ Փոխարենը կարող եմ աշխատել կիրակի օրը։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'El sábado no vengo, ya te lo digo.',
        hy: 'Շաբաթ օրը չեմ գալու, հիմա եմ ասում։',
        wrongReasonHy:
          'Միակողմանի հայտարարելը, որ չես գալու, աշխատանքային կարգապահության խախտում է և կոպիտ է։',
      },
      {
        key: 'C',
        es: 'Cámbiame el turno porque sí.',
        hy: 'Փոխիր իմ հերթափոխը, որովհետև այդպես եմ ուզում։',
        wrongReasonHy:
          'Հրամայական տոնն ու «porque sí» (որովհետև այդպես եմ ուզում) արտահայտությունը անհարգալից են։',
      },
      {
        key: 'D',
        es: 'Si no me cambias el turno, me voy.',
        hy: 'Եթե հերթափոխս չփոխես, կհեռանամ։',
        wrongReasonHy:
          'Վերջնագիր ներկայացնելը կառուցողական հաղորդակցություն չէ։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'Քաղաքավարի խնդրանքը («¿Sería posible...?» — հնարավո՞ր կլինի) համադրված փոխարինման պատրաստակամության հետ («Puedo cubrir el domingo a cambio») ամենաարդյունավետ և հարգալից տարբերակն է։',
  },
  {
    id: 33,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2–C1',
    promptEs: 'Completa: «De haberlo sabido, no ___ ese contrato.»',
    promptHy: 'Լրացրո՛ւ․ «Եթե դա իմանայի, այդ պայմանագիրը չէի ստորագրի»։',
    options: [
      {
        key: 'A',
        es: 'firmaría',
        hy: 'կստորագրեի',
        wrongReasonHy:
          '«Firmaría»-ն (Condicional Simple) արտահայտում է ներկա կամ ապագա հիպոթետիկ գործողություն, մինչդեռ «De haberlo sabido»-ն վերաբերում է անցյալին (արդեն կատարված գործողության)։',
      },
      {
        key: 'B',
        es: 'firmé',
        hy: 'ստորագրեցի',
        wrongReasonHy:
          '«Firmé»-ն իրական անցյալ փաստ է արտահայտում, ոչ թե անիրական անցյալ պայմանի հետևանք։',
      },
      {
        key: 'C',
        es: 'había firmado',
        hy: 'ստորագրել էի',
        wrongReasonHy:
          '«Había firmado»-ն Pluscuamperfecto de Indicativo է և չի արտահայտում պայմանական ենթադրյալ արդյունք։',
      },
      {
        key: 'D',
        es: 'habría firmado',
        hy: 'ստորագրած կլինեի',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'De haberlo sabido, no habría firmado ese contrato.',
    exampleHy: 'Եթե դա իմանայի, այդ պայմանագիրը չէի ստորագրի։',
    whyCorrectHy:
      '«De + haber + դերբայ» («De haberlo sabido» = Si lo hubiera sabido) կառույցը 3-րդ տիպի անցյալ անիրական պայման է։ Գլխավոր նախադասությունում պահանջվում է Condicional Compuesto՝ «habría firmado»։',
    grammarNoteHy: 'Անիրական անցյալ պայման՝ De haber + Participio → Condicional Compuesto (habría + Participio)։',
  },
  {
    id: 34,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2',
    promptEs: 'Completa: «No es que no ___ trabajar, es que no tengo tiempo.»',
    promptHy: 'Լրացրո՛ւ․ «Բանն այն չէ, որ չեմ ուզում աշխատել, պարզապես ժամանակ չունեմ»։',
    options: [
      {
        key: 'A',
        es: 'quiero',
        hy: 'ուզում եմ',
        wrongReasonHy:
          '«Quiero»-ն Indicativo է․ «No es que...» կառույցը ժխտում է ենթադրվող պատճառը, ինչի համար իսպաներենում ՊԱՐՏԱԴԻՐ է Subjuntivo-ն։',
      },
      {
        key: 'B',
        es: 'querré',
        hy: 'կուզեմ',
        wrongReasonHy:
          '«Querré»-ն ապառնի Indicativo է, որը սխալ է «No es que...» արտահայտությունից հետո։',
      },
      {
        key: 'C',
        es: 'quiera',
        hy: 'ուզեմ',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'querer',
        hy: 'ուզել',
        wrongReasonHy:
          '«Que» շաղկապից հետո անհրաժեշտ է խոնարհված բայ, ոչ թե անորոշ ձև։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'No es que no quiera trabajar, es que no tengo tiempo.',
    exampleHy: 'Բանն այն չէ, որ չեմ ուզում աշխատել, պարզապես ժամանակ չունեմ։',
    whyCorrectHy:
      '«No es que + Subjuntivo, sino que / es que + Indicativo» կառույցում առաջին մասում պատճառը ժխտվում է, ուստի «querer» բայը դրվում է Presente de Subjuntivo-ով՝ «quiera»։',
    grammarNoteHy: 'No es que + Subjuntivo, (sino) es que + Indicativo։',
  },
  {
    id: 35,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2–C1',
    promptEs: '«La empresa ha decidido prescindir de sus servicios.» ¿Qué significa?',
    promptHy: '«Ընկերությունը որոշել է այլևս չօգտվել նրա ծառայություններից»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Que le despiden',
        hy: 'Նրան աշխատանքից ազատում են',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Que le ascienden',
        hy: 'Նրան պաշտոնի բարձրացում են տալիս',
        wrongReasonHy:
          '«Ascender» նշանակում է պաշտոնը բարձրացնել, մինչդեռ «prescindir de» նշանակում է հրաժարվել ինչ-որ մեկից կամ ինչ-որ բանից։',
      },
      {
        key: 'C',
        es: 'Que le cambian de puesto',
        hy: 'Նրան տեղափոխում են այլ պաշտոնի',
        wrongReasonHy:
          'Աշխատակցի ծառայություններից հրաժարվելը նշանակում է դադարեցնել համագործակցությունը, ոչ թե տեղափոխել այլ պաշտոնի։',
      },
      {
        key: 'D',
        es: 'Que le vuelven a contratar',
        hy: 'Նրան կրկին աշխատանքի են ընդունում',
        wrongReasonHy:
          '«Volver a contratar» նշանակում է նորից վարձել, ինչը հակառակ իմաստն է։',
      },
    ],
    correctKey: 'A',
    exampleEs: 'Prescindir de sus servicios',
    exampleHy: 'Հրաժարվել որևէ մեկի ծառայություններից, աշխատանքից ազատել։',
    whyCorrectHy:
      '«Prescindir de alguien / de sus servicios» պաշտոնական, մեղմացուցիչ արտահայտություն է, որը նշանակում է աշխատանքից ազատել («despedir»)։',
  },
  {
    id: 36,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2–C1',
    promptEs:
      'En un correo formal: «Le ruego que lo envíe a la mayor brevedad.» ¿Qué significa «a la mayor brevedad»?',
    promptHy:
      'Պաշտոնական նամակում գրված է․ «Խնդրում եմ, դա ուղարկեք հնարավորինս շուտ»։ Ի՞նչ է նշանակում «a la mayor brevedad» արտահայտությունը։',
    options: [
      {
        key: 'A',
        es: 'En pocas palabras',
        hy: 'Մի քանի բառով',
        wrongReasonHy:
          '«Brevedad» բառը այստեղ վերաբերում է ժամանակին (շտապողականությանը), ոչ թե տեքստի երկարությանը («մի քանի բառով»)։',
      },
      {
        key: 'B',
        es: 'Lo antes posible',
        hy: 'Հնարավորինս շուտ',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Con mucho cuidado',
        hy: 'Շատ ուշադիր',
        wrongReasonHy:
          '«Con mucho cuidado» նշանակում է մեծ զգուշությամբ, ինչը չի համապատասխանում «brevedad» արմատին։',
      },
      {
        key: 'D',
        es: 'Por escrito',
        hy: 'Գրավոր',
        wrongReasonHy:
          '«Por escrito» նշանակում է գրավոր, ոչ թե հնարավորինս արագ։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«A la mayor brevedad (posible)» բարձր ոճի պաշտոնական արտահայտություն է, որը նշանակում է «հնարավորինս շուտ / ամենակարճ ժամկետում» («lo antes posible»)։',
  },
  {
    id: 37,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'C1',
    promptEs:
      'Lee: «Si bien la reforma pretendía reducir la temporalidad, algunos expertos advierten de que el aumento de los contratos fijos discontinuos podría estar enmascarando parte de ella.» ¿Qué advierten los expertos?',
    promptHy:
      'Կարդա՛․ «Թեև բարեփոխման նպատակն էր նվազեցնել ժամանակավոր զբաղվածությունը, որոշ փորձագետներ զգուշացնում են, որ ընդհատվող անժամկետ պայմանագրերի թվի աճը կարող է քողարկել ժամանակավոր զբաղվածության մի մասը»։ Ինչի՞ մասին են զգուշացնում փորձագետները։',
    options: [
      {
        key: 'A',
        es: 'Que la reforma ha eliminado la temporalidad',
        hy: 'Բարեփոխումը վերացրել է ժամանակավոր զբաղվածությունը',
        wrongReasonHy:
          'Տեքստում ասվում է, որ բարեփոխումը նպատակ ուներ նվազեցնել այն («pretendía reducir»), սակայն փորձագետները կարծում են, որ այն պարզապես քողարկված է։',
      },
      {
        key: 'B',
        es: 'Que los contratos fijos discontinuos han desaparecido',
        hy: 'Ընդհատվող անժամկետ պայմանագրերը վերացել են',
        wrongReasonHy:
          'Հակառակը՝ նշվում է դրանց թվի աճ («el aumento de los contratos fijos discontinuos»), ոչ թե վերացում։',
      },
      {
        key: 'C',
        es: 'Que la reforma ha aumentado los despidos',
        hy: 'Բարեփոխման հետևանքով ավելացել են աշխատանքից ազատումները',
        wrongReasonHy:
          'Տեքստում աշխատանքից ազատումների («despidos») աճի մասին որևէ տեղեկություն չկա։',
      },
      {
        key: 'D',
        es: 'Que parte de la temporalidad podría seguir existiendo con otro tipo de contrato',
        hy: 'Ժամանակավոր զբաղվածության մի մասը կարող է շարունակել գոյություն ունենալ պայմանագրի այլ տեսակի ներքո',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    whyCorrectHy:
      '«Estar enmascarando parte de ella» նշանակում է «քողարկել դրա մի մասը»․ այսինքն՝ ժամանակավոր զբաղվածությունը իրականում կարող է շարունակել գոյություն ունենալ «fijo discontinuo» պայմանագրի անվան տակ։',
  },
  {
    id: 38,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2–C1',
    promptEs: '«No le faltaba razón al encargado cuando dijo que la campaña sería dura.» ¿Qué significa?',
    promptHy:
      '«Պատասխանատուն սխալ չէր, երբ ասում էր, որ աշխատանքային շրջանը դժվար կլինի»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Que el encargado se equivocó',
        hy: 'Պատասխանատուն սխալվեց',
        wrongReasonHy:
          '«No le faltaba razón» նշանակում է «նրան ճշմարտացիությունը չէր պակասում», այսինքն՝ նա ճիշտ էր, ոչ թե սխալվել էր։',
      },
      {
        key: 'B',
        es: 'Que nadie le dio la razón al encargado',
        hy: 'Ոչ ոք չհամաձայնեց պատասխանատուի հետ',
        wrongReasonHy:
          'Ուրիշների համաձայնության կամ անհամաձայնության մասին խոսք չկա․ գնահատվում է հենց նրա իրավացի լինելը։',
      },
      {
        key: 'C',
        es: 'Que el encargado tenía razón',
        hy: 'Պատասխանատուն ճիշտ էր',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'Que el encargado no habló de la campaña',
        hy: 'Պատասխանատուն աշխատանքային շրջանի մասին չէր խոսել',
        wrongReasonHy:
          'Նախադասության մեջ ուղղակի նշվում է, որ նա խոսել և ասել է («cuando dijo que...»)։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'No le faltaba razón',
    exampleHy: 'Նա սխալ չէր / նա իրավացի էր։',
    whyCorrectHy:
      'Կրկնակի ժխտման ոճական ձևը՝ «no faltarle razón a alguien», նշանակում է «իրավացի լինել» («tener razón»)։',
  },
  {
    id: 39,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'B2–C1',
    promptEs: 'Dos compañeros discuten por el reparto de tareas. ¿Qué dices para mediar?',
    promptHy:
      'Երկու գործընկեր վիճում են աշխատանքային պարտականությունների բաշխման պատճառով։ Ի՞նչ ես ասում նրանց հաշտեցնելու համար։',
    options: [
      {
        key: 'A',
        es: 'Haced lo que queráis, a mí me da igual.',
        hy: 'Ինչ ուզում եք, արեք, ինձ համար միևնույն է։',
        wrongReasonHy:
          'Անտարբերությունը չի օգնում լուծել կոնֆլիկտը և չի հանդիսանում միջնորդություն («mediar»)։',
      },
      {
        key: 'B',
        es: 'Entiendo que los dos tenéis parte de razón; ¿y si repartimos las tareas por días para que sea más justo?',
        hy: 'Հասկանում եմ, որ երկուսդ էլ որոշ չափով իրավացի եք։ Իսկ ի՞նչ կլինի, եթե պարտականությունները բաշխենք ըստ օրերի, որպեսզի ավելի արդար լինի։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'El problema es tuyo, no mío.',
        hy: 'Խնդիրը քոնն է, ոչ թե իմը։',
        wrongReasonHy:
          'Մեղադրանքն ու տարանջատումը միայն սրում են վեճը։',
      },
      {
        key: 'D',
        es: 'Tú siempre te quejas de todo.',
        hy: 'Դու միշտ ամեն ինչից բողոքում ես։',
        wrongReasonHy:
          'Անձնական քննադատությունը («միշտ բողոքում ես») կոնֆլիկտը խորացնում է։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Արդյունավետ միջնորդության համար անհրաժեշտ է ընդունել երկու կողմերի տեսակետները («Entiendo que los dos tenéis parte de razón») և առաջարկել արդար կառուցողական լուծում («¿y si repartimos...?»)։',
  },
  {
    id: 40,
    part: 4,
    partTitleEs: 'Parte 4 — Preguntas 31–40',
    partTitleHy: 'Մաս 4 — Հարցեր 31–40',
    levelLabel: 'C1',
    promptEs: 'Quieres presentar una propuesta a la gerente. ¿Qué frase tiene el registro adecuado?',
    promptHy:
      'Ցանկանում ես առաջարկ ներկայացնել ղեկավարին։ Ո՞ր արտահայտությունն է համապատասխանում պաշտոնական և քաղաքավարի խոսելաձևին։',
    options: [
      {
        key: 'A',
        es: 'Me gustaría plantearle una propuesta que, a mi juicio, permitiría reducir los tiempos de espera.',
        hy: 'Կցանկանայի Ձեզ ներկայացնել մի առաջարկ, որն, իմ կարծիքով, թույլ կտար նվազեցնել սպասման ժամանակը։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Tengo una idea, escucha.',
        hy: 'Մի գաղափար ունեմ, լսիր։',
        wrongReasonHy:
          'Այս տարբերակը չափազանց մտերմիկ է («tú»՝ «լսիր») և չունի պաշտոնական ոճ։',
      },
      {
        key: 'C',
        es: 'Le planteo propuesta para reducir esperas.',
        hy: 'Ձեզ առաջարկ եմ ներկայացնում սպասումը կրճատելու համար։',
        wrongReasonHy:
          'Նախադասությունն ունի քերականական թերություն (բացակայում է «una» հոդը) և չափազանց կտրուկ ու չոր է։',
      },
      {
        key: 'D',
        es: 'A ver si me haces caso esta vez.',
        hy: 'Տեսնենք՝ այս անգամ ինձ կլսե՞ս։',
        wrongReasonHy:
          'Հանդիմանող տոնն ու «tú» դիմելաձևը անհամատեղելի են ղեկավարին ուղղված պաշտոնական առաջարկի հետ։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'C1 մակարդակի պաշտոնական ռեգիստրում օգտագործվում են քաղաքավարի կառույցներ («Me gustaría plantearle...» — կցանկանայի Ձեզ ներկայացնել), մեղմացուցիչ արտահայտություն («a mi juicio» — իմ կարծիքով) և պայմանական եղանակ («permitiría»)։',
  },
];
