const Questions = [
    {
        num: 1,
        question: "1. What is the result of 2 + 2 in JavaScript?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        num: 2,
        question: "2. Which keyword is used to declare a constant variable in JavaScript?",
        options: ["let", "var", "const", "static"],
        answer: "const"
    },
    {
        num: 3,
        question: "3. Which method is used to add an element to the end of an array?",
        options: ["push()", "addToEnd()", "append()", "insertEnd()"],
        answer: "push()"
    },
    {
        num: 4,
        question: "4. What is the result of 5 * 8 in JavaScript?",
        options: ["35", "40", "45", "50"],
        answer: "40"
    },
    {
        num: 5,
        question: "5. What does NaN stand for in JavaScript?",
        options: ["Not a Number", "New and Native", "Null or Negative", "None of the above"],
        answer: "Not a Number"
    },
    {
        num: 6,
        question: "6. Which method returns the length of a string in JavaScript?",
        options: ["length()", "size()", "count()", "None of the above"],
        answer: "length()"
    },
    {
        num: 7,
        question: "7. What is the result of typeof [] in JavaScript?",
        options: ["array", "object", "null", "undefined"],
        answer: "object"
    },
    {
        num: 8,
        question: "8. Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "--"],
        answer: "//"
    },
    {
        num: 9,
        question: "9. What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Highly Textual Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        num: 10,
        question: "21. What is the output of 4 + '4' in JavaScript?",
        options: ["8", "44", "Not Possible", "Error"],
        answer: "44"
    },
    {
        num: 11,
        question: "11. What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        num: 12,
        question: "12. Which property is used to change the background color in CSS?",
        options: ["background-color", "color", "bgcolor", "bg-color"],
        answer: "background-color"
    },
    {
        num: 13,
        question: "13. Which programming language is often used for web development?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: "JavaScript"
    },
    {
        num: 14,
        question: "14. Which operator is used for concatenation in JavaScript?",
        options: ["+", "&", ".", "$"],
        answer: "+"
    },
    {
        num: 15,
        question: "15. Which function is used to print content in the console in JavaScript?",
        options: ["print()", "log()", "console()", "display()"],
        answer: "log()"
    },
    {
        num: 16,
        question: "16. What is the default behavior of the 'a' tag in HTML?",
        options: ["It displays a block element", "It displays an inline element", "It creates a new paragraph", "It creates a new page"],
        answer: "It displays an inline element"
    },
    {
        num: 17,
        question: "17. Which property is used to set the font size in CSS?",
        options: ["font-size", "text-size", "size", "font-style"],
        answer: "font-size"
    },
    {
        num: 18,
        question: "18. What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "Hyper Transfer Text Protocol", "Home Tool Transfer Protocol", "Hyper Transfer Tool Protocol"],
        answer: "HyperText Transfer Protocol"
    },
    {
        num: 19,
        question: "19. Which event occurs when a user clicks on an HTML element?",
        options: ["onmouseclick", "onclick", "onmouseover", "onchange"],
        answer: "onclick"
    },
    {
        num: 20,
        question: "23. Which CSS property is used to control the space between elements?",
        options: ["spacing", "margin", "padding", "border"],
        answer: "margin"
    },
    {
        num: 21,
        question: "24. In JavaScript, what does the '!=='' operator mean?",
        options: ["Not equal in value and type", "Equal in value but not in type", "Equal in value and type", "Not equal in value"],
        answer: "Not equal in value and type"
    },
    {
        num: 22,
        question: "25. What is the purpose of 'z-index' in CSS?",
        options: ["It sets the text alignment", "It defines the order of elements along the z-axis", "It specifies the font size", "It manages background images"],
        answer: "It defines the order of elements along the z-axis"
    },
    {
        num: 23,
        question: "26. What is the purpose of the 'src' attribute in HTML?",
        options: ["It specifies the style of an element", "It sets the title of the webpage", "It defines the source of an image or script", "It aligns elements horizontally"],
        answer: "It defines the source of an image or script"
    },
    {
        num: 24,
        question: "27. Which of the following is NOT a JavaScript framework or library?",
        options: ["React", "Vue", "Python", "Angular"],
        answer: "Python"
    },
    {
        num: 25,
        question: "28. What does CSS Box Model consist of?",
        options: ["Margin, Border, Padding, Content", "Header, Footer, Navigation, Body", "Font, Color, Background, Border", "Text, Image, Link, Paragraph"],
        answer: "Margin, Border, Padding, Content"
    },
]

