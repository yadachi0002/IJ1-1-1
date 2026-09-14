// Intro
const checkOne1 = document.getElementById("check-1-1");
const checkOne2 = document.getElementById("check-1-2");
const feedbackOne1 = document.getElementById("feedback-1-1");
const feedbackOne2 = document.getElementById("feedback-1-2");

checkOne1.addEventListener("click", () => {
    feedbackOne1.textContent = "例）アキラを見たことがあります。";
    feedbackOne1.style.color = "green";
});
checkOne2.addEventListener("click", () => {
    feedbackOne2.textContent = "例）はい、アメリカで日本のアニメは人気があります。／いいえ、アメリカで日本のアニメは人気がありません。";
    feedbackOne2.style.color = "green";
});

// Part 1
const audioMap = {
    eega: new Audio("audio/eega.mp3"),
    kantoku: new Audio("audio/kantoku.mp3"),
    miyazaki: new Audio("audio/miyazaki.mp3"),
    hayao: new Audio("audio/hayao.mp3"),
    sentochihiro: new Audio("audio/sentochihiro.mp3"),
    kare: new Audio("audio/kare.mp3"),
    sakuhin: new Audio("audio/sakuhin.mp3"),
    naka: new Audio("audio/naka.mp3"),
    tokuni: new Audio("audio/tokuni.mp3"),
    ninki: new Audio("audio/ninki.mp3"),
    shyoo: new Audio("audio/shyoo.mp3"),
    totta: new Audio("audio/totta.mp3"),
    kyoomi: new Audio("audio/kyoomi.mp3"),
    hime: new Audio("audio/hime.mp3"),
    kankyoomondai: new Audio("audio/kankyoomondai.mp3"),
    otona: new Audio("audio/otona.mp3"),
    kangae: new Audio("audio/kangae.mp3"),
    ooi: new Audio("audio/ooi.mp3"),
    kami: new Audio("audio/kami.mp3"),
    shirokute: new Audio("audio/shirokute.mp3"),
    kuroi: new Audio("audio/kuroi.mp3"),
    egao: new Audio("audio/egao.mp3"),
    yasashisoo: new Audio("audio/yasashisoo.mp3"),
    tsukuru: new Audio("audio/tsukuru.mp3"),
    toki: new Audio("audio/toki.mp3"),
    kibishiku: new Audio("audio/kibishiku.mp3"),
    tatoeba: new Audio("audio/tatoeba.mp3"),
    jibun: new Audio("audio/jibun.mp3"),
    iu: new Audio("audio/iu.mp3"),
    toori: new Audio("audio/toori.mp3"),
    kakeru: new Audio("audio/kakeru.mp3"),
    nando: new Audio("audio/nando.mp3"),
    e: new Audio("audio/e.mp3"),
    naosaseru: new Audio("audio/naosaseru.mp3"),
    kaita: new Audio("audio/kaita.mp3"),
    niku: new Audio("audio/niku.mp3"),
    kaki: new Audio("audio/kaki.mp3"),
    okotta: new Audio("audio/okotta.mp3"),
    byoo: new Audio("audio/byoo.mp3"),
    ijyoo: new Audio("audio/ijyoo.mp3"),
    tsukutta: new Audio("audio/tsukutta.mp3"),
    tsukuri: new Audio("audio/tsukuri.mp3"),
    asa: new Audio("audio/asa.mp3"),
    ban: new Audio("audio/ban.mp3"),
    yasumanai: new Audio("audio/yasumanai.mp3"),
    shigoto: new Audio("audio/shigoto.mp3"),
    hirugohan: new Audio("audio/hirugohan.mp3"),
    bangohan: new Audio("audio/bangohan.mp3"),
    hun: new Audio("audio/hun.mp3"),
    shumi: new Audio("audio/shumi.mp3"),
    taisetsu: new Audio("audio/taisetsu.mp3"),
    jikan: new Audio("audio/jikan.mp3"),
    tsukawanai: new Audio("audio/tsukawanai.mp3"),
    wakai: new Audio("audio/wakai.mp3"),
    tsugi: new Audio("audio/tsugi.mp3"),
    hi: new Audio("audio/hi.mp3"),
    kibishii: new Audio("audio/kibishii.mp3"),
    utsukushi: new Audio("audio/utsukushi.mp3"),
    geejutsuteki: new Audio("audio/geejutsuteki.mp3"),
    tsukureru: new Audio("audio/tsukureru.mp3"),
    sekaijuu: new Audio("audio/sekaijuu.mp3"),
    aisare: new Audio("audio/aisare.mp3"),
    tsudukeru: new Audio("audio/tsudukeru.mp3"),
    shyookai: new Audio("audio/shyookai.mp3"),
    tokyo: new Audio("audio/tokyo.mp3"),
    umare: new Audio("audio/umare.mp3"),
    kodomo: new Audio("audio/kodomo.mp3"),
    tokui: new Audio("audio/tokui.mp3"),
    yomu: new Audio("audio/yomu.mp3"),
    kaku: new Audio("audio/kaku.mp3"),
    daisuki: new Audio("audio/daisuki.mp3"),
    kookoo: new Audio("audio/kookoo.mp3"),
    motsu: new Audio("audio/motsu.mp3"),
    sotsugyoogo: new Audio("audio/sotsugyoogo.mp3"),
    sakka: new Audio("audio/sakka.mp3"),
    kaisha: new Audio("audio/kaisha.mp3"),
    shuushoku: new Audio("audio/shuushoku.mp3"),
    go: new Audio("audio/go.mp3"),
    ooku: new Audio("audio/ooku.mp3"),
    happyoo: new Audio("audio/happyoo.mp3"),
    kokusai: new Audio("audio/kokusai.mp3"),
    eegasai: new Audio("audio/eegasai.mp3"),
    shuppin: new Audio("audio/shuppin.mp3"),
    hutarime: new Audio("audio/hutarime.mp3"),
    meeyoshyoo: new Audio("audio/meeyoshyoo.mp3"),
    jushyoo: new Audio("audio/jushyoo.mp3"),
};

