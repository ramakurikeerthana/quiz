let questionBook = [
    {
        id: "qa-1",
        question: "What is the full form of JS?",
        option: ["JavaScript", "Java Support", "Java Selector", "Java Selenium"],
        correctAnswer: "JavaScript"
    },
    {
        id: "qa-2",
        question: "What is the full form of DOM?",
        option: ["Description Object Model", "Data Object Method", "Document Object Model", "Data Object Manipulation"],
        correctAnswer: "Document Object Model"
    },
    {
        id: "qa-3",
        question: "What is the full form of BOM?",
        option: ["Box Object Model", "Browser Object Model", "Box Office Model", "Browser Object Manipulation"],
        correctAnswer: "Browser Object Model"
    },
    {
        id: "qa-4",
        question: "What is the full form of TDZ?",
        option: ["Time Dead Zone", "Temporal Dead Zone", "Transcript Dead Zone", "Time Data Zone"],
        correctAnswer: "Temporal Dead Zone"
    },
    {
        id: "qa-5",
        question: "What is the full form of ES?",
        option: ["Essay Script", "Ecma Script", "Environment Style", "Easy Script"],
        correctAnswer: "Ecma Script"
    }
];

let questionElement = document.getElementById("question");
let optionElement = document.getElementById("option");
let scoreElement = document.getElementById("score");
let skipButton = document.getElementById("skip");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    let { question, option, correctAnswer } = questionBook[currentQuestion];
    questionElement.textContent = question;

    option = shuffleQuestion([...option]);
    optionElement.innerHTML = "";

    option.map((opt) => {
        let btn = document.createElement("button");
        btn.textContent = opt;
        btn.setAttribute("class", "optionButtons");
        optionElement.append(btn);

        btn.addEventListener("click", () => {
            if (opt === correctAnswer) {
                btn.style.backgroundColor = "green";
                score += 1;
            } else {
                btn.style.backgroundColor = "red";
            }

            scoreElement.textContent = `Score: ${score}/${questionBook.length}`;

            let allBtns = document.querySelectorAll(".optionButtons");
            allBtns.forEach((b) => b.disabled = true);

            setTimeout(() => {
                nextQuestion();
            }, 1000);
        });
    });
}

function nextQuestion() {
    currentQuestion++;
    optionElement.innerHTML = "";

    if (currentQuestion === questionBook.length) {
        questionElement.innerHTML = `
    Quiz completed successfully! 😀
    <div class="emoji">🎉</div>
`;
        skipButton.style.display = "none";
    } else {
        displayQuestion();
    }
}

function shuffleQuestion(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

skipButton.addEventListener("click", () => {
    nextQuestion();
});

displayQuestion();
