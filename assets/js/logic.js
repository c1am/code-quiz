/// Variables

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startbtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

var questionsEl = document.getElementById("questions");
var questionTitle = questionsEl.getElementsByTagName("question-title");

var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");


/// Function definitions

function startQuiz() {

    // Hide start screen
    var startScreenEl = document.querySelector("#start-screen");
    startScreenEl.getElementsByClassName.display = "none";

    // Un-hide questions section
    questionsEl.classList.remove("hide");

    // Start timer
    // Set interval to call clockTick every second
    timerId = setInterval(clockTick, 1000);

    getQuestion();
}

function getQuestion() {
    var questionsEl = document.getElementById("questions");
    var questionTitle = questionsEl.getElementsByTagName("question-title");
    var choice = documnet.getElementById("choices");

    // Get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // Update title with current question
    questionTitle.textContent = currentQuestion.title;

    // Clear out any old question choices
    choicesEl.innerHTML = "";

    // Loop over choices
    for (let i=0; i<currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];

        // Create new button for each choice
        var choiceBtn = document.createElement("div");
        choiceBtn.textContent = choice;
        
        // Attach click event listener to each choice
        choiceBtn.addEventListener('click', questionClick);
    }

    // Display on the page
    choicesEl.classList.remove('hide');

}

function questionClick() {

}

function quizEnd() {

}