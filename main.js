// script.js
const questions = [
    {
        question: "How do you write 'Hello, World!' in an alert box?",
        options: [" alertBox('Hello, World!');", "msg('Hello, World!');", "alert('Hello, World!');", "msgBox('Hello, World!');"],
        answer: "alert('Hello, World!');",
    },
    {
        question: "Which of the following is a correct way to create a function in JavaScript?",
        options: ["function myFunc = () {}", "function myFunc() {}", "let myFunc = function {}", "create function myFunc() {}"],
        answer: "function myFunc() {}",
    },
    {
        question: "How can you check if a variable x is an array in JavaScript?",
        options: ["typeof x === 'array'", "x instanceof Array", "Array.isArray(x)", " Both b and c"],
        answer: "Array.isArray(x)",
    },
    {
        question: " How can you deeply copy an object in JavaScript?",
        options: ["let newObj = oldObj;", "let newObj = {...oldObj};", "let newObj = JSON.parse(JSON.stringify(oldObj));", "let newObj = Object.assign({}, oldObj);"],
        answer: "let newObj = JSON.parse(JSON.stringify(oldObj));",
    },
    {
        question: "Which of the following methods is used to add elements to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()",
    },
    {
        question: "How can you prevent modification of an object in JavaScript?",
        options: ["Object.freeze(obj)", "Object.seal(obj)", "Object.lock(obj)", "None of the above"],
        answer: "Object.freeze(obj)",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector(".question");
const optionsElement = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart"); // Add this line


function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.onclick = () => {
            if (option.textContent === currentQuestion.answer) {
                score++;
                option.style.backgroundColor = "#28a745"; // Correct answer
            } else {
                option.style.backgroundColor = "#dc3545"; // Incorrect answer
            }
            optionsElement.forEach(btn => btn.disabled = true); // Disable options
            nextButton.style.display = "block"; // Show next button
        };
        option.style.backgroundColor = "#ffffff"; // Reset styles
        option.disabled = false;
    });
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none"; // Hide next button
    } else {
        questionElement.style.display = "none";
        document.querySelector(".options").style.display = "none";
        nextButton.style.display = "none";
        resultElement.classList.remove("hidden");
        scoreElement.textContent = `${score}/${questions.length}`;
    }
};

restartButton.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = '0';
    resultElement.classList.add("hidden");
    nextButton.style.display = 'hidden';
    questionElement.style.display = "block";
    document.querySelector(".options").style.display = "flex";
    document.querySelector(".options").style.flexDirection = "column";
    showQuestion();
};

// Initialize the quiz
showQuestion();