const definitionMap = {
    eega: {
        reading: "えい・が",
        meaning: "movie; film"
    },
    kantoku: {
        reading: "かん・とく",
        meaning: "director"
    },
    miyazaki: {
        reading: "みや・ざき",
        meaning: "Japanese surname"
    },
    hayao: {
        reading: "はやお",
        meaning: "Japanese first name"
    },
    sentochihiro: {
        reading: "せん・と・ち・ひろ・の・かみ・かく・し",
        meaning: "Spirited Away"
    },
    kare: {
        reading: "かれ",
        meaning: "he; him"
    },
    sakuhin: {
        reading: "さく・ひん",
        meaning: "work, creation"
    },
    naka: {
        reading: "なか",
        meaning: "among",
    },
    tokuni: {
        reading: "とく・に",
        meaning: "especially",
    },
    ninki: {
        reading: "にん・き",
        meaning: "popularity",
    },
    shyoo: {
        reading: "しょう",
        meaning: "award",
    },
    totta: {
        reading: "と・った",
        meaning: "received; plain past tense of とる (to take; receive)",
    },
    kyoomi: {
        reading: "きょう・み",
        meaning: "interest",
    },
    hime: {
        reading: "ひめ",
        meaning: "princess",
    },
    kankyoomondai: {
        reading: "かん・きょう・もん・だい",
        meaning: "environmental issues",
    },
    otona: {
        reading: "おとな (irregular reading)",
        meaning: "adult",
    },
    kangae: {
        reading: "かんが・え",
        meaning: "to think; stem of the verb かんがえる; かんがえて is the te-form; かんがえさせられる is the causative-passive form 'to be made to think'",
    },
    ooi: {
        reading: "おお・い",
        meaning: "there are many of",
    },
    kami: {
        reading: "かみ",
        meaning: "hair",
    },
    shirokute: {
        reading: "しろ・くて",
        meaning: "white; しろくて is the te-form of the i-adjective しろい",
    },
    kuroi: {
        reading: "くろ・い",
        meaning: "black",
    },
    egao: {
        reading: "え・がお",
        meaning: "smiling",
    },
    yasashisoo: {
        reading: "やさ・しそう",
        meaning: "looks kind; adding そう to an i-adjective gives the meaning that someone or something looks a certain way",
    },
    tsukuru: {
        reading: "つくる",
        meaning: "to make",
    },
    toki: {
        reading: "とき",
        meaning: "when; the time of-",
    },
    kibishiku: {
        reading: "きび・しく",
        meaning: "strictly",
    },
    tatoeba: {
        reading: "たと・えば",
        meaning: "for example",
    },
    jibun: {
        reading: "じ・ぶん",
        meaning: "oneself",
    },
    iu: {
        reading: "い・う",
        meaning: "to say",
    },
    kakeru: {
        reading: "か・ける",
        meaning: "to be able to draw; the potential form of the verb かく",
    },
    nando: {
        reading: "なん・ど",
        meaning: "なんども means to do something many times",
    },
    e: {
        reading: "え",
        meaning: "painting; drawing",
    },
    naosaseru: {
        reading: "なお・させる",
        meaning: "to make someone fix something; causative form of the verb なおす(to fix)",
    },
    kaita: {
        reading: "か・いた",
        meaning: "drew/painted; plain past tense of the verb かく",
    },
    niku: {
        reading: "にく",
        meaning: "meat",
    },
    kaki: {
        reading: "か・き",
        meaning: "かきなさい is the command form of the verb かく",
    },
    okotta: {
        reading: "おこ・った",
        meaning: "got angry; plain past tense of the verb おこる",
    },
    byoo: {
        reading: "びょう",
        meaning: "second(s)",
    },
    ijyoo: {
        reading: "い・じょう",
        meaning: "more than-; １年いじょう means 'more than a year'",
    },
    tsukutta: {
        reading: "つく・った",
        meaning: "made; plain past tense of the verb つくる",
    },
    tsukuri: {
        reading: "つく・り",
        meaning: "stem of the verb つくる; つくりたくない means 'I don't want to make'",
    },
    asa: {
        reading: "あさ",
        meaning: "morning",
    },
    ban: {
        reading: "ばん",
        meaning: "night",
    },
    yasumanai: {
        reading: "やす・まない",
        meaning: "do not rest; plain negative form of やすむ; やすまないで means 'without resting'",
    },
    shigoto: {
        reading: "し・ごと",
        meaning: 'job; work',
    },
    hirugohan: {
        reading: "ひる・ご・はん",
        meaning: "lunch",
    },
    bangohan: {
        reading: "ばん・ご・はん",
        meaning: "dinner",
    },
    hun: {
        reading: "ふん",
        meaning: "minute(s)",
    },
    shumi: {
        reading: "しゅ・み",
        meaning: "hobby",
    },
    taisetsu: {
        reading: "たい・せつ",
        meaning: "precious; important",
    },
    jikan: {
        reading: "じ・かん",
        meaning: "time",
    },
    tsukawanai: {
        reading: "つか・わない",
        meaning: "do not use; plain negative form of つかう",
    },
    wakai: {
        reading: "わか・い",
        meaning: "young",
    },
    tsugi: {
        reading: "つぎ",
        meaning: "next",
    },
    hi: {
        reading: "ひ",
        meaning: "day",
    },
    kibishii: {
        reading: "きび・しい",
        meaning: "strict",
    },
    utsukushi: {
        reading: "うつく・し",
        meaning: "beautiful; うつくしくて is the te-form of うつくしい",
    },
    geejutsuteki: {
        reading: "げい・じゅつ・てき",
        meaning: "artistic",
    },
    tsukureru: {
        reading: "つく・れる",
        meaning: "can make; potential form of つくる",
    },
    sekaijuu: {
        reading: "せ・かい・じゅう",
        meaning: "world-wide",
    },
    aisare: {
        reading: "あい・され",
        meaning: "to be loved; あいされる is the passive form of あいする",
    },
    tsudukeru: {
        reading: "つづ・ける",
        meaning: "to continue; あいされつづける means 'to continue being loved'",
    },
    shyookai: {
        reading: "しょう・かい",
        meaning: "to introduce",
    },
    tokyo: {
        reading: "とう・きょう",
        meaning: "Tokyo",
    },
    umare: {
        reading: "う・まれ",
        meaning: "to be born",
    },
    kodomo: {
        reading: "こ・ども",
        meaning: "child",
    },
    tokui: {
        reading: "とく・い",
        meaning: "to be skilled at",
    },
    yomu: {
        reading: "よ・む",
        meaning: "to read",
    },
    kaku: {
        reading: "か・く",
        meaning: "to draw; to paint",
    },
    daisuki: {
        reading: "だい・す・き",
        meaning: "to love",
    },
    kookoo: {
        reading: "こう・こう",
        meaning: "high school",
    },
    motsu: {
        reading: "も・つ",
        meaning: "to hold/to carry; きょうみをもつ means 'to be interested in'",
    },
    sotsugyoogo: {
        reading: "そつ・ぎょう・ご",
        meaning: "after graduation",
    },
    sakka: {
        reading: "さっ・か",
        meaning: "writer",
    },
    kaisha: {
        reading: "かい・しゃ",
        meaning: "company",
    },
    shuushoku: {
        reading: "しゅう・しょく",
        meaning: "to get a job",
    },
    go: {
        reading: "ご",
        meaning: "after-",
    },
    ooku: {
        reading: "おお・く",
        meaning: "many; numerous",
    },
    happyoo: {
        reading: "はっ・ぴょう",
        meaning: "to present; はっぴょうして is the te-form of はっぴょうする",
    },
    kokusai: {
        reading: "こく・さい",
        meaning: "international",
    },
    eegasai: {
        reading: "えい・が・さい",
        meaning: "film festival; 映画 is movie/film and 祭 means festival which is read まつり on its own but read by its on-yomi さい when it is a part of a compound word ",
    },
    shuppin: {
        reading: "しゅっ・ぴん",
        meaning: "to exhibit one's work",
    },
    hutarime: {
        reading: "ふたり・め",
        meaning: "second person",
    },
    meeyoshyoo: {
        reading: "めい・よ・しょう",
        meaning: "honorary award",
    },
    jushyoo: {
        reading: "じゅ・しょう",
        meaning: "to receive an award",
    },
};

