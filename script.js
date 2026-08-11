// Part 1
// play audio
const audioMap = {
    q1: new Audio("audio/L6_q1.mp3"),
    q2: new Audio("audio/L6_q2.mp3"),
    q3: new Audio("audio/L6_q3.mp3"),
    q4: new Audio("audio/L6_q4.mp3"),
    q5: new Audio("audio/L6_q5.mp3"),
    q6: new Audio("audio/L6_q6.mp3")
};
document.querySelectorAll(".question span").forEach(button => {
    button.style.cursor = "pointer";
    button.addEventListener("click", () => {
        const audioKey = button.dataset.audio;
        if(audioMap[audioKey]) {
            audioMap[audioKey].currentTime = 0;
            audioMap[audioKey].play();
        };
    });
});

// check answers
const choicesOne = document.querySelectorAll(".choice-q1");
const choicesTwo = document.querySelectorAll(".choice-q2");
const choicesThree = document.querySelectorAll(".choice-q3");
const choicesFour = document.querySelectorAll(".choice-q4");
const choicesFive = document.querySelectorAll(".choice-q5");
const choicesSix = document.querySelectorAll(".choice-q6");
const feedbackOne = document.getElementById("feedback-p1-1");
const feedbackTwo = document.getElementById("feedback-p1-2");
const feedbackThree = document.getElementById("feedback-p1-3");
const feedbackFour = document.getElementById("feedback-p1-4");
const feedbackFive = document.getElementById("feedback-p1-5");
const feedbackSix = document.getElementById("feedback-p1-6");
const clearOne = document.getElementById("clear-p1-1");
const clearTwo = document.getElementById("clear-p1-2");
const clearThree = document.getElementById("clear-p1-3");
const clearFour = document.getElementById("clear-p1-4");
const clearFive = document.getElementById("clear-p1-5");
const clearSix = document.getElementById("clear-p1-6");

// q1
choicesOne.forEach(button => {
    const correct = button.dataset.correct;
    button.addEventListener("click", () => {
        if(correct==="correct") {
        feedbackOne.textContent = "✅　正解（せいかい）！よじはん (4:30) です。";
        feedbackOne.style.color = "green";
    } else {
        feedbackOne.textContent = "❌　不正解（ふせいかい）。Try listening again.";
        feedbackOne.style.color = "red";
    };
    });
});

// clear feedback
clearOne.addEventListener("click", () => {
    feedbackOne.textContent = "";
});

// q2
choicesTwo.forEach(button => {
    const correct = button.dataset.correct;
    button.addEventListener("click", () => {
        if(correct==="correct") {
        feedbackTwo.textContent = "✅　正解（せいかい）！ごじにじゅうさんぷん (5:23) です。";
        feedbackTwo.style.color = "green";
    } else {
        feedbackTwo.textContent = "❌　不正解（ふせいかい）。Try listening again!";
        feedbackTwo.style.color = "red";
    };
    });
});

// clear feedback
clearTwo.addEventListener("click", () => {
    feedbackTwo.textContent = "";
});

// q3
choicesThree.forEach(button => {
    const correct = button.dataset.correct;
    button.addEventListener("click", () => {
        if(correct==="correct") {
        feedbackThree.textContent = "✅　正解（せいかい）！はちじごじゅっぷん (8:50) です。";
        feedbackThree.style.color = "green";
    } else {
        feedbackThree.textContent = "❌　不正解（ふせいかい）。Try listening again!";
        feedbackThree.style.color = "red";
    };
    });
});

// clear feedback
clearThree.addEventListener("click", () => {
    feedbackThree.textContent = "";
});

// q4
choicesFour.forEach(button => {
    const correct = button.dataset.correct;
    button.addEventListener("click", () => {
        if(correct==="correct") {
        feedbackFour.textContent = "✅　正解（せいかい）！しちじよんじゅうろっぷん (7:46) です。";
        feedbackFour.style.color = "green";
    } else {
        feedbackFour.textContent = "❌　不正解（ふせいかい）。Try listening again!";
        feedbackFour.style.color = "red";
    };
    });
});

