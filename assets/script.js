// list of all questions, choices, and answers
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        title:
            'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];

// global variables

var timeInterval;
var counter = 75;
var timeEl = document.getElementById("time");
var currentIndex = 0;
var scoreEl = document.getElementById("time");
var saveButtonEl = document.getElementById("saveButton");

// step 1. start timer when user clicks start button

function startTimer() {
    timeEl.textContent = counter
    timeInterval = setInterval(function () {
        counter--
        timeEl.textContent = counter
        if (counter <= 0) {
            endQuiz()
        }
    }, 1000)

}
// Step 2. start quiz and display questions

function startQuiz() {
    document.getElementById("startScreen").classList.add("hide")
    document.getElementById("questions").classList.remove("hide")
    startTimer()
    displayQuestions()
}

function displayQuestions() {
    document.getElementById("question-title").textContent = questions[currentIndex].title
    document.getElementById("answers").innerHTML = ""
    for (var i = 0; i < questions[currentIndex].choices.length; i++) {
        var btn = document.createElement("button")
        btn.textContent = questions[currentIndex].choices[i]
        btn.addEventListener("click", checkAnswer);
        document.getElementById("answers").append(btn)
    }
}

// step 3. display answers and deduct 10 secs if user gets answer incorrect

function checkAnswer(event) {
    if (event.target.textContent === questions[currentIndex].answer) {

    }
    else {
        counter -= 10
        timeEl.textContent = counter
    }
    if (currentIndex === 4) {
        endQuiz()
    }
// Step 4. go to next question

    else {
        currentIndex++
        displayQuestions()
    }

}


//step 5. end quiz

function endQuiz() {
    clearInterval(timeInterval)
    document.getElementById("endQuiz").classList.remove("hide")
    document.getElementById("questions").classList.add("hide")
// step 6. display final score and box for user to input initials and save scores
    document.getElementById("highscore").innerHTML = counter;
}
// step 7. save scores and show all high scores when "view high score" is clicked
var buttonElement = document.querySelector("#start-btn");
buttonElement.addEventListener("click", startQuiz);

saveButtonEl.addEventListener("click", function () {
    let initials= document.querySelector("input").value;
    let highScores= JSON.parse(localStorage.getItem("highscore"))||[];
    console.log(initials);
    let newScore= {
        initials:initials,score:counter
    }
    highScores.push(newScore)
    localStorage.setItem("highscore",JSON.stringify(highScores))
});
