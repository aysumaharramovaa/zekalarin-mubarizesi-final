const categories = {
  RİYAZİYYAT: {
    questions: {
      "3 bal": 240,
      "4 bal": 240,
      "5 bal": 240,
      "6 bal": 240,
      "7 bal": 240,
    },
  },
  "TƏBİƏT ELMLƏRİ": {
    questions: {
      "3 bal": 120,
      "4 bal": 120,
      "5 bal": 120,
      "6 bal": 120,
      "7 bal": 120,
    },
  },
  "HUMANİTAR ELMLƏR": {
    questions: {
      "3 bal": 60,
      "4 bal": 60,
      "5 bal": 60,
      "6 bal": 60,
      "7 bal": 60,
    },
  },
  "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": {
    questions: {
      "3 bal": 90,
      "4 bal": 90,
      "5 bal": 90,
      "6 bal": 90,
      "7 bal": 90,
    },
  },
  "RƏQƏMSAL TEXNOLOGİYALAR": {
    questions: {
      "3 bal": 60,
      "4 bal": 60,
      "5 bal": 60,
      "6 bal": 60,
      "7 bal": 60,
    },
  },
};

const questionsData = {
  RİYAZİYYAT: {
    "3 bal": {
      sual: `Üç dostun — Araz, Babək və Cavidin müvafiq olaraq 12, 15 və 20  sikkəsi var (cəmi 47 sikkə). Onlar stolüstü bir oyun oynayırlar. Oyunun sadə bir qaydası var: Hər gedişdə ixtiyari iki dost öz sikkələrindən 1 dənəsini götürüb (cəmi 2 sikkə) üçüncü dosta verirlər. Oyunun məqsədi bütün 47 sikkəni yalnız bir dostda toplamaq və digər iki dostun əlində heç nə saxlamamaqdır. Buna nail olmaq üçün dostlar ən azı neçə gediş etməlidirlər?`,
      cavab: "15",
    },
    "4 bal": {
      sual: `Məşhur bir restoranın baş aşpazı böyük, tam dairəvi bir pizzanı kəsmək üçün xüsusi uzun bıçaqdan istifadə edir. O, pizzani kəsərkən bıçağı yalnız düz xətt boyunca hərəkət etdirir. Aşpaz pizzani tam olaraq 5 dəfə düz kəsməklə onu maksimum neçə fərqli hissəyə (hissələrin bərabər olması şərt deyil) bölə bilər?`,
      cavab: "16",
    },
    "5 bal": {
      foto: "Files/mach5 .png",
      sual: ` Şəkildə ucları bir-birinə birləşdirilmiş iki mavi və üç qırmızı kibrit çöpü göstərilib. Eyni rəngdə olan kibritlərin yanıb qurtarma vaxtları bərabərdir.
Yanan kibrit birləşmə nöqtəsinə çatdıqda toxunduğu digər kibritləri də yandırır.
Kibritləri K ucundan yandırdığımız andan 10,6 saniyə sonra A kibriti, 17,8 saniyə sonra isə B kibriti yanıb qurtarır. Buna əsasən, C kibriti neçə saniyədən sonra yanıb qurtaracaq?
`,
      cavab: "14",
    },
    "6 bal": {
      sual: `Çox gizli bir kibertəhlükəsizlik mərkəzində yeni server şəbəkəsi qurulur. Sistemin çökməməsi üçün iki çox sərt fiziki qayda təyin olunub:
1.	Hər bir server xüsusi kabellə tam olaraq 3 başqa serverə 
birbaşa bağlanmalıdır (nə az, nə çox).
2.	Məlumatın qapalı dövrədə (loop) ilişib qalmaması üçün heç bir halda 3 server öz aralarında "üçbucaq" yarada bilməz (Yəni, A serveri B-yə, B serveri C-yə, C də yenidən A-ya birbaşa bağlanıbsa, bu qadağandır). Sistem bu iki qaydanı pozmadan tam işlək vəziyyətə gətirilib. Bu şəbəkədə ola biləcək serverlərin (aparatların) 
sayı ən azı neçə ola bilər?
`,
      cavab: "6",
    },
    "7 bal": {
      sual: `Marsda tədqiqat aparan bir robot mərkəzi stansiyadan (0 nöqtəsindən) hərəkətə başlayır. O, analiz etməli olduğu xüsusi bir süxurun düz xətt üzrə tam olaraq 2026 metr irəlidə (koordinat: 2026) olduğunu aşkarlayır. Robotun hərəkət mühərriki fabrikin yazdığı xüsusi bir proqramla işləyir: 1-ci gedişdə o, mütləq şəkildə 1 metr, 2-ci gedişdə mütləq 2 metr, k-cı gedişdə isə k metr hərəkət etməlidir. Hər gediş zamanı robot yalnız irəli (+) və ya geriyə (-) doğru hərəkət edə bilər. Robotun hədəfi tam olaraq 2026 koordinatında dayanmaqdır. Buna nail olmaq üçün robot ən azı neçə gediş etməlidir?`,
      cavab: "64",
    },
  },
  "TƏBİƏT ELMLƏRİ": {
    "3 bal": {
      sual: `Velosiped sürən uşaq qəfil əyləci sıxdıqda irəliyə doğru hərəkət edir. Bunun səbəbi nədir? `,
      cavab:
        "Bu hadisə ətalətlə bağlıdır. Velosiped dayanmağa başlasa da, uşağın bədəni əvvəlki hərəkətini davam etdirmək istəyir və buna görə irəliyə yönəlir.",
    },
    "4 bal": {
      sual: `Qış günü bir otaqda metal qaşıq və taxta qaşıq uzun müddət eyni şəraitdə saxlanılır. Bir insan əvvəlcə metal qaşığa, sonra taxta qaşığa toxunduqda metal qaşığın daha soyuq olduğunu hiss edir. Halbuki onların temperaturu eynidir. İnsan niyə metal qaşığı daha soyuq hiss edir? `,
      cavab:
        "Bütün qaşıqların temperaturu eyni olsa da, metal istiliyi taxtadan daha yaxşı keçirir. İnsan əli metal qaşığa toxunduqda istilik əldən sürətlə metala keçir. Əl qısa müddətdə daha çox istilik itirdiyi üçün beyin bunu “daha soyuq” kimi hiss edir. ",
    },
    "5 bal": {
      sual: `İki eyni şamdan biri açıq havada, digəri isə şüşə qabın altında yandırılır. Bir müddət sonra şüşə qabın altındakı şam sönür. Nə üçün? `,
      cavab:
        "Yanma üçün oksigen lazımdır. Şüşə qabın altında oksigen tədricən azalır və karbon qazı artır. Oksigen çatmadığı üçün şam sönür.",
    },
    "6 bal": {
      sual: `3.	Bir şagird eyni kütləyə malik iki kağız parçasını eyni hündürlükdən aşağı buraxır. Kağızlardan biri tam açıq vəziyyətdədir, digəri isə kiçik top formasında bükülüb. Təcrübə əvvəlcə havada, sonra isə havası boşaldılmış xüsusi bir şüşə qabda təkrarlanır. Müşahidə olunur ki, açıq havada bükülmüş kağız daha tez yerə düşür, lakin vakuum şəraitində hər iki kağız eyni anda yerə çatır. Bu fərqin səbəbini izah edin. `,
      cavab:
        "Havada açıq vəziyyətdə olan kağızın səth sahəsi böyük olduğuna görə ona təsir edən hava müqaviməti daha çox olur. Bu müqavimət kağızın düşmə sürətini azaldır. Bükülmüş kağızın isə səthi kiçik olduğuna görə hava müqaviməti zəifləyir və o, daha tez yerə düşür. Vakuum mühitində hava olmadığı üçün hava müqaviməti yaranmır. Bu halda hər iki kağıza yalnız cazibə qüvvəsi təsir edir. Kütlələri eyni olduğuna görə onlar eyni sürətlənmə ilə hərəkət edir və yerə eyni anda çatırlar. ",
    },
    "7 bal": {
      sual: `5.	Bir şagird eyni həcmə malik iki cismi, dəmir və taxta kubu suya salır. Dəmir kub batır, taxta kub isə suyun üzündə qalır. Halbuki hər ikisinə eyni ölçüdə Arximed qüvvəsi təsir edir. Bu vəziyyəti nəzərə alaraq izah edin: niyə eyni həcmli cisimlərdən biri batır, digəri isə batmır? `,
      cavab:
        "Cismin batıb-batmaması onun çəkisi ilə Arximed qüvvəsinin müqayisəsindən asılıdır. Dəmirin sıxlığı sudan böyük olduğu üçün onun çəkisi Arximed qüvvəsindən çox olur və batır. Taxtanın sıxlığı isə sudan kiçikdir, ona görə Arximed qüvvəsi onun çəkisini tarazlayır və cisim suyun üzündə qalır",
    },
  },
  "MƏDƏNİYYƏT VƏ İNCƏSƏNƏT": {
    "3 bal": {
      sual: `1851-ci il siyahıyaalınmasına əsasən, bu şəhərdə cəmi 7 431 nəfər yaşayırdı. Lakin XIX əsrin ikinci yarısı və XX əsrin əvvəllərində sürətli sənaye inkişafı nəticəsində şəhər dünyanın ən sürətlə böyüyən şəhərlərindən birinə çevrildi. 1926-cı ildə burada yaşayanların sayı artıq 450 mindən çox idi. Söhbət hansı Azərbaycan şəhərindən gedir? `,
      cavab: "Bakı",
    },
    "4 bal": {
      sual: ` Azərbaycan xalqının çoxəsrlik tarixi boyu istər folklar nümunələrində istərsə də yazılı ədəbiyyatda filmlərimizdə haqsızlıq etmə və haqsızlığa məruz qalmamaq önəmli bir detal kimi işlənilmişdir. Üzeyir bəy Hacıbəyovun sonrada filmi çəkilən bu əsərində də əlavə rol ifaçısı dəfələrlə öz haqqını tələb edirdi. Söhbət hansı filmdə və hansı obrazdan gedir? `,
      cavab: "O olmasın bu olsun bir abbasını tələb edən hambal",
    },
    "5 bal": {
      sual: `“Qafqaz Səfəri”, “Üç muşketyor”, “Qraf Monte Kristo” kimi əsərlərin müəllifi olan bu məşhur fransız yazıçısı xatirələrində Azərbaycan dilinin əhəmiyyətini Avropada fransız dilinə bənzətmiş və bu dilin geniş coğrafiyada anlaşıldığını vurğulamışdır. Söhbət hansı yazıçıdan gedir?`,
      cavab: "Aleksandr Düma",
    },
    "6 bal": {
      sual: `Bu heykəlin açılışı zamanı Müzəffər Ali Baş komandan cənab prezident İlham Əliyevlə xalq aryisti Rasim Balayev arasında maraqlı dialoq keçmişdir."
-sən canlı ....dəsən də heykəl necə olub? 
özüm gəlib hər gün səhərdən axşama kimi burda dayanmağa hazır idim. Söhbət hansı heykəlin açılışından gedir. `,
      cavab: "Nəsimi ",
    },
    "7 bal": {
      sual: `Bunu bir rəssamlıq nümunəsi də qəbul etmək olar. Bəzi tədqiqaçlara görə burda rənglər bir biri tarazlayır hər hansı bir rəngin ifadə etdiyi mənanı digərlərindən daha çox mənimsəməyə başqa rənglər icazə vermir və orda təsvir olunan bütün rənglər bərabər ölçüdə təsvir olunub. Söhbət nədən gedir?`,
      cavab: "Azərbaycan bayrağı tarixi milli ənənələrə söykənərək müasirləşməyi tərənnüm etdirir.",
    },
  },
  "HUMANİTAR ELMLƏR": {
    "3 bal": {
      sual: `“Hər şey yaxşı olacaq” cümləsi ilə Azərbaycan xalqının qəlbinə əbədi yol tapan bu Azərbaycan Milli Qəhrəmanı kimdir və hansı tarixdə, harada və necə gözlərini əbədi yummuşdur?`,
      cavab:
        "Hökumə Əliyeva — 25 dekabr 2024-cü ildə Aktau şəhəri yaxınlığında baş verən təyyarə qəzasında həlak olmuşdur.",
    },
    "4 bal": {
      sual: `Vətənimizlə bağlı taleyüklü məsələləri əhatə etməsi baxımından “Gülüstan” poemasının müəllifi ciddi təqib və təzyiqlərə məruz qalmışdır. Bu poemanın müəllifi kimdir və poema neçənci ildə yazılmışdır? Ancaq tam cavablar qəbul olunur.`,
      cavab: "Bəxtiyar Vahabzadə — “Gülüstan” poeması 1959-cu il",
    },
    "5 bal": {
      sual: `Rus qoşunları tərəfindən ailəsinin 17 üzvü ilə birlikdə qətlə yetirilən bu Azərbaycan xanı eyni zamanda məşhur qadın şairələrdən birinin babası idi. Söhbət hansı tarixi şəxsiyyətdən gedir?`,
      cavab: " İbrahimxəlil xan",
    },
    "6 bal": {
      sual: `İctimai xadim və məşhur Azərbaycan şairinə həsr olunan əsərdə deyilir:
“Fransızların məşhur ədibi Aleksandr Düma bizə qonaq gələndə Azərbaycan dilinin musiqiliyinə heyran olduğunu söyləyirdi. Fəqət hamıdan qabaq biz öz dilimizin qiymətini bilməliyik, ağalar. Nə qədər ki Azərbaycan xalqı yaşayır, Azərbaycan dili də yaşayacaqdır. Mən Azərbaycan balalarının Homeri, Danteni, Şekspiri, Höteni Puşkini öz doğma ana dillərində oxuyacaqları günü görmək istəyirəm.”
Söhbət hansı əsərdən gedir və bu əsər kim tərəfindən qələmə alınaraq nə vaxt nəşr olunmuşdur?
`,
      cavab: "Xurşidbanu Natəvan əsəri. İlyas Əfəndiyev. 1985-ci il",
    },

    "7 bal": {
      sual: `1517-ci il — Martin Lüter (1483–1546), Alman rahibi və Vittenberq universitetinin professoru, katolik kilsəsinin indulgensiya (günahların bağışlanması haqqında qəbz) satışına qarşı çıxdı. Kilsə iddia edirdi ki, bu qəbzləri alan şəxs (və ya onun yaxınları) cəhənnəm əzabından xilas ola, günahları bağışlana və ya cənnətə daha tez gedə bilər. Bu, xüsusilə Roma Papası X Leon dövründə geniş yayılmışdı — pullar Müqəddəs Pyotr kilsəsinin tikintisinə gedirdi. Sual: Martin Lüter hansı mübarizə methodu ilə tarixə keçmişdir?`,
      cavab: "Kilsədən ucuz qiymətə cəhənnəm qəbzləri alaraq",
    },
  },
  "RƏQƏMSAL TEXNOLOGİYALAR": {
    "3 bal": {
      sual: `4 GB neçə MB-dir?`,
      cavab: "4096 MB",
    },
    "4 bal": {
      sual: `Windows əməliyyat sistemində faylın adı maksimum neçə simvol ola bilər?`,
      cavab: "255 simvol",
    },
    "5 bal": {
      sual: `Bitcoin-in əsaslandığı, mərkəzsizləşdirilmiş və dəyişdirilməsi mümkün olmayan verilənlər bazası texnologiyası necə adlanır?`,
      cavab: "Blokçeyn (Blockchain)",
    },
    "6 bal": {
      sual: `Elektron poçt vasitəsilə göndərilən, istifadəçini aldatmaq və şəxsi məlumatlarını oğurlamaq məqsədi daşıyan saxta mesajlar necə adlanır?`,
      cavab: "Fişinq (Phishing)",
    },
    "7 bal": {
      sual: `25 qızıldan biri saxtadır. Saxta olan digərlərindən yüngüldür. Tərəzi ilə bir dəfədə iki qrup qızılı müqayisə edə bilərsən. Ən az neçə dəfə tərəzidən istifadə edərək saxta qızılı tapmaq olar?`,
      cavab: "3 dəfə",
    },
  },
};
const categoryContainer = document.getElementById("categoryContainer");
const questionBox = document.getElementById("questionBox");
const questionTextDiv = document.getElementById("questionText");
const answerTextDiv = document.getElementById("answerText");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const closeBoxBtn = document.getElementById("closeBoxBtn");
const timerDisplay = document.getElementById("timer");
const questionImage = document.getElementById("questionImage");