const startButton = document.querySelector('.startButton');
const restartButton = document.querySelector('.restart-button');
const infoBox=document.querySelector('.info');
const quizBox = document.querySelector('.quizBox');
const resultBox = document.querySelector('.resultBox');
const questionToDisplay = document.querySelector('#questionToDisplay');
const options = document.querySelector('.options');
const timeRemaining = document.querySelector('.timeRemain');
const questionRemaining=document.querySelector('.questionRemaining');
const totalCorrectAnswers = document.querySelector('.totalCorrectAnswers');
const wrongAnswers = document.querySelector('.wrongAnswers');
const percentage = document.querySelector('.percentage');

let iterator = 0;
let correctAnswersGiven = 0;
const totalNumberOfQuestion = Questions.length;

startButton.addEventListener('click', () => {
    handleStartButton();
    countdownTimer(180); // Start timer for 180 seconds (3 minutes)
});

const handleStartButton = () => {
    infoBox.classList.add('inactive');
    quizBox.classList.remove('inactive');
    startButton.classList.add('inactive');
    addQuestions(iterator);
};

const addQuestions = (questionNumber) => {
    questionRemaining.value=totalNumberOfQuestion-(iterator+1)
    if (iterator >= totalNumberOfQuestion) {
        displayResult();
    } else {
        questionToDisplay.textContent = Questions[questionNumber].question;
        options.innerHTML = ""; // Clear previous options

        for (let i = 0; i < 4; i++) {
            const newOption = document.createElement('div');
            newOption.innerHTML = `<button class="option">${Questions[questionNumber].options[i]}</button>`;
            options.appendChild(newOption);
        }
        selectAnswer(iterator);
    }
};

const selectAnswer = (questionNumber) => {
    options.addEventListener('click', (e) => {
        const selectedAnswer = e.target.textContent;
        const correctAnswer = Questions[questionNumber].answer;

        if (selectedAnswer === correctAnswer) {
            correctAnswersGiven++;
        }

        iterator++;
        removePreviousOptions();
        addQuestions(iterator);
    }, { once: true }); // Event listener only works once per option click
};

function countdownTimer(durationInSeconds) {
    let timer = durationInSeconds;

    const countdown = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        timeRemaining.value = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(countdown);
            timeRemaining.textContent = 'Time\'s up!';
            displayResult();
        }
    }, 1000); // Update the display every second
}

const displayResult = () => {
    quizBox.classList.add('inactive');
    resultBox.classList.remove('inactive');
    totalCorrectAnswers.textContent = `Correct Answers: ${correctAnswersGiven}`;
    wrongAnswers.textContent = `Wrong Answers: ${totalNumberOfQuestion - correctAnswersGiven}`;
    percentage.textContent = `Percentage: ${Math.floor((correctAnswersGiven / totalNumberOfQuestion) * 100)}%`;
};

const removePreviousOptions = () => {
    while (options.firstChild) {
        options.removeChild(options.firstChild);
    }
};

restartButton.addEventListener('click', () => {
    handleRestartButton();
});

const handleRestartButton = () => {
    iterator = 0;
    correctAnswersGiven = 0;
    quizBox.classList.remove('inactive');
    resultBox.classList.add('inactive');
    startButton.classList.remove('inactive');
    timeRemaining.textContent = ''; // Reset timer display

    addQuestions(iterator);
    countdownTimer(180); // Restart the timer for 180 seconds (3 minutes)
};