// clear feedback
clearFour.addEventListener("click", () => {
    feedbackFour.textContent = "";
});

// q5
choicesFive.forEach(button => {
    const correct = button.dataset.correct;
    button.addEventListener("click", () => {
        if(correct==="correct") {
        feedbackFive.textContent = "✅　正解（せいかい）！くじじゅうはっぷん (9:18) です。";
        feedbackFive.style.color = "green";
    } else {
        feedbackFive.textContent = "❌　不正解（ふせいかい）。Try listening again!";
        feedbackFive.style.color = "red";
    };
    });
});

// clear feedback
clearFive.addEventListener("click", () => {
    feedbackFive.textContent = "";
});

// q6
choicesSix.forEach(button => {
    const correct = button.dataset.correct;
    button.addEventListener("click", () => {
        if(correct==="correct") {
        feedbackSix.textContent = "✅　正解（せいかい）！ろくじごじゅういっぷん (6:51) です。";
        feedbackSix.style.color = "green";
    } else {
        feedbackSix.textContent = "❌　不正解（ふせいかい）。Try listening again!";
        feedbackSix.style.color = "red";
    };
    });
});

// clear feedback
clearSix.addEventListener("click", () => {
    feedbackSix.textContent = "";
});

// Part 2
const tilesTwo = document.querySelectorAll(".tile-p2");
const slotsTwo = document.querySelectorAll(".slot-p2");
const feedbackGen = document.getElementById("feedback-general");
const feedbackRead = document.getElementById("feedback-reading");
const feedbackMean = document.getElementById("feedback-meaning");
const resetTwo = document.getElementById("reset-p2");
const summaryTwo = document.getElementById("summary");
const wordSum = document.getElementById("word-summary");
const ruleSum = document.getElementById("rule-summary");
const leftKanji = document.getElementById("left-kanji");
const rightKanji = document.getElementById("right-kanji");
let draggedTwo = null;

// tiles dragstart/dragend
tilesTwo.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedTwo = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedTwo = null;
    });
});

// slots dragover/dragleave/drop
slotsTwo.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

    if(!draggedTwo) return;

    // only allow matching types
    const slotType = slot.dataset.accept;
    const tileType = draggedTwo.dataset.type;

    if(slotType !== tileType) {
        feedbackGen.textContent = "Please put かんじ１ tiles into かんじ１ slot and かんじ２ tiles into かんじ２ slot.";
        feedbackGen.style.color = "red";
        return;
    }

    // allow only one tile in slot
    const existingTile = slot.querySelector(".tile-p2");
    if(existingTile) {
        if(existingTile.dataset.type == "left") {
            leftKanji.appendChild(existingTile);
        } else {
            rightKanji.appendChild(existingTile);
        };
    };
    slot.textContent = '';
    slot.appendChild(draggedTwo);

    const jukugoMap = [
        {left: "every", right: "day", reading: "まいにち", meaning: "every day"},
        {left: "every", right: "month", reading: "まいつき", meaning: "every month"},
        {left: "every", right: "year", reading: "まいとし", meaning: "every year"},
        {left: "now", right: "day", reading: "きょう", meaning: "today"},
        {left: "now", right: "month", reading: "こんげつ", meaning: "this month"},
        {left: "now", right: "year", reading: "ことし", meaning: "this year"}
    ];

    // Get current left and right tile names in slots
    const leftTile = document.querySelector('.slot-p2[data-accept="left"] .tile-p2');
    const rightTile = document.querySelector('.slot-p2[data-accept="right"] .tile-p2');
    if (leftTile && rightTile) {
        const leftName = leftTile.dataset.name;
        const rightName = rightTile.dataset.name;
        const match = jukugoMap.find(j => j.left === leftName && j.right === rightName);
        if (match) {
            feedbackRead.textContent = `Reading: ${match.reading}`;
            feedbackRead.style.color = "blue";
            feedbackMean.textContent = `Meaning: ${match.meaning}`;
            feedbackMean.style.color = "#ff8c00";
        } else {
            feedbackGen.textContent = "❌　That is not a valid じゅくご.";
            feedbackGen.style.color = "red";
            feedbackRead.textContent = '';
            feedbackMean.textContent = '';
        }
    } else {
        feedbackGen.textContent = '';
        feedbackRead.textContent = '';
        feedbackMean.textContent = '';
    }
    });
});