let selectedButton = null;
let timerInterval = null;

const audioTicker1 = new Audio("Files/ticker1.mp3");
const audioTicker2 = new Audio("Files/ticker2.mp3");

function stopTimerSounds() {
  clearInterval(timerInterval);
  timerInterval = null;

  audioTicker1.pause();
  audioTicker2.pause();

  audioTicker1.currentTime = 0;
  audioTicker2.currentTime = 0;
}


Object.entries(categories).forEach(([title, { questions }]) => {
  const div = document.createElement("div");
  div.className = "category-column";
  div.innerHTML = `<h2 class="category-title">${title}</h2>`;

  Object.entries(questions).forEach(([label, time]) => {
    const btn = document.createElement("button");
    btn.className = "q-button";
    btn.innerText = label;

    btn.onclick = () => {
      if (btn.classList.contains("done")) return;

      selectedButton = btn;

      stopTimerSounds();

      startQuestion(title, label, time);
    };

    div.appendChild(btn);
  });

  categoryContainer.appendChild(div);
});

function startQuestion(cat, label, time) {
  const data = questionsData[cat]?.[label];
  if (!data) return alert("Sual tapılmadı: " + cat + " " + label);

  questionTextDiv.innerText = data.sual;
  answerTextDiv.innerText = `${data.cavab}`;

  if (data.sual.length > 200) {
    questionTextDiv.style.fontSize = "1.5rem";
  } else {
    questionTextDiv.style.fontSize = "";
  }

  if (data.foto) {
    questionImage.src = data.foto;
    questionImage.classList.remove("hidden");
  } else {
    questionImage.classList.add("hidden");
  }

  answerTextDiv.classList.add("hidden");
  showAnswerBtn.classList.remove("hidden");
  closeBoxBtn.classList.add("hidden");
  questionBox.classList.remove("hidden");

  timerDisplay.classList.remove("hidden");

  selectedButton.classList.add("active-q");

  runConfetti();
  timerDisplay.innerText = `${Math.floor(time / 60)}:00`;

  startTimer(time);
}

