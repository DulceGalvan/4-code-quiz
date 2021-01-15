var questionsEl = document.getElementById("questions");
var timer = document.getElementById("time");
var choices = document.getElementById("choices");
var submitBTN = document.getElementById("submit");
var startBTN = document.getElementById("start-quiz-button");
var inicials = document.getElementById("initials")
var time = questions.length * 15;
var timeId;
var currentQuestionIndex = 0;


function startquiz() {

    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide")

    questionsEl.removeAttribute("class");

    timeId = setInterval(clock, 1000);

    timer.textContent = time;

    selectQuestion();

}

function selectQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion)
    var titleEl = document.getElementById("questions-title");
    titleEl.textContent = currentQuestion.title;

    choices.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = i + 1 + ". " + choice;

        //choiceButton.onclick =
choices.appendChild(choiceButton)

})

}

function clock() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
        //end quiz fuction goes here
    }

}

//function to check answers goes here

startBTN.onclick = startquiz;