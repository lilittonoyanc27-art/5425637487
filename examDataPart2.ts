import { ExamQuestion } from './examTypes';

export const TEST_2_QUESTIONS: ExamQuestion[] = [
  // Parte 1 — Nivel A1–A2 (1–10)
  {
    id: 1,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1–A2',
    promptEs: 'Completa: «Todos los días ___ café antes de ir al trabajo».',
    promptHy: 'Ամեն օր աշխատանքի գնալուց առաջ սուրճ եմ խմում։',
    options: [
      {
        key: 'A',
        es: 'bebo',
        hy: 'խմում եմ',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'bebí',
        hy: 'խմեցի',
        wrongReasonHy:
          '«Bebí»-ն անցյալ կատարյալ ժամանակ է (Pretérito Indefinido)՝ մեկ անգամ կատարված գործողության համար, մինչդեռ «Todos los días» (ամեն օր) նշանակում է կանոնավոր սովորություն։',
      },
      {
        key: 'C',
        es: 'beberé',
        hy: 'կխմեմ',
        wrongReasonHy:
          '«Beberé»-ն ապառնի ժամանակ է և չի արտահայտում ամենօրյա սովորություն։',
      },
      {
        key: 'D',
        es: 'bebía',
        hy: 'խմում էի',
        wrongReasonHy:
          '«Bebía»-ն անցյալ անկատար ժամանակ է (Imperfecto), բայց հայերեն թարգմանությունը «խմում եմ» (ներկա սովորական գործողություն) է։',
      },
    ],
    correctKey: 'A',
    exampleEs: 'Todos los días bebo café antes de ir al trabajo.',
    exampleHy: 'Ամեն օր աշխատանքի գնալուց առաջ սուրճ եմ խմում։',
    whyCorrectHy:
      '«Todos los días» (ամեն օր) արտահայտությունը ցույց է տալիս կանոնավոր, կրկնվող սովորություն ներկայում, ինչի համար օգտագործվում է Presente de Indicativo՝ «bebo» (խմում եմ)։',
    grammarNoteHy: 'Todos los días / siempre / normalmente → Presente de Indicativo։',
  },
  {
    id: 2,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1',
    promptEs: '¿Qué dices cuando alguien te da las gracias?',
    promptHy: 'Ի՞նչ ես ասում, երբ ինչ-որ մեկը շնորհակալություն է հայտնում։',
    options: [
      {
        key: 'A',
        es: 'Lo siento',
        hy: 'Կներես',
        wrongReasonHy:
          '«Lo siento» նշանակում է «կներես / ցավում եմ» և օգտագործվում է ներողություն խնդրելիս կամ կարեկցանք հայտնելիս։',
      },
      {
        key: 'B',
        es: 'De nada',
        hy: 'Խնդրեմ',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Hasta luego',
        hy: 'Մինչ հանդիպում',
        wrongReasonHy:
          '«Hasta luego» հրաժեշտի խոսք է («մինչ հանդիպում»), ոչ թե շնորհակալության պատասխան։',
      },
      {
        key: 'D',
        es: 'Mucho gusto',
        hy: 'Ուրախ եմ ծանոթանալու համար',
        wrongReasonHy:
          '«Mucho gusto» ասում են առաջին անգամ ծանոթանալիս։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Երբ որևէ մեկն ասում է «Gracias» (շնորհակալություն), իսպաներենում պատասխանում են «De nada» («խնդրեմ / չարժե»)։',
  },
  {
    id: 3,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1–A2',
    promptEs: 'Completa: «Mi hermana ___ en Madrid desde 2020».',
    promptHy: 'Քույրս 2020 թվականից ապրում է Մադրիդում։',
    options: [
      {
        key: 'A',
        es: 'vivió',
        hy: 'ապրեց',
        wrongReasonHy:
          '«Vivió»-ն ավարտված անցյալ ժամանակ է, սակայն «desde 2020» (2020-ից սկսած՝ առ այսօր) ցույց է տալիս, որ գործողությունը շարունակվում է ներկայում։',
      },
      {
        key: 'B',
        es: 'vivirá',
        hy: 'կապրի',
        wrongReasonHy:
          '«Vivirá»-ն ապառնի ժամանակ է, որը չի համապատասխանում «desde 2020» (անցյալից սկսված և մինչ այժմ շարունակվող) կառույցին։',
      },
      {
        key: 'C',
        es: 'vive',
        hy: 'ապրում է',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'vivir',
        hy: 'ապրել',
        wrongReasonHy:
          '«Vivir»-ը չխոնարհված բայ է (ինֆինիտիվ) և նախադասության ստորոգյալ լինել չի կարող։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Mi hermana vive en Madrid desde 2020.',
    exampleHy: 'Քույրս 2020 թվականից ապրում է Մադրիդում։',
    whyCorrectHy:
      'Իսպաներենում անցյալում սկսված և մինչև հիմա շարունակվող գործողությունները «desde + թվական» կառույցով արտահայտվում են ներկա ժամանակով՝ «vive»։',
    grammarNoteHy: 'Presente + desde + ժամանակակետ (2020) = մինչ այժմ շարունակվող վիճակ։',
  },
  {
    id: 4,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1',
    promptEs: 'Estás en una tienda y quieres saber el precio de una camisa. ¿Qué preguntas?',
    promptHy: 'Դու խանութում ես և ցանկանում ես իմանալ վերնաշապիկի գինը։ Ի՞նչ ես հարցնում։',
    options: [
      {
        key: 'A',
        es: '¿Cuánto cuesta?',
        hy: 'Որքա՞ն արժե։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: '¿Cuántos años tiene?',
        hy: 'Քանի՞ տարեկան է։',
        wrongReasonHy:
          '«¿Cuántos años tiene?» հարցնում են տարիքը իմանալու համար, ոչ թե գինը։',
      },
      {
        key: 'C',
        es: '¿De dónde viene?',
        hy: 'Որտեղի՞ց է գալիս։',
        wrongReasonHy:
          '«¿De dónde viene?» նշանակում է «որտեղի՞ց է գալիս»։',
      },
      {
        key: 'D',
        es: '¿Qué hora es?',
        hy: 'Ժամը քանի՞սն է։',
        wrongReasonHy:
          '«¿Qué hora es?» նշանակում է «Ժամը քանի՞սն է»։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'Խանութում որևէ ապրանքի գինը («el precio») հարցնելու ամենատարածված և ճիշտ ձևը «¿Cuánto cuesta?» (Որքա՞ն արժե) հարցն է։',
  },
  {
    id: 5,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1–A2',
    promptEs: 'Completa: «Ahora mismo mis padres ___ la televisión».',
    promptHy: 'Հենց հիմա ծնողներս հեռուստացույց են դիտում։',
    options: [
      {
        key: 'A',
        es: 'vieron',
        hy: 'դիտեցին',
        wrongReasonHy:
          '«Vieron»-ը անցյալ կատարյալ է, սակայն «Ahora mismo» (հենց հիմա) ցույց է տալիս ներկա պահին ընթացող գործողություն։',
      },
      {
        key: 'B',
        es: 'verán',
        hy: 'կդիտեն',
        wrongReasonHy:
          '«Verán»-ը ապառնի ժամանակ է, ոչ թե հենց հիմա տեղի ունեցող գործողություն։',
      },
      {
        key: 'C',
        es: 'venían',
        hy: 'գալիս էին',
        wrongReasonHy:
          '«Venían»-ը «venir» (գալ) բայի անցյալ անկատարն է (ոչ թե «ver»՝ դիտել բայի)։',
      },
      {
        key: 'D',
        es: 'están viendo',
        hy: 'դիտում են',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Ahora mismo mis padres están viendo la televisión.',
    exampleHy: 'Հենց հիմա ծնողներս հեռուստացույց են դիտում։',
    whyCorrectHy:
      '«Ahora mismo» (հենց հիմա) արտահայտությունը պահանջում է ընթացիկ ներկա ժամանակ՝ «estar + gerundio»։ «Mis padres» (հոգնակի՝ նրանք) → «están viendo»։',
    grammarNoteHy: 'Ahora mismo / en este momento → estar + gerundio (-ando / -iendo)։',
  },
  {
    id: 6,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1',
    promptEs: '¿Qué significa «Tengo prisa»?',
    promptHy: 'Ի՞նչ է նշանակում «Tengo prisa»։',
    options: [
      {
        key: 'A',
        es: 'Ես վախենում եմ',
        hy: 'Ես վախենում եմ',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Ես վախենում եմ» իսպաներեն կլինի «Tengo miedo», ոչ թե «Tengo prisa»։',
      },
      {
        key: 'B',
        es: 'Ես շտապում եմ',
        hy: 'Ես շտապում եմ',
        isArmenianOnly: true,
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Ես քաղցած եմ',
        hy: 'Ես քաղցած եմ',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Ես քաղցած եմ» իսպաներեն կլինի «Tengo hambre»։',
      },
      {
        key: 'D',
        es: 'Ես հոգնած եմ',
        hy: 'Ես հոգնած եմ',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Ես հոգնած եմ» իսպաներեն կլինի «Estoy cansado/a»։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Tener prisa» («Tengo prisa») կայուն արտահայտություն է, որը նշանակում է «շտապել» («Ես շտապում եմ»)։',
  },
  {
    id: 7,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1–A2',
    promptEs: 'Completa: «A María no ___ gustan las películas de terror».',
    promptHy: 'Մարիային սարսափ ֆիլմերը դուր չեն գալիս։',
    options: [
      {
        key: 'A',
        es: 'lo',
        hy: 'նրան (ուղիղ խնդիր, արական)',
        wrongReasonHy:
          '«Lo»-ն ուղիղ խնդրի դերանուն է, իսկ «gustar» բայը միշտ պահանջում է անուղղակի խնդրի դերանուն (me, te, le, nos, os, les)։',
      },
      {
        key: 'B',
        es: 'la',
        hy: 'նրան (ուղիղ խնդիր, իգական)',
        wrongReasonHy:
          'Թեև Մարիան իգական սեռի է, «gustar» բայի հետ «la» չի օգտագործվում․ անհրաժեշտ է անուղղակի խնդրի դերանուն (որն անփոփոխ է երկու սեռերի համար)։',
      },
      {
        key: 'C',
        es: 'le',
        hy: 'նրան (անուղղակի խնդիր)',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'se',
        hy: 'իրեն / անդրադարձ դերանուն',
        wrongReasonHy:
          '«Se»-ն անդրադարձ դերանուն է և «A María no ___ gustan» կառույցում սխալ է։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'A María no le gustan las películas de terror.',
    exampleHy: 'Մարիային սարսափ ֆիլմերը դուր չեն գալիս։',
    whyCorrectHy:
      '«Gustar» բայը կառուցվում է անուղղակի խնդրի դերանունով («A María → le»)․ բառացի՝ «Մարիային դուր չեն գալիս»։ Եզակի 3-րդ դեմքում՝ թե՛ արական, թե՛ իգական սեռի համար՝ «le»։',
    grammarNoteHy: 'A él / A ella / A María → le gusta / le gustan։',
  },
  {
    id: 8,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1–A2',
    promptEs: 'Tu amigo te dice: «Estoy muy cansado». ¿Qué le aconsejas?',
    promptHy: 'Ընկերդ ասում է․ «Ես շատ հոգնած եմ»։ Ի՞նչ խորհուրդ ես տալիս։',
    options: [
      {
        key: 'A',
        es: 'Deberías descansar un poco.',
        hy: 'Պետք է մի քիչ հանգստանաս։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Tienes que correr más.',
        hy: 'Պետք է ավելի շատ վազես։',
        wrongReasonHy:
          'Անտրամաբանական է հոգնած մարդուն խորհուրդ տալ ավելի շատ վազել։',
      },
      {
        key: 'C',
        es: 'No debes dormir.',
        hy: 'Պետք չէ քնես։',
        wrongReasonHy:
          'Հոգնած մարդուն պետք է հանգիստ ու քուն, ոչ թե չքնելու խորհուրդ։',
      },
      {
        key: 'D',
        es: 'Deberías trabajar más.',
        hy: 'Պետք է ավելի շատ աշխատես։',
        wrongReasonHy:
          'Ավելի շատ աշխատելը էլ ավելի կհոգնեցնի ընկերոջդ։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'Երբ ինչ-որ մեկը հոգնած է («muy cansado»), տեղին խորհուրդը «Deberías descansar un poco»-ն է («Պետք է մի քիչ հանգստանաս»)։',
  },
  {
    id: 9,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1–A2',
    promptEs: 'Completa: «El año pasado nosotros ___ a Barcelona».',
    promptHy: 'Անցյալ տարի մենք գնացինք Բարսելոնա։',
    options: [
      {
        key: 'A',
        es: 'vamos',
        hy: 'գնում ենք',
        wrongReasonHy:
          '«Vamos»-ը ներկա ժամանակ է, մինչդեռ «El año pasado» (անցյալ տարի) պահանջում է անցյալ կատարյալ։',
      },
      {
        key: 'B',
        es: 'iremos',
        hy: 'կգնանք',
        wrongReasonHy:
          '«Iremos»-ը ապառնի ժամանակ է և չի համապատասխանում «El año pasado»-ին։',
      },
      {
        key: 'C',
        es: 'íbamos',
        hy: 'գնում էինք',
        wrongReasonHy:
          '«Íbamos»-ը անցյալ անկատար է (կրկնվող կամ ընթացիկ գործողություն անցյալում), ոչ թե ավարտված մեկանգամյա ուղևորություն։',
      },
      {
        key: 'D',
        es: 'fuimos',
        hy: 'գնացինք',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'El año pasado nosotros fuimos a Barcelona.',
    exampleHy: 'Անցյալ տարի մենք գնացինք Բարսելոնա։',
    whyCorrectHy:
      '«El año pasado» (անցյալ տարի) նշում է անցյալում ավարտված կոնկրետ ժամանակահատված։ «Ir» բայի Pretérito Indefinido ձևը 1-ին դեմք հոգնակիում («nosotros») «fuimos» է։',
    grammarNoteHy: 'Ir / Ser բայերի Indefinido-ն՝ fui, fuiste, fue, fuimos, fuisteis, fueron։',
  },
  {
    id: 10,
    part: 1,
    partTitleEs: 'Parte 1 — Nivel A1–A2 (1–10)',
    partTitleHy: 'Մաս 1 — Մակարդակ A1–A2 (1–10)',
    levelLabel: 'A1',
    promptEs: '¿Qué dices cuando no entiendes lo que alguien ha dicho?',
    promptHy: 'Ի՞նչ ես ասում, երբ չես հասկացել ինչ-որ մեկի ասածը։',
    options: [
      {
        key: 'A',
        es: 'Estoy de acuerdo.',
        hy: 'Համաձայն եմ։',
        wrongReasonHy:
          'Եթե չես հասկացել ասվածը, չես կարող ասել «համաձայն եմ»։',
      },
      {
        key: 'B',
        es: '¿Puedes repetirlo, por favor?',
        hy: 'Կարո՞ղ ես կրկնել, խնդրում եմ։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Ya lo sabía.',
        hy: 'Ես արդեն գիտեի։',
        wrongReasonHy:
          '«Ya lo sabía» նշանակում է «ես արդեն գիտեի», ինչը հակասում է չհասկանալուն։',
      },
      {
        key: 'D',
        es: 'No importa.',
        hy: 'Կարևոր չէ։',
        wrongReasonHy:
          '«No importa» նշանակում է «կարևոր չէ / հոգ չէ» և չի օգնում պարզել չհասկացած միտքը։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Երբ չես լսել կամ չես հասկացել զրուցակցի խոսքը, ամենաքաղաքավարի և բնական հարցն է՝ «¿Puedes repetirlo, por favor?» (Կարո՞ղ ես կրկնել, խնդրում եմ)։',
  },

  // Parte 2 — Nivel A2–B1 (11–20)
  {
    id: 11,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'A2–B1',
    promptEs: 'Completa: «Cuando era pequeño, ___ todos los veranos en casa de mis abuelos».',
    promptHy: 'Երբ փոքր էի, ամեն ամառ անցկացնում էի տատիկիս ու պապիկիս տանը։',
    options: [
      {
        key: 'A',
        es: 'pasé',
        hy: 'անցկացրի',
        wrongReasonHy:
          '«Pasé»-ն (Indefinido) ցույց է տալիս մեկ անգամ տեղի ունեցած գործողություն, բայց «todos los veranos» (ամեն ամառ) նշանակում է մանկության կրկնվող սովորություն։',
      },
      {
        key: 'B',
        es: 'pasaré',
        hy: 'կանցկացնեմ',
        wrongReasonHy:
          '«Pasaré»-ն ապառնի է, մինչդեռ նախադասությունը մանկության մասին է («Cuando era pequeño»)։',
      },
      {
        key: 'C',
        es: 'pasaba',
        hy: 'անցկացնում էի',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'he pasado',
        hy: 'անցկացրել եմ',
        wrongReasonHy:
          '«He pasado»-ն Pretérito Perfecto է (կապ ունի ներկայի հետ) և չի կիրառվում մանկության ավարտված սովորությունների համար։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Cuando era pequeño, pasaba todos los veranos en casa de mis abuelos.',
    exampleHy: 'Երբ փոքր էի, ամեն ամառ անցկացնում էի տատիկիս ու պապիկիս տանը։',
    whyCorrectHy:
      'Անցյալում կանոնավոր կերպով կրկնվող գործողությունները («todos los veranos» — ամեն ամառ, երբ փոքր էի) արտահայտվում են Pretérito Imperfecto-ով՝ «pasaba»։',
    grammarNoteHy: 'Անցյալի սովորություն (cuando era pequeño, todos los veranos) → Imperfecto։',
  },
  {
    id: 12,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'A2–B1',
    promptEs: 'Un amigo te dice: «Se me ha olvidado la cartera». ¿Qué significa?',
    promptHy: 'Ընկերդ ասում է․ «Se me ha olvidado la cartera»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Ես մոռացել եմ դրամապանակս։',
        hy: 'Ես մոռացել եմ դրամապանակս։',
        isArmenianOnly: true,
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Ես կորցրել եմ աշխատանքս։',
        hy: 'Ես կորցրել եմ աշխատանքս։',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Կորցրել եմ աշխատանքս» նշանակում է «He perdido mi trabajo»։ «La cartera»-ն դրամապանակն է։',
      },
      {
        key: 'C',
        es: 'Ես գնել եմ դրամապանակ։',
        hy: 'Ես գնել եմ դրամապանակ։',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Գնել եմ» նշանակում է «He comprado», իսկ «olvidar» նշանակում է մոռանալ։',
      },
      {
        key: 'D',
        es: 'Ես գտել եմ դրամապանակս։',
        hy: 'Ես գտել եմ դրամապանակս։',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Գտել եմ» նշանակում է «He encontrado», ոչ թե «se me ha olvidado»։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«Se me ha olvidado + գոյական» իսպաներեն կառույցը ցույց է տալիս ակամա մոռանալը («ես մոռացել եմ»), իսկ «la cartera» նշանակում է դրամապանակ։',
    grammarNoteHy: 'Se + անուղղակի խնդիր (me/te/le) + olvidar = պատահաբար մոռանալ։',
  },
  {
    id: 13,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'A2–B1',
    promptEs: 'Completa: «Si mañana hace buen tiempo, ___ a la playa».',
    promptHy: 'Եթե վաղը լավ եղանակ լինի, կգնանք լողափ։',
    options: [
      {
        key: 'A',
        es: 'iríamos',
        hy: 'կգնայինք',
        wrongReasonHy:
          '«Iríamos»-ը Condicional է և օգտագործվում է 2-րդ տիպի պայմանականում («Si hiciera buen tiempo»), ոչ թե «si hace»-ի հետ։',
      },
      {
        key: 'B',
        es: 'fuimos',
        hy: 'գնացինք',
        wrongReasonHy:
          '«Fuimos»-ը անցյալ ժամանակ է, իսկ նախադասությունը վերաբերում է վաղվան («mañana»)։',
      },
      {
        key: 'C',
        es: 'íbamos',
        hy: 'գնում էինք',
        wrongReasonHy:
          '«Íbamos»-ը անցյալ անկատար է, որը չի համապատասխանում ապագա պայմանին։',
      },
      {
        key: 'D',
        es: 'iremos',
        hy: 'կգնանք',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Si mañana hace buen tiempo, iremos a la playa.',
    exampleHy: 'Եթե վաղը լավ եղանակ լինի, կգնանք լողափ։',
    whyCorrectHy:
      'Իրական հնարավոր պայմանի դեպքում (1-ին տիպ) «Si + Presente de Indicativo (hace)» մասին հաջորդում է Futuro Simple՝ «iremos» (կգնանք)։',
    grammarNoteHy: 'Si + Presente (hace) → Futuro Simple (iremos)։',
  },
  {
    id: 14,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'A2–B1',
    promptEs: 'En un restaurante pides un plato, pero te traen otro. ¿Qué dices?',
    promptHy: 'Ռեստորանում մի ուտեստ ես պատվիրել, բայց ուրիշն են բերել։ Ի՞նչ ես ասում։',
    options: [
      {
        key: 'A',
        es: 'No quiero pagar nada.',
        hy: 'Ես ոչինչ չեմ ուզում վճարել։',
        wrongReasonHy:
          'Սա կոնֆլիկտային և կտրուկ արձագանք է՝ առանց սխալը քաղաքավարի բացատրելու։',
      },
      {
        key: 'B',
        es: 'Disculpe, creo que ha habido un error con mi pedido.',
        hy: 'Կներեք, կարծում եմ՝ իմ պատվերի հետ կապված սխալ է եղել։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Siempre hacéis todo mal.',
        hy: 'Դուք միշտ ամեն ինչ սխալ եք անում։',
        wrongReasonHy:
          'Ընդհանրացված մեղադրանքը («միշտ ամեն ինչ սխալ եք անում») անհարգալից է։',
      },
      {
        key: 'D',
        es: 'Me voy ahora mismo.',
        hy: 'Ես հենց հիմա գնում եմ։',
        wrongReasonHy:
          'Խնդիրը պարզաբանելու փոխարեն միանգամից հեռանալը չի լուծում իրավիճակը։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Քաղաքավարի և հստակ դիմելու ձևն է՝ սկսել «Disculpe» (Կներեք) բառով և հանգիստ նշել, որ պատվերի հետ սխալ է տեղի ունեցել («ha habido un error con mi pedido»)։',
  },
  {
    id: 15,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'A2–B1',
    promptEs: 'Completa: «Todavía no ___ los deberes».',
    promptHy: 'Ես դեռ չեմ ավարտել տնային առաջադրանքները։',
    options: [
      {
        key: 'A',
        es: 'terminaba',
        hy: 'ավարտում էի',
        wrongReasonHy:
          '«Terminaba»-ն անցյալ անկատար է, իսկ «todavía no» (դեռ ոչ) կապվում է ներկա արդյունքի հետ։',
      },
      {
        key: 'B',
        es: 'terminaré',
        hy: 'կավարտեմ',
        wrongReasonHy:
          '«Todavía no terminaré» իմաստով չի համապատասխանում «դեռ չեմ ավարտել» արտահայտությանը։',
      },
      {
        key: 'C',
        es: 'he terminado',
        hy: 'ավարտել եմ',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'terminé',
        hy: 'ավարտեցի',
        wrongReasonHy:
          'Իսպանական ստանդարտ քերականության մեջ «todavía no» / «ya» ցուցիչների հետ՝ ներկային կապված արդյունքի համար օգտագործվում է Pretérito Perfecto («he terminado»)։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Todavía no he terminado los deberes.',
    exampleHy: 'Ես դեռ չեմ ավարտել տնային առաջադրանքները։',
    whyCorrectHy:
      '«Todavía no» (դեռ ոչ) բառակապակցությունը ցույց է տալիս ներկա պահին դեռևս չավարտված գործողություն, որի համար կիրառվում է Pretérito Perfecto Compuesto՝ «he terminado»։',
    grammarNoteHy: 'Todavía no / ya / nunca → Pretérito Perfecto (haber + participio)։',
  },
  {
    id: 16,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'B1',
    promptEs: '¿Qué significa «Me llevo bien con mis compañeros»?',
    promptHy: 'Ի՞նչ է նշանակում այս արտահայտությունը։',
    options: [
      {
        key: 'A',
        es: 'Ես լավ հարաբերություններ ունեմ գործընկերներիս հետ։',
        hy: 'Ես լավ հարաբերություններ ունեմ գործընկերներիս հետ։',
        isArmenianOnly: true,
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Ես աշխատում եմ գործընկերներիս փոխարեն։',
        hy: 'Ես աշխատում եմ գործընկերներիս փոխարեն։',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Llevarse bien» չի նշանակում ուրիշի փոխարեն աշխատել («trabajar por»)։',
      },
      {
        key: 'C',
        es: 'Ես միշտ վիճում եմ գործընկերներիս հետ։',
        hy: 'Ես միշտ վիճում եմ գործընկերներիս հետ։',
        isArmenianOnly: true,
        wrongReasonHy:
          'Վիճելը կամ վատ հարաբերություններ ունենալը կլինի «llevarse mal» կամ «discutir», ոչ թե «llevarse bien»։',
      },
      {
        key: 'D',
        es: 'Ես գործընկերներիս հետ ճանապարհորդում եմ։',
        hy: 'Ես գործընկերներիս հետ ճանապարհորդում եմ։',
        isArmenianOnly: true,
        wrongReasonHy:
          'Ճանապարհորդելը «viajar» է, մինչդեռ «llevarse bien»-ը վերաբերում է մարդկային հարաբերություններին։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«Llevarse bien con alguien» դարձվածաբանական բայը նշանակում է «լավ հարաբերություններ ունենալ / համերաշխ լինել ինչ-որ մեկի հետ»։',
  },
  {
    id: 17,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'B1',
    promptEs: 'Completa: «Llevo tres años ___ español».',
    promptHy: 'Արդեն երեք տարի է՝ իսպաներեն եմ սովորում։',
    options: [
      {
        key: 'A',
        es: 'estudiar',
        hy: 'սովորել',
        wrongReasonHy:
          '«Llevar + ժամանակահատված» կառույցից հետո ինֆինիտիվ («estudiar») չի դրվում․ անհրաժեշտ է դերբայ (Gerundio)։',
      },
      {
        key: 'B',
        es: 'estudié',
        hy: 'սովորեցի',
        wrongReasonHy:
          'Խոնարհված անցյալ բայ («estudié») «llevo tres años»-ից հետո չի դրվում։',
      },
      {
        key: 'C',
        es: 'estudiado',
        hy: 'սովորած',
        wrongReasonHy:
          '«Estudiado» (Participio) օգտագործվում է «tener» կամ «haber» բայերի հետ, կամ «llevo + մաս + առարկա» կառույցում (օր.՝ llevo tres páginas leídas), ոչ թե շարունակվող գործողության տևողության համար։',
      },
      {
        key: 'D',
        es: 'estudiando',
        hy: 'սովորելով / սովորում',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Llevo tres años estudiando español.',
    exampleHy: 'Արդեն երեք տարի է՝ իսպաներեն եմ սովորում։',
    whyCorrectHy:
      '«Llevar + ժամանակահատված + Gerundio (-ando / -iendo)» իսպաներենի շատ կարևոր կառույց է, որը ցույց է տալիս, թե որքան ժամանակ է գործողությունը շարունակվում մինչև հիմա։',
    grammarNoteHy: 'Llevar + [տևողություն] + Gerundio = «արդեն … ժամանակ է՝ անում եմ»։',
  },
  {
    id: 18,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'B1',
    promptEs:
      'Tu jefe te pregunta: «¿Has terminado el informe?». Todavía estás trabajando en él. ¿Qué respondes?',
    promptHy:
      'Ղեկավարդ հարցնում է․ «Ավարտե՞լ ես հաշվետվությունը»։ Դու դեռ աշխատում ես դրա վրա։ Ի՞նչ ես պատասխանում։',
    options: [
      {
        key: 'A',
        es: 'Sí, lo terminé ayer.',
        hy: 'Այո, երեկ ավարտեցի։',
        wrongReasonHy:
          'Իրականությանը չի համապատասխանում, քանի որ պայմանի համաձայն դու դեռ աշխատում ես հաշվետվության վրա։',
      },
      {
        key: 'B',
        es: 'Todavía no, pero estoy a punto de terminarlo.',
        hy: 'Դեռ ոչ, բայց շուտով կավարտեմ։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'No sé qué es un informe.',
        hy: 'Չգիտեմ՝ ինչ է հաշվետվությունը։',
        wrongReasonHy:
          'Իմաստով անհամապատասխան պատասխան է, քանի որ դու արդեն աշխատում ես հաշվետվության վրա։',
      },
      {
        key: 'D',
        es: 'Nunca lo haré.',
        hy: 'Ես դա երբեք չեմ անի։',
        wrongReasonHy:
          'Կոպիտ և ղեկավարին ոչ հարիր պատասխան է։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Todavía no, pero estoy a punto de terminarlo» նշանակում է «Դեռ ոչ, բայց ուր որ է կավարտեմ» («estar a punto de + ինֆինիտիվ» = պատրաստ լինել / քիչ մնալ ավարտելուն)։',
  },
  {
    id: 19,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'A2–B1',
    promptEs: 'Completa: «Antes de salir de casa, ___ las ventanas».',
    promptHy: 'Տնից դուրս գալուց առաջ փակեցի պատուհանները։',
    options: [
      {
        key: 'A',
        es: 'cerraré',
        hy: 'կփակեմ',
        wrongReasonHy:
          '«Cerrarէ»-ն ապառնի է, մինչդեռ հայերեն նախադասությունը անցյալում է՝ «փակեցի»։',
      },
      {
        key: 'B',
        es: 'cerraba',
        hy: 'փակում էի',
        wrongReasonHy:
          '«Cerraba»-ն կրկնվող/անավարտ գործողություն է (փակում էի), ոչ թե մեկ անգամ արված ու ավարտված գործողություն (փակեցի)։',
      },
      {
        key: 'C',
        es: 'cerré',
        hy: 'փակեցի',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'cierre',
        hy: 'փակեմ (Subjuntivo)',
        wrongReasonHy:
          '«Cierre»-ն Subjuntivo կամ «usted» հրամայական է և չի համապատասխանում «ես փակեցի» իմաստին։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Antes de salir de casa, cerré las ventanas.',
    exampleHy: 'Տնից դուրս գալուց առաջ փակեցի պատուհանները։',
    whyCorrectHy:
      'Կոնկրետ ավարտված գործողության համար («փակեցի»՝ մեկանգամյա գործողություն դուրս գալուց առաջ) օգտագործվում է Pretérito Indefinido՝ «cerré»։',
  },
  {
    id: 20,
    part: 2,
    partTitleEs: 'Parte 2 — Nivel A2–B1 (11–20)',
    partTitleHy: 'Մաս 2 — Մակարդակ A2–B1 (11–20)',
    levelLabel: 'B1',
    promptEs: '¿Qué significa «No me apetece salir esta noche»?',
    promptHy: 'Ի՞նչ է նշանակում այս արտահայտությունը։',
    options: [
      {
        key: 'A',
        es: 'Այս երեկո դուրս գալու ցանկություն չունեմ։',
        hy: 'Այս երեկո դուրս գալու ցանկություն չունեմ։',
        isArmenianOnly: true,
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Այս երեկո չեմ կարողանում քնել։',
        hy: 'Այս երեկո չեմ կարողանում քնել։',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Քնել» նշանակում է «dormir», իսկ «salir»՝ դուրս գալ։',
      },
      {
        key: 'C',
        es: 'Այս երեկո անպայման դուրս եմ գալու։',
        hy: 'Այս երեկո անպայման դուրս եմ գալու։',
        isArmenianOnly: true,
        wrongReasonHy:
          'Նախադասությունը ժխտական է («No me apetece»), ուստի նշանակում է ցանկության բացակայություն։',
      },
      {
        key: 'D',
        es: 'Այս երեկո ընկերներիս եմ սպասում։',
        hy: 'Այս երեկո ընկերներիս եմ սպասում։',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Սպասել» նշանակում է «esperar»․ «apetecer» նշանակում է ցանկանալ / ախորժակ կամ տրամադրություն ունենալ։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«Apetecer» բայը (որը գործածվում է «gustar»-ի նման՝ me apetece) նշանակում է «ցանկություն / տրամադրություն ունենալ»։ «No me apetece salir» = դուրս գալու ցանկություն չունեմ։',
  },

  // Parte 3 — Nivel B1–B2 (21–30)
  {
    id: 21,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B1',
    promptEs: 'Completa: «Espero que mañana no ___».',
    promptHy: 'Հուսով եմ՝ վաղը անձրև չի գա։',
    options: [
      {
        key: 'A',
        es: 'llueve',
        hy: 'գալիս է (անձրև)',
        wrongReasonHy:
          '«Llueve»-ն Indicativo է, սակայն «espero que» (հուսով եմ, որ) արտահայտությունը պահանջում է Subjuntivo։',
      },
      {
        key: 'B',
        es: 'lloverá',
        hy: 'կգա (անձրև)',
        wrongReasonHy:
          'Թեև «mañana»-ն ապագա է, «esperar que» բայից հետո Futuro Simple («lloverá») չի դրվում․ դրվում է Presente de Subjuntivo։',
      },
      {
        key: 'C',
        es: 'llovió',
        hy: 'եկավ (անձրև)',
        wrongReasonHy:
          '«Llovió»-ն անցյալ ժամանակ է, իսկ նախադասությունը վաղվա մասին է։',
      },
      {
        key: 'D',
        es: 'llueva',
        hy: 'չգա (Subjuntivo)',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Espero que mañana no llueva.',
    exampleHy: 'Հուսով եմ՝ վաղը անձրև չի գա։',
    whyCorrectHy:
      'Ցանկություն և հույս արտահայտող «esperar que» կառույցից հետո միշտ օգտագործվում է Subjuntivo։ «Llover» (o → ue) բայի Presente de Subjuntivo ձևն է «llueva»։',
    grammarNoteHy: 'Espero que / Deseo que / Ojalá + Presente de Subjuntivo։',
  },
  {
    id: 22,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B1–B2',
    promptEs: 'Tu amiga dice: «Si tuviera más tiempo, aprendería italiano». ¿Qué quiere decir?',
    promptHy: 'Ընկերուհիդ ասում է․ «Եթե ավելի շատ ժամանակ ունենայի, իտալերեն կսովորեի»։ Ի՞նչ է նա արտահայտում։',
    options: [
      {
        key: 'A',
        es: 'Un hecho del pasado',
        hy: 'Անցյալի փաստ',
        wrongReasonHy:
          'Սա անցյալի փաստ չէ, այլ ներկայիս անիրական/ենթադրական ցանկություն (իրականում ժամանակ չունի)։',
      },
      {
        key: 'B',
        es: 'Una situación hipotética',
        hy: 'Ենթադրական իրավիճակ',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Una obligación',
        hy: 'Պարտավորություն',
        wrongReasonHy:
          'Որևէ պարտավորության («tener que» / «deber») մասին խոսք չկա։',
      },
      {
        key: 'D',
        es: 'Una acción habitual',
        hy: 'Սովորական գործողություն',
        wrongReasonHy:
          'Սովորական կրկնվող գործողությունները դրվում են Indicativo-ով, ոչ թե «si tuviera + aprendería» կառույցով։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Si + Imperfecto de Subjuntivo (tuviera) → Condicional Simple (aprendería)» 2-րդ տիպի պայմանական նախադասություն է, որն արտահայտում է ներկա կամ ապագա ենթադրական/անիրական իրավիճակ։',
  },
  {
    id: 23,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B1–B2',
    promptEs: 'Completa: «Es posible que Ana ya ___ de la oficina».',
    promptHy: 'Հնարավոր է՝ Անան արդեն դուրս եկած լինի գրասենյակից։',
    options: [
      {
        key: 'A',
        es: 'salió',
        hy: 'դուրս եկավ',
        wrongReasonHy:
          '«Salió»-ն Indicativo է, բայց «Es posible que» (հնարավոր է, որ) արտահայտում է հավանականություն և պահանջում է Subjuntivo։',
      },
      {
        key: 'B',
        es: 'sale',
        hy: 'դուրս է գալիս',
        wrongReasonHy:
          '«Sale»-ն սահմանական եղանակ է և արտահայտում է ներկա կանոնավոր փաստ, ոչ թե արդեն ավարտված հավանական գործողություն։',
      },
      {
        key: 'C',
        es: 'haya salido',
        hy: 'դուրս եկած լինի',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'saldrá',
        hy: 'դուրս կգա',
        wrongReasonHy:
          '«Saldrá»-ն ապառնի Indicativo է․ «ya» (արդեն) բառի և «es posible que»-ի հետ չի համապատասխանում։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Es posible que Ana ya haya salido de la oficina.',
    exampleHy: 'Հնարավոր է՝ Անան արդեն դուրս եկած լինի գրասենյակից։',
    whyCorrectHy:
      '«Es posible que» արտահայտում է կասկած/հավանականություն (պահանջում է Subjuntivo), իսկ «ya» (արդեն) բառը ցույց է տալիս նոր ավարտված գործողություն․ ուստի կիրառվում է Pretérito Perfecto de Subjuntivo՝ «haya salido»։',
    grammarNoteHy: 'Es posible/probable que + Pretérito Perfecto de Subjuntivo (haya + participio)։',
  },
  {
    id: 24,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B2',
    promptEs: 'Un compañero dice: «No doy abasto con tanto trabajo». ¿Qué significa?',
    promptHy: 'Գործընկերդ ասում է․ «Այսքան աշխատանքին չեմ հասցնում»։ Ի՞նչ է նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Tiene demasiado trabajo y no puede con todo.',
        hy: 'Նա այնքան շատ աշխատանք ունի, որ չի կարողանում ամեն ինչ հասցնել։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'No quiere trabajar nunca.',
        hy: 'Նա երբեք չի ցանկանում աշխատել։',
        wrongReasonHy:
          'Խնդիրը աշխատելու ցանկության բացակայությունը չէ, այլ աշխատանքի չափազանց մեծ ծավալը։',
      },
      {
        key: 'C',
        es: 'Ha terminado todo el trabajo.',
        hy: 'Նա ավարտել է ամբողջ աշխատանքը։',
        wrongReasonHy:
          'Հակառակը՝ նա չի կարողանում ավարտել ու հասցնել։',
      },
      {
        key: 'D',
        es: 'Está buscando un nuevo empleo.',
        hy: 'Նա նոր աշխատանք է փնտրում։',
        wrongReasonHy:
          'Նոր աշխատանք փնտրելու մասին որևէ ակնարկ չկա։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«No dar abasto» դարձվածքը նշանակում է չկարողանալ գլուխ հանել կամ հասցնել չափազանց մեծ ծավալի աշխատանքի կամ պահանջարկի պատճառով։',
  },
  {
    id: 25,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B2',
    promptEs: 'Completa: «Aunque ___ mucho dinero, no compraría ese coche».',
    promptHy: 'Նույնիսկ եթե շատ փող ունենայի, այդ մեքենան չէի գնի։',
    options: [
      {
        key: 'A',
        es: 'tengo',
        hy: 'ունեմ',
        wrongReasonHy:
          '«Tengo»-ն ներկա իրական փաստ է (ունեմ), որը չի համապատասխանում գլխավոր մասի «no compraría» (չէի գնի՝ հիպոթետիկ) ձևին։',
      },
      {
        key: 'B',
        es: 'tendré',
        hy: 'կունենամ',
        wrongReasonHy:
          '«Aunque»-ից հետո ապառնի Indicativo-ն չի համաձայնեցվում Condicional («compraría») հետ։',
      },
      {
        key: 'C',
        es: 'he tenido',
        hy: 'ունեցել եմ',
        wrongReasonHy:
          '«He tenido»-ն անցյալ արդյունք է և չի արտահայտում «եթե ունենայի» ենթադրական պայմանը։',
      },
      {
        key: 'D',
        es: 'tuviera',
        hy: 'ունենայի',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Aunque tuviera mucho dinero, no compraría ese coche.',
    exampleHy: 'Նույնիսկ եթե շատ փող ունենայի, այդ մեքենան չէի գնի։',
    whyCorrectHy:
      '«Aunque» շաղկապը հիպոթետիկ/անիրական զիջման դեպքում («նույնիսկ եթե ունենայի… չէի գնի») պահանջում է Imperfecto de Subjuntivo՝ «tuviera»։',
    grammarNoteHy: 'Aunque + Imperfecto de Subjuntivo → Condicional Simple։',
  },
  {
    id: 26,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B1–B2',
    promptEs: 'En una reunión alguien interrumpe constantemente. ¿Qué dices de forma educada?',
    promptHy: 'Ժողովի ժամանակ ինչ-որ մեկը անընդհատ ընդհատում է։ Ի՞նչ ես ասում քաղաքավարի ձևով։',
    options: [
      {
        key: 'A',
        es: 'Cállate de una vez.',
        hy: 'Վերջապես լռի՛ր։',
        wrongReasonHy:
          'Սա կոպիտ և ագրեսիվ հրաման է, որն անընդունելի է գործնական ժողովում։',
      },
      {
        key: 'B',
        es: 'Disculpa, ¿te importaría dejarme terminar la idea?',
        hy: 'Կներես, դեմ չէի՞ր լինի, որ ավարտեմ միտքս։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Tú nunca escuchas.',
        hy: 'Դու երբեք չես լսում։',
        wrongReasonHy:
          'Անձնական մեղադրանքը («դու երբեք չես լսում») ստեղծում է լարվածություն։',
      },
      {
        key: 'D',
        es: 'No quiero hablar contigo.',
        hy: 'Չեմ ուզում քեզ հետ խոսել։',
        wrongReasonHy:
          'Երեխայական և ոչ պրոֆեսիոնալ արձագանք է։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«¿Te importaría + ինֆինիտիվ?» («Դեմ չէի՞ր լինի…») շատ նրբանկատ և քաղաքավարի խնդրանքի ձև է՝ խոսակցին կանգնեցնելու և միտքն ավարտելու համար։',
  },
  {
    id: 27,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B1–B2',
    promptEs: 'Completa: «Busco a alguien que ___ experiencia en programación».',
    promptHy: 'Փնտրում եմ մեկին, ով ծրագրավորման փորձ ունի։',
    options: [
      {
        key: 'A',
        es: 'tiene',
        hy: 'ունի (կոնկրետ հայտնի անձ)',
        wrongReasonHy:
          '«Tiene» (Indicativo) կօգտագործվեր միայն այն դեպքում, երբ դու արդեն ճանաչում ես այդ կոնկրետ մարդուն։ Այստեղ փնտրվում է դեռևս անհայտ մեկը։',
      },
      {
        key: 'B',
        es: 'tendrá',
        hy: 'կունենա',
        wrongReasonHy:
          'Ապառնի ժամանակն այստեղ քերականորեն սխալ է․ փնտրվող հատկանիշը տրվում է Subjuntivo-ով։',
      },
      {
        key: 'C',
        es: 'tenga',
        hy: 'ունենա (Subjuntivo)',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'tuvo',
        hy: 'ունեցավ',
        wrongReasonHy:
          '«Tuvo»-ն անցյալ կատարյալ է և չի համապատասխանում փորձ ունեցող թեկնածու փնտրելուն։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Busco a alguien que tenga experiencia en programación.',
    exampleHy: 'Փնտրում եմ մեկին, ով ծրագրավորման փորձ ունի։',
    whyCorrectHy:
      'Երբ որոնում ենք դեռևս անհայտ կամ ենթադրյալ մարդու/առարկայի («Busco a alguien que...» — չգիտենք՝ կա՞, թե՞ ով է), հարաբերական երկրորդական նախադասության մեջ դրվում է Subjuntivo՝ «tenga»։',
    grammarNoteHy: 'Անհայտ նախորդող բառ (alguien que, un piso que) → Subjuntivo։',
  },
  {
    id: 28,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B1–B2',
    promptEs: '¿Qué significa «No tiene nada que ver con lo que estamos hablando»?',
    promptHy: 'Ի՞նչ է նշանակում այս արտահայտությունը։',
    options: [
      {
        key: 'A',
        es: 'Դա ոչ մի կապ չունի այն բանի հետ, ինչի մասին խոսում ենք։',
        hy: 'Դա ոչ մի կապ չունի այն բանի հետ, ինչի մասին խոսում ենք։',
        isArmenianOnly: true,
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Նա չի տեսնում, թե ինչ ենք անում։',
        hy: 'Նա չի տեսնում, թե ինչ ենք անում։',
        isArmenianOnly: true,
        wrongReasonHy:
          '«Tener que ver con» բառացի «տեսնել» չի նշանակում․ դա կայուն դարձվածք է և նշանակում է «կապ ունենալ ինչ-որ բանի հետ»։',
      },
      {
        key: 'C',
        es: 'Նա չի ցանկանում մեզ հետ խոսել։',
        hy: 'Նա չի ցանկանում մեզ հետ խոսել։',
        isArmenianOnly: true,
        wrongReasonHy:
          'Խոսել չցանկանալու մասին ոչինչ չկա․ «lo que estamos hablando» նշանակում է «այն, ինչի մասին խոսում ենք»։',
      },
      {
        key: 'D',
        es: 'Մենք այլևս չենք խոսելու այդ մասին։',
        hy: 'Մենք այլևս չենք խոսելու այդ մասին։',
        isArmenianOnly: true,
        wrongReasonHy:
          'Ապառնի խոստման կամ արգելքի մասին խոսք չկա։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«No tener nada que ver con...» շատ գործածական դարձվածք է, որը նշանակում է «ոչ մի կապ չունենալ …-ի հետ»։',
  },
  {
    id: 29,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B2',
    promptEs: 'Completa: «Me sorprendió que nadie me ___ la verdad».',
    promptHy: 'Ինձ զարմացրեց, որ ոչ ոք ինձ ճշմարտությունը չէր ասել։',
    options: [
      {
        key: 'A',
        es: 'dice',
        hy: 'ասում է',
        wrongReasonHy:
          '«Dice»-ն ներկա Indicativo է, որը խախտում է թե՛ Subjuntivo-ի, թե՛ անցյալ ժամանակների համաձայնեցման կանոնները։',
      },
      {
        key: 'B',
        es: 'dirá',
        hy: 'կասի',
        wrongReasonHy:
          '«Dirá»-ն ապառնի Indicativo է, որը չի համապատասխանում անցյալում տեղի ունեցած զարմանքին («Me sorprendió»)։',
      },
      {
        key: 'C',
        es: 'ha dicho',
        hy: 'ասել է',
        wrongReasonHy:
          '«Ha dicho»-ն Indicativo է․ զգացմունք արտահայտող «sorprender que» բայը պահանջում է Subjuntivo։',
      },
      {
        key: 'D',
        es: 'hubiera dicho',
        hy: 'ասած լիներ / չէր ասել',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Me sorprendió que nadie me hubiera dicho la verdad.',
    exampleHy: 'Ինձ զարմացրեց, որ ոչ ոք ինձ ճշմարտությունը չէր ասել։',
    whyCorrectHy:
      'Զգացմունք արտահայտող բայից («Me sorprendió que» — անցյալ) հետո՝ դրանից էլ ավելի վաղ կատարված (կամ չկատարված) գործողության համար դրվում է Pluscuamperfecto de Subjuntivo՝ «hubiera dicho»։',
    grammarNoteHy: 'Անցյալ զգացմունք (sorprendió) + ավելի վաղ գործողություն → Pluscuamperfecto de Subjuntivo։',
  },
  {
    id: 30,
    part: 3,
    partTitleEs: 'Parte 3 — Nivel B1–B2 (21–30)',
    partTitleHy: 'Մաս 3 — Մակարդակ B1–B2 (21–30)',
    levelLabel: 'B1–B2',
    promptEs: '«La reunión se ha pospuesto hasta nuevo aviso». ¿Qué significa?',
    promptHy: '«Ժողովը հետաձգվել է մինչև նոր ծանուցում»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'La reunión ya ha terminado.',
        hy: 'Ժողովն արդեն ավարտվել է։',
        wrongReasonHy:
          '«Posponer» նշանակում է հետաձգել (տեղափոխել ավելի ուշ ժամկետ), ոչ թե ավարտել։',
      },
      {
        key: 'B',
        es: 'La reunión se celebrará más adelante, pero todavía no hay una fecha confirmada.',
        hy: 'Ժողովը տեղի կունենա ավելի ուշ, սակայն դեռ հաստատված ամսաթիվ չկա։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'La reunión será mañana.',
        hy: 'Ժողովը վաղն է լինելու։',
        wrongReasonHy:
          '«Hasta nuevo aviso» նշանակում է, որ նոր ամսաթիվը դեռ հայտնի չէ, ուստի չի կարող հաստատված լինել վաղվա համար։',
      },
      {
        key: 'D',
        es: 'La reunión se celebró ayer.',
        hy: 'Ժողովը երեկ է տեղի ունեցել։',
        wrongReasonHy:
          'Եթե ժողովը հետաձգվել է, նշանակում է՝ այն դեռ տեղի չի ունեցել։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Posponer» նշանակում է հետաձգել, իսկ «hasta nuevo aviso»՝ մինչև նոր ծանուցում/տեղեկացում, այսինքն՝ կոնկրետ օրը դեռ որոշված չէ։',
  },

  // Parte 4 — Nivel B2–C1 (31–40)
  {
    id: 31,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'B2–C1',
    promptEs: 'Completa: «De no haber sido por tu ayuda, nunca lo ___».',
    promptHy: 'Եթե չլիներ քո օգնությունը, ես երբեք դրան չէի հասնի։',
    options: [
      {
        key: 'A',
        es: 'conseguiré',
        hy: 'կհասնեմ / կստանամ',
        wrongReasonHy:
          '«Conseguiré»-ն իրական ապառնի է, մինչդեռ «De no haber sido por...»-ը անցյալ անիրական պայման է։',
      },
      {
        key: 'B',
        es: 'conseguía',
        hy: 'հասնում էի',
        wrongReasonHy:
          '«Conseguía»-ն անցյալ անկատար Indicativo է և 3-րդ տիպի պայմանական կառույցի գլխավոր մասում չի կիրառվում։',
      },
      {
        key: 'C',
        es: 'habría conseguido',
        hy: 'հասած կլինեի / չէի հասնի',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'he conseguido',
        hy: 'հասել եմ',
        wrongReasonHy:
          '«He conseguido»-ն ներկա-անցյալ փաստ է, ոչ թե հիպոթետիկ պայմանի հետևանք։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'De no haber sido por tu ayuda, nunca lo habría conseguido.',
    exampleHy: 'Եթե չլիներ քո օգնությունը, ես երբեք դրան չէի հասնի։',
    whyCorrectHy:
      '«De no haber sido por...» (= Si no hubiera sido por...) անիրական անցյալ պայման է (3-րդ տիպ), ուստի գլխավոր նախադասությունը կառուցվում է Condicional Compuesto-ով՝ «habría conseguido»։',
    grammarNoteHy: 'De (no) haber + participio → Condicional Compuesto (habría + participio)։',
  },
  {
    id: 32,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'B2–C1',
    promptEs: '«La directora hizo caso omiso de nuestras sugerencias». ¿Qué significa?',
    promptHy: '«Տնօրենուհին անտեսեց մեր առաջարկությունները»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Ignoró nuestras sugerencias.',
        hy: 'Նա անտեսեց մեր առաջարկությունները։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Aceptó todas nuestras sugerencias.',
        hy: 'Նա ընդունեց մեր բոլոր առաջարկությունները։',
        wrongReasonHy:
          '«Hacer caso omiso» նշանակում է ուշադրություն չդարձնել / անտեսել, այլ ոչ թե ընդունել։',
      },
      {
        key: 'C',
        es: 'Nos pidió más sugerencias.',
        hy: 'Նա մեզնից ավելի շատ առաջարկություններ խնդրեց։',
        wrongReasonHy:
          'Նա լրացուցիչ առաջարկներ չի խնդրել, այլ ուղղակի անտեսել է ներկայացվածները։',
      },
      {
        key: 'D',
        es: 'Aplicó inmediatamente nuestras sugerencias.',
        hy: 'Նա անմիջապես կիրառեց մեր առաջարկությունները։',
        wrongReasonHy:
          'Սա հակառակ իմաստն է․ անտեսելը նշանակում է չկիրառել։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«Hacer caso omiso de algo» գրական և պաշտոնական արտահայտություն է, որը նշանակում է լիովին անտեսել, ուշադրություն չդարձնել («ignorar»)։',
  },
  {
    id: 33,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'B2–C1',
    promptEs: 'Completa: «Por mucho que me lo ___, no cambiaré de opinión».',
    promptHy: 'Ինչքան էլ դա ինձ բացատրես, կարծիքս չեմ փոխի։',
    options: [
      {
        key: 'A',
        es: 'explicaste',
        hy: 'բացատրեցիր',
        wrongReasonHy:
          '«Explicaste»-ն անցյալ է, իսկ նախադասության մեջ («no cambiaré» — չեմ փոխի) բացատրելը վերաբերում է ներկային/ապագային։',
      },
      {
        key: 'B',
        es: 'explicarás',
        hy: 'կբացատրես',
        wrongReasonHy:
          '«Por mucho que» զիջական կառույցում ապառնի Indicativo չի դրվում․ անհրաժեշտ է Subjuntivo։',
      },
      {
        key: 'C',
        es: 'explicas',
        hy: 'բացատրում ես',
        wrongReasonHy:
          '«Explicas»-ը Indicativo է, որը գործածվում է արդեն փաստացի կատարվող բանի համար, մինչդեռ ապագա հնարավոր զիջման («no cambiaré») համար պետք է Subjuntivo։',
      },
      {
        key: 'D',
        es: 'expliques',
        hy: 'բացատրես (Subjuntivo)',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Por mucho que me lo expliques, no cambiaré de opinión.',
    exampleHy: 'Ինչքան էլ դա ինձ բացատրես, կարծիքս չեմ փոխի։',
    whyCorrectHy:
      '«Por mucho que + Presente de Subjuntivo» («Ինչքան էլ որ…») կառույցն արտահայտում է ապագայում կամ ընդհանրապես անօգուտ պայման/զիջում․ «explicar» → «expliques» (c → qu ուղղագրական փոփոխությամբ)։',
    grammarNoteHy: 'Por mucho/más que + Subjuntivo → Futuro (չի փոխի արդյունքը)։',
  },
  {
    id: 34,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'B2–C1',
    promptEs: 'Un cliente presenta una reclamación. ¿Cuál es la respuesta más profesional?',
    promptHy: 'Հաճախորդը բողոք է ներկայացնում։ Ո՞րն է ամենապրոֆեսիոնալ պատասխանը։',
    options: [
      {
        key: 'A',
        es: 'Eso no es problema mío.',
        hy: 'Դա իմ խնդիրը չէ։',
        wrongReasonHy:
          'Հաճախորդի խնդրից հրաժարվելը կոպիտ է և վնասում է ընկերության հեղինակությանը։',
      },
      {
        key: 'B',
        es: 'Lamentamos las molestias ocasionadas y estudiaremos su caso para ofrecerle una solución.',
        hy: 'Ցավում ենք պատճառված անհարմարությունների համար և կուսումնասիրենք Ձեր դեպքը՝ լուծում առաջարկելու նպատակով։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Usted siempre se queja.',
        hy: 'Դուք միշտ բողոքում եք։',
        wrongReasonHy:
          'Հաճախորդին մեղադրելը բողոքելու մեջ անթույլատրելի է։',
      },
      {
        key: 'D',
        es: 'No podemos hacer absolutamente nada.',
        hy: 'Մենք բացարձակապես ոչինչ չենք կարող անել։',
        wrongReasonHy:
          'Մերժելն առանց դեպքը ուսումնասիրելու կամ այլընտրանք առաջարկելու ոչ պրոֆեսիոնալ է։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      'Բողոքների հետ աշխատելու ոսկե կանոնն է՝ ափսոսանք հայտնել («Lamentamos las molestias ocasionadas»), ցույց տալ հարգալից «usted» վերաբերմունք և խոստանալ ուսումնասիրել ու լուծում գտնել։',
  },
  {
    id: 35,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'C1',
    promptEs: 'Completa: «No habría aceptado la oferta a menos que me ___ mejores condiciones».',
    promptHy: 'Ես չէի ընդունի առաջարկը, եթե ինձ ավելի լավ պայմաններ չառաջարկեին։',
    options: [
      {
        key: 'A',
        es: 'ofrecen',
        hy: 'առաջարկում են',
        wrongReasonHy:
          '«Ofrecen»-ը ներկա Indicativo է, բայց «a menos que» (եթե չ…) շաղկապը ՄԻՇՏ պահանջում է Subjuntivo, և գլխավոր մասը անցյալ պայմանական է («habría aceptado»)։',
      },
      {
        key: 'B',
        es: 'ofrecerán',
        hy: 'կառաջարկեն',
        wrongReasonHy:
          '«A menos que»-ից հետո Indicativo (և ապառնի) երբեք չի օգտագործվում։',
      },
      {
        key: 'C',
        es: 'hubieran ofrecido',
        hy: 'առաջարկած լինեին / չառաջարկեին',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'han ofrecido',
        hy: 'առաջարկել են',
        wrongReasonHy:
          '«Han ofrecido»-ն Indicativo է և չի համաձայնեցվում անցյալ անիրական պայմանականի հետ։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'No habría aceptado la oferta a menos que me hubieran ofrecido mejores condiciones.',
    exampleHy: 'Ես չէի ընդունի առաջարկը, եթե ինձ ավելի լավ պայմաններ չառաջարկեին։',
    whyCorrectHy:
      '«A menos que» (եթե չ…) պայմանական շաղկապը միշտ պահանջում է Subjuntivo։ Քանի որ գլխավոր նախադասությունը անցյալ անիրական պայմանական է («No habría aceptado»), անհրաժեշտ է Pluscuamperfecto de Subjuntivo՝ «hubieran ofrecido»։',
    grammarNoteHy: 'A menos que + Subjuntivo (անցյալում → Pluscuamperfecto de Subjuntivo)։',
  },
  {
    id: 36,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'B2–C1',
    promptEs: '«El proyecto sigue adelante pese a los contratiempos». ¿Qué significa?',
    promptHy: '«Չնայած խոչընդոտներին՝ նախագիծը շարունակվում է»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'El proyecto continúa a pesar de las dificultades.',
        hy: 'Նախագիծը շարունակվում է՝ չնայած դժվարություններին։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'El proyecto se ha cancelado.',
        hy: 'Նախագիծը չեղարկվել է։',
        wrongReasonHy:
          '«Seguir adelante» նշանակում է առաջ շարժվել / շարունակվել, ոչ թե չեղարկվել։',
      },
      {
        key: 'C',
        es: 'El proyecto nunca empezó.',
        hy: 'Նախագիծը երբեք չի սկսվել։',
        wrongReasonHy:
          'Եթե նախագիծը շարունակվում է («sigue adelante»), նշանակում է՝ այն արդեն ընթացքի մեջ է։',
      },
      {
        key: 'D',
        es: 'El proyecto se ha terminado antes de tiempo.',
        hy: 'Նախագիծն ավարտվել է նախատեսվածից շուտ։',
        wrongReasonHy:
          'Նախագիծը դեռ չի ավարտվել, այն շարունակվում է։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      '«Seguir adelante» նշանակում է շարունակել («continuar»), «pese a» նշանակում է «չնայած» («a pesar de»), իսկ «contratiempos»՝ անհաջողություններ, խոչընդոտներ, դժվարություններ։',
  },
  {
    id: 37,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'C1',
    promptEs: 'Completa: «Por más convincente que ___ su explicación, sigo teniendo dudas».',
    promptHy: 'Որքան էլ նրա բացատրությունը համոզիչ լինի, ես դեռ կասկածներ ունեմ։',
    options: [
      {
        key: 'A',
        es: 'es',
        hy: 'է (Indicativo)',
        wrongReasonHy:
          '«Por más + ածական + que» («որքան էլ որ…») կառույցը իսպաներենում պահանջում է Subjuntivo, ոչ թե Indicativo («es»)։',
      },
      {
        key: 'B',
        es: 'será',
        hy: 'կլինի',
        wrongReasonHy:
          '«Por más ... que» կառույցից հետո ապառնի Indicativo չի դրվում։',
      },
      {
        key: 'C',
        es: 'fue',
        hy: 'եղավ',
        wrongReasonHy:
          '«Fue»-ն անցյալ Indicativo է․ նախադասության մեջ զիջական իմաստով անհրաժեշտ է Subjuntivo։',
      },
      {
        key: 'D',
        es: 'sea',
        hy: 'լինի (Subjuntivo)',
        wrongReasonHy: '',
      },
    ],
    correctKey: 'D',
    exampleEs: 'Por más convincente que sea su explicación, sigo teniendo dudas.',
    exampleHy: 'Որքան էլ նրա բացատրությունը համոզիչ լինի, ես դեռ կասկածներ ունեմ։',
    whyCorrectHy:
      '«Por más / Por muy + ածական + que + Subjuntivo» կառույցը C1 մակարդակի զիջական արտահայտություն է, որը միշտ պահանջում է Subjuntivo («ser» → «sea»)։',
    grammarNoteHy: 'Por más / Por muy + adjetivo + que + Subjuntivo։',
  },
  {
    id: 38,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'C1',
    promptEs: '«El portavoz se mostró reacio a facilitar más información». ¿Qué significa?',
    promptHy: '«Խոսնակը դժկամություն ցուցաբերեց լրացուցիչ տեղեկություններ տրամադրելու հարցում»։ Ի՞նչ է դա նշանակում։',
    options: [
      {
        key: 'A',
        es: 'Quería compartir todos los detalles.',
        hy: 'Նա ցանկանում էր կիսվել բոլոր մանրամասներով։',
        wrongReasonHy:
          '«Reacio» նշանակում է դժկամ, չկամեցող, այսինքն՝ հակառակը կիսվելու ցանկությանը։',
      },
      {
        key: 'B',
        es: 'No estaba dispuesto a dar más información fácilmente.',
        hy: 'Նա պատրաստ չէր հեշտությամբ լրացուցիչ տեղեկություններ տրամադրել։',
        wrongReasonHy: '',
      },
      {
        key: 'C',
        es: 'Había olvidado la información.',
        hy: 'Նա մոռացել էր տեղեկությունները։',
        wrongReasonHy:
          '«Mostrarse reacio» վերաբերում է ցանկության կամ պատրաստակամության բացակայությանը, ոչ թե մոռանալուն։',
      },
      {
        key: 'D',
        es: 'No sabía de qué estaban hablando.',
        hy: 'Նա չգիտեր՝ ինչի մասին էին խոսում։',
        wrongReasonHy:
          'Նա գիտեր, պարզապես չէր ուզում տրամադրել տեղեկությունը։',
      },
    ],
    correctKey: 'B',
    whyCorrectHy:
      '«Mostrarse reacio a hacer algo» նշանակում է դժկամ լինել, պատրաստ չլինել կամ դիմադրել ինչ-որ բան անելուն։ «Facilitar» պաշտոնական ոճում նշանակում է «տրամադրել»։',
  },
  {
    id: 39,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'B2–C1',
    promptEs: 'Completa: «Ojalá me lo ___ antes; habría podido ayudarte».',
    promptHy: 'Երանի ավելի շուտ ասած լինեիր ինձ. ես կկարողանայի օգնել քեզ։',
    options: [
      {
        key: 'A',
        es: 'dices',
        hy: 'ասում ես',
        wrongReasonHy:
          '«Dices»-ը ներկա Indicativo է․ «Ojalá» (երանի) բառից հետո ԵՐԲԵՔ Indicativo չի դրվում։',
      },
      {
        key: 'B',
        es: 'dirás',
        hy: 'կասես',
        wrongReasonHy:
          '«Dirás»-ը ապառնի Indicativo է, որը անհամատեղելի է «Ojalá»-ի և անցյալ ափսոսանքի («antes») հետ։',
      },
      {
        key: 'C',
        es: 'hubieras dicho',
        hy: 'ասած լինեիր',
        wrongReasonHy: '',
      },
      {
        key: 'D',
        es: 'hayas dicho',
        hy: 'ասած լինես',
        wrongReasonHy:
          '«Hayas dicho»-ն վերաբերում է ներկային կապված հավանականությանը, իսկ անցյալում չիրականացած անհնար ցանկության համար («habría podido» — կկարողանայի) պահանջվում է Pluscuamperfecto de Subjuntivo։',
      },
    ],
    correctKey: 'C',
    exampleEs: 'Ojalá me lo hubieras dicho antes; habría podido ayudarte.',
    exampleHy: 'Երանի ավելի շուտ ասած լինեիր ինձ. ես կկարողանայի օգնել քեզ։',
    whyCorrectHy:
      '«Ojalá + Pluscuamperfecto de Subjuntivo» («hubieras dicho») արտահայտում է անցյալի վերաբերյալ ափսոսանք՝ բան, որն արդեն հնարավոր չէ փոխել («Երանի ավելի շուտ ասած լինեիր»)։',
    grammarNoteHy: 'Ojalá + Pluscuamperfecto de Subjuntivo = անցյալի անիրական ցանկություն/ափսոսանք։',
  },
  {
    id: 40,
    part: 4,
    partTitleEs: 'Parte 4 — Nivel B2–C1 (31–40)',
    partTitleHy: 'Մաս 4 — Մակարդակ B2–C1 (31–40)',
    levelLabel: 'C1',
    promptEs: 'Quieres expresar desacuerdo en una reunión formal sin resultar ofensivo. ¿Cuál es la mejor opción?',
    promptHy:
      'Ցանկանում ես պաշտոնական ժողովում անհամաձայնություն հայտնել՝ առանց վիրավորական հնչելու։ Ո՞ր տարբերակն է լավագույնը։',
    options: [
      {
        key: 'A',
        es: 'Comprendo su punto de vista; sin embargo, considero que sería conveniente valorar otras alternativas.',
        hy: 'Հասկանում եմ Ձեր տեսակետը, սակայն կարծում եմ, որ նպատակահարմար կլինի դիտարկել նաև այլ տարբերակներ։',
        wrongReasonHy: '',
      },
      {
        key: 'B',
        es: 'Su idea no tiene ningún sentido.',
        hy: 'Ձեր գաղափարը ոչ մի իմաստ չունի։',
        wrongReasonHy:
          'Զրուցակցի գաղափարը անիմաստ հայտարարելը վիրավորական է և ոչ դիվանագիտական։',
      },
      {
        key: 'C',
        es: 'Está completamente equivocado.',
        hy: 'Դուք ամբողջովին սխալվում եք։',
        wrongReasonHy:
          'Չափազանց կտրուկ և դատողական է պաշտոնական քննարկման համար։',
      },
      {
        key: 'D',
        es: 'No pienso perder el tiempo con esto.',
        hy: 'Չեմ պատրաստվում սրա վրա ժամանակ վատնել։',
        wrongReasonHy:
          'Անհարգալից է և ընդհատում է մասնագիտական երկխոսությունը։',
      },
    ],
    correctKey: 'A',
    whyCorrectHy:
      'Պաշտոնական դիվանագիտական անհամաձայնությունը սկսվում է դիմացինի տեսակետը հարգելով («Comprendo su punto de vista»), շարունակվում է հակադրական կապով («sin embargo») և մեղմ առաջարկով («considero que sería conveniente valorar otras alternativas»)։',
  },
];
