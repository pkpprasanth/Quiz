// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "int x,a=10;x=a++ + --a + a-- + ++a; X =?",
        imgSrc : "assets/img1.gif",
        choiceA : "40",
        choiceB : "41",
        choiceC : "42",
        correct : "A"
    },{
        question: "int x,a=10, b=20;x=a++ + --b + b-- + ++a + a*b; x=?",
        imgSrc: "assets/img1.gif",
        choiceA : "275",
        choiceB : "276",
        choiceC : "Error",
        correct : "B"
    },{
        question: "int x,a=10, b=20;x=(a*b)*a + b-- + ++a + a*b; x=?",
        imgSrc: "assets/img1.gif",
        choiceA : "Error",
        choiceB : "2241",
        choiceC :  "2240",
        correct : "C"
    }
    ,{
        question: "int x= (5*3)+(7*3)+(9-7)*5; x=?",
        imgSrc: "assets/img1.gif",
        choiceA: "46",
        choiceB: "460",
        choiceC: "47",
        correct: "A"
    }
    , {
        question: "int x= (5*3)+(7*3)+(9*7)*5%(5*3)+(7*3)+(9-7)*5; x=?",
        imgSrc: "assets/img1.gif",
        choiceA: "Error",
        choiceB: "670",
        choiceC: "67",
        correct: "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; 
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "assets/5.png" :
              (scorePerCent >= 60) ? "assets/4.png" :
              (scorePerCent >= 40) ? "assets/3.png" :
              (scorePerCent >= 20) ? "assets/1.gif" :
              "assets/11.gif";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