// Create popup once
const popup = document.createElement("div");
popup.id = "definition-popup";
document.body.appendChild(popup);

document.querySelectorAll(".audio").forEach(word => {
    word.style.cursor = "pointer";

    // Show definition on hover
    word.addEventListener("mouseenter", () => {
        const audioKey = word.dataset.audio;
        const entry = definitionMap[audioKey];

        if (entry) {
            popup.innerHTML = `
                <div class="popup-reading">${entry.reading}</div>
                <div class="popup-definition">${entry.meaning}</div>
            `;
        } else {
            popup.innerHTML = `
                <div class="popup-reading">―</div>
                <div class="popup-definition">No definition</div>
            `;
        }

        const rect = word.getBoundingClientRect();
        popup.style.left =
            (rect.left + rect.width / 2 + window.scrollX) + "px";
        popup.style.top =
            (rect.top - 55 + window.scrollY) + "px";

        popup.classList.add("show");
    });

    // Hide popup when mouse leaves
    word.addEventListener("mouseleave", () => {
        popup.classList.remove("show");
    });

    // Play audio on click
    word.addEventListener("click", () => {
        const audioKey = word.dataset.audio;

        if (audioMap[audioKey]) {
            audioMap[audioKey].currentTime = 0;
            audioMap[audioKey].play();
        }
    });
});