// reset
resetTwo.addEventListener("click", () => {
    document.querySelectorAll(".slot-p2 .tile-p2").forEach(tile => {
        if(tile.dataset.type == "left") {
            leftKanji.appendChild(tile);
        } else {
            rightKanji.appendChild(tile);
        };
    });
    // restore placeholder text
    slotsTwo.forEach(slot => {
        if(!slot.querySelector(".tile-p2")) {
            slot.textContent = slot.dataset.accept === "left" ? "かんじ１" : "かんじ２";
        };
    });
    feedbackGen.textContent = '';
    feedbackRead.textContent = '';
    feedbackMean.textContent = '';
});

// summary
summaryTwo.addEventListener("click", () => {
    if (summaryTwo.textContent === "Show summary") {
        summaryTwo.textContent = "Hide summary";
        wordSum.textContent = "毎日（まいにち）everyday\n 毎月（まいつき）every month\n 毎年（まいとし）every year\n 今日（きょう）today\n 今月（こんげつ）this month\n 今年（ことし）this year";
        ruleSum.textContent = "「毎」adds the meaning 'every' to each time unit (i.e., day, month, year), while「今」adds the meaning 'this; current'. As you may have noticed,「毎」is read「まい」consistently regardless of the Kanji it is combined with, while「今」changes its reading for each じゅくご.";
        wordSum.style.display = "block";
        ruleSum.style.display = "block";
        wordSum.style.color = "purple";
    } else {
        summaryTwo.textContent = "Show summary";
        wordSum.textContent = "";
        ruleSum.textContent = "";
        wordSum.style.display = "none";
        ruleSum.style.display = "none";
    }
})

// Part 3
const checkOne = document.getElementById("check-p3-1");
const checkTwo = document.getElementById("check-p3-2");
const checkThree = document.getElementById("check-p3-3");
const checkFour = document.getElementById("check-p3-4");
const checkFive = document.getElementById("check-p3-5");
const feedbackThree1 = document.getElementById("feedback-p3-1");
const feedbackThree2 = document.getElementById("feedback-p3-2");
const feedbackThree3 = document.getElementById("feedback-p3-3");
const feedbackThree4 = document.getElementById("feedback-p3-4");
const feedbackThree5 = document.getElementById("feedback-p3-5");
const hintOne = document.getElementById("hint-p3-1");
const hintTwo = document.getElementById("hint-p3-2");
const hintThree = document.getElementById("hint-p3-3");
const hintFour = document.getElementById("hint-p3-4");
const hintFive = document.getElementById("hint-p3-5");
const clearThree1 = document.getElementById("clear-p3-1");
const clearThree2 = document.getElementById("clear-p3-2");
const clearThree3 = document.getElementById("clear-p3-3");
const clearThree4 = document.getElementById("clear-p3-4");
const clearThree5 = document.getElementById("clear-p3-5");


// q1 check answer
checkOne.addEventListener("click", () => {
    const inputOne = document.getElementById("input-1").value.trim();
    if(inputOne === "") {
        feedbackThree1.textContent = "Please enter your answer.";
        feedbackThree1.style.color = "red";
    } else {
        feedbackThree1.textContent = "✅ The correct answer is 「えいごを話してもいいですか。」 or 「えいごで話してもいいですか。」(「えいごで」 here means 'by means of English'). You can add 「クラスで（えいごを話してもいいですか）」 to mark the location where the action (i.e., to speak) occurs.";feedbackThree1.style.color = "green";
    };
});