function revealAnswer() {
  stopTimerSounds(); 

  answerTextDiv.classList.remove("hidden");
  showAnswerBtn.classList.add("hidden");
  closeBoxBtn.classList.remove("hidden");
}

showAnswerBtn.onclick = revealAnswer;

closeBoxBtn.onclick = () => {
  questionBox.classList.add("hidden");
  timerDisplay.classList.add("hidden");

  stopTimerSounds(); 

  if (selectedButton) {
    selectedButton.style.visibility = "hidden";
    selectedButton.classList.add("done");
  }
};

function startTimer(duration) {
  stopTimerSounds(); 
  let time = duration;

  audioTicker1.currentTime = 0;
  audioTicker1.loop = true;
  audioTicker1.play().catch(() => {});

  timerInterval = setInterval(() => {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    timerDisplay.innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;

    if (time === 10) {
      audioTicker1.pause();
      audioTicker2.currentTime = 0;
      audioTicker2.play().catch(() => {});
    }

    if (time <= 0) {
      stopTimerSounds();

      timerDisplay.innerText = "0:00";

      showAnswerBtn.classList.add("highlight-btn");
      return;
    }

    time--;
  }, 1000);
}

function runConfetti() {
  new Audio("Files/music3.mp3").play().catch(() => {});
  if (typeof confetti === "function") {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
}