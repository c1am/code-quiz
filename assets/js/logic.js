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
var questionTitle = questionsEl.getElementsByTagName("h2");

var userInfoEl = document.getElementById("user-info");

// Sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");


/// Function definitions

function startQuiz() {

    // Hide start screen
    var startScreenEl = document.querySelector("#start-screen");
    startScreenEl.style.display = "none";

    // Un-hide questions section
    questionsEl.classList.remove("hide");

    // Start timer
    // Set interval to call clockTick every second
    timerId = setInterval(clockTick, 1000);

    getQuestion();
}

function getQuestion() {
    var questionsEl = document.getElementById("questions");
    var questionTitle = document.getElementById("question-title");
    var choice = document.getElementById("choices");

    // Get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // Update title with current question
    questionTitle.textContent = currentQuestion.title;

    // Clear out any old question choices
    choicesEl.innerHTML = "";
    console.log(questionsEl)
    // Loop over choices
    for (let i=0; i<currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];

        // Create new button for each choice
        var choiceBtn = document.createElement("button");
        
        // Answer data attribute
        choiceBtn.dataset.answer = choice;

        // Text
        choiceBtn.textContent = choice;
        
        // Attach click event listener to each choice
        choiceBtn.addEventListener('click', questionClick);

        // Display on the page
        choicesEl.appendChild(choiceBtn);
    }

}

function questionClick(event) {
    var isCorrect = this.dataset.answer === questions[currentQuestionIndex].answer;
    
    // Check if user guessed wrong
    if (!isCorrect) {
    
        // Penalize time
        time -= 5;

        // Display new time on page
        // ✅ 
        // Play "wrong" sound effect
        sfxWrong.play();

        userInfoEl.textContent = "Sorry, wrong answer, please try again!";

    } else {
        // Play "right" sound effect
        sfxRight.play();

        userInfoEl.textContent = "Correct!";
    }

    // Check if user guessed right 
    if (isCorrect) {

        // Show user info function
        function hideUserInfo() {
            userInfoEl.classList.remove("show-info");
            userInfoEl.innerHTML = "";
        }

        // Show
        userInfoEl.classList.add("show-info");

        // Flash right/wrong feedback on page for half a second
        setTimeout(hideUserInfo, 500)

        // Move to next question

    // Check if we've run out of questions

    // quizEnd
    
    // else
    
    // getQuestion
    }
}

function quizEnd() {
    // Stop timer


    // Show end screen


    // Show final score


    // Hide questions section

}

function clockTick() {
    // Update time
    time-- ;

    // Show starting time
    // Assign the time var to time span textContext
    timerEl.textContent = time;

    // Check if user ran out of time
    if (time <= 0) {
        clearInterval(timerId);
        quizEnd();
    }

}

function saveHighscore() {
    // Get value of input box

    
    // Make sure value wasn't empty


    // Get saved scores from localstorage, or if not any, set to empty array


    // Format new score object for current user


    // Save to localstorage


    // Redirect to next page
}

function checkForEnter(event) {
    // Check if event key is enter


    // saveHighscore
}

/// Function Call
// User clicks button to submit initials
submitBtn.onclick = saveHighscore;

// User clicks button to start quiz
startbtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;