// q1 hint
hintOne.addEventListener("click", () => {
    feedbackThree1.textContent = "The structure for asking permission is 「te-form + もいいですか」. The te-form of 'to speak' is 「話す」→「話して」. "
    feedbackThree1.style.color = "purple";
})

// q1 clear
clearThree1.addEventListener("click", () => {
    feedbackThree1.textContent = "";
});


// q2 check answer
checkTwo.addEventListener("click", () => {
    const inputTwo = document.getElementById("input-2").value.trim();
    if(inputTwo === "") {
        feedbackThree2.textContent = "Please enter your answer.";
        feedbackThree2.style.color = "red";
    } else {
        feedbackThree2.textContent = "✅ The correct answer is 「ノートを見てもいいですか。」You can add 「テストで（ノートを見てもいいですか）」 to mark the location where the action (i.e., to look at) occurs.";
        feedbackThree2.style.color = "green";
    };
});

// q2 hint
hintTwo.addEventListener("click", () => {
    feedbackThree2.textContent = "The structure for asking permission is 「te-form + もいいですか」. The te-form of 'to look at' is 「見る」→「見て」. "
    feedbackThree2.style.color = "purple";
})

// q2 clear
clearThree2.addEventListener("click", () => {
    feedbackThree2.textContent = "";
});


// q3 check answer
checkThree.addEventListener("click", () => {
    const inputThree = document.getElementById("input-3").value.trim();
    if(inputThree === "") {
        feedbackThree3.textContent = "Please enter your answer.";
        feedbackThree3.style.color = "red";
    } else {
        feedbackThree3.textContent = "✅ The correct answer is 「立ってもいいですか。」";
        feedbackThree3.style.color = "green";
    };
});

// q3 hint
hintThree.addEventListener("click", () => {
    feedbackThree3.textContent = "The structure for asking permission is 「te-form + もいいですか」. The te-form of 'to stand' is 「立つ」→「立って」. "
    feedbackThree3.style.color = "purple";
})

// q3 clear
clearThree3.addEventListener("click", () => {
    feedbackThree3.textContent = "";
});


// q4 check answer
checkFour.addEventListener("click", () => {
    const inputFour = document.getElementById("input-4").value.trim();
    if(inputFour === "") {
        feedbackThree4.textContent = "Please enter your answer.";
        feedbackThree4.style.color = "red";
    } else {
        feedbackThree4.textContent = "✅ The correct answer is 「えいごを書いてもいいですか。」 or 「えいごで書いてもいいですか。」(「えいごで」 here means 'by means of English'). You can add 「テストで（えいごを書いてもいいですか）」 to mark the location where the action (i.e., to write) occurs.";
        feedbackThree4.style.color = "green";
    };
});

// q4 hint
hintFour.addEventListener("click", () => {
    feedbackThree4.textContent = "The structure for asking permission is 「te-form + もいいですか」. The te-form of 'to write' is 「書く」→「書いて」. "
    feedbackThree4.style.color = "purple";
})

// q4 clear
clearThree4.addEventListener("click", () => {
    feedbackThree4.textContent = "";
});


// q5 check answer
checkFive.addEventListener("click", () => {
    const inputFive = document.getElementById("input-5").value.trim();
    if(inputFive === "") {
        feedbackThree5.textContent = "Please enter your answer.";
        feedbackThree5.style.color = "red";
    } else {
        feedbackThree5.textContent = "✅ The correct answer is 「友だちに聞いてもいいですか。」You can add 「しゅくだいのことを（友だちに聞いてもいいですか）」 to indicate what you want to ask your friend about. 「しゅくだいのこと」 literally means 'the matter of homework' - i.e., about homework.";
        feedbackThree5.style.color = "green";
    };
});

// q5 hint
hintFive.addEventListener("click", () => {
    feedbackThree5.textContent = "The structure for asking permission is 「te-form + もいいですか」. The te-form of 'to ask' is 「聞く」→「聞いて」. "
    feedbackThree5.style.color = "purple";
})

// q5 clear
clearThree5.addEventListener("click", () => {
    feedbackThree5.textContent = "";
});