// Grammar popups
const grammarMap = {
    toieba: {
        title: "「Xといえば、Y」(When thinking of X, Y is the first that comes to mind)",
        translation: "<strong>When thinking of</strong> Japanese animation film directors, Hayao Miyazaki is the first that comes to mind."
    },
    nara: {
        title: "「Xなら、Y」(If it is the case that X/ If it is true that X, then Y)",
        translation: "<strong>If it is</strong> someone who is interested in Anime, they may have seen Princess Mononoke, My Neighbor Totoro etc."
    },
    toorini: {
        title: "「Xとおり（に）/Xどおり（に）」(Exactly the same way as X)",
        translation: "He makes the staff fix the drawing over and over again until they can draw it <strong>exactly the way</strong> he says."
    },
    rashii: {
        title: "「〜らしい」(Apparently~; I heard that~)",
        translation: "<strong>Apparently</strong> he has looked at a drawing of meat that the staff drew and got angry."
    },
    tameni1: {
        title: "「<Verb1>ために、<Verb2>」(In order to V1, V2)",
        translation: "So, <strong>in order to</strong> make a good film, he works from morning till night, barely resting."
    },
    kikkake: {
        title: "「Xがきっかけで」(Motivated by X; for the initial reason of X)",
        translation: "<strong>Motivated by</strong> having watched an animated film in high school, he becomes interested in Anime as well."
    },
    yooninaru: {
        title: "「Xようになる」(Come to do X; begin to do X)",
        translation: "Motivated by having watched an animated film in high school, he <strong>comes to be</strong> interested in Anime as well."
    },
    tameni2: {
        title: "「<Verb1>ために、<Verb2>」(In order to V1, V2)",
        translation: "After graduating from university, <strong>in order to</strong> become an Anime writer, he took a job at an Anime company."
    }
};

document.querySelectorAll(".grammar").forEach(item => {
    item.style.cursor = "pointer";

    item.addEventListener("mouseenter", () => {
        const key = item.dataset.grammar;
        const entry = grammarMap[key];

        if (entry) {
            popup.innerHTML = `
            <div class="popup-reading">${entry.title}</div>
            <div class="popup-translation">${entry.translation}</div>
            `;
        }

        const rect = item.getBoundingClientRect();

popup.classList.add("show");

const popupWidth = popup.offsetWidth;
const popupHeight = popup.offsetHeight;
const padding = 10;

let left = rect.left + rect.width / 2;
let top = rect.top - popupHeight - 5;

// Keep popup inside left/right edges
left = Math.max(
    popupWidth / 2 + padding,
    Math.min(left, window.innerWidth - popupWidth / 2 - padding)
);

// If too close to the top, show below the word instead
if (top < padding) {
    top = rect.bottom + 5;
}

popup.style.left = `${left + window.scrollX}px`;
popup.style.top = `${top + window.scrollY}px`;

    });

    item.addEventListener("mouseleave", () => {
        popup.classList.remove("show");
    });
});
