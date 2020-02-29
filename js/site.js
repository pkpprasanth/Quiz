// Create the questions
let questions = [
  {
    id: 1,
    question: "What is the HTML tag under which one can write the JavaScript code?",
    answer: "script",
    options: [
      "javascript",
      "scripted",
      "script",
      "js"
    ]
  },
  { 
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Which one of these is a JavaScript package manager?",
    answer: "NPM",
    options: [
      "Node.js",
      "TypeScript",
      "VS-Code",
      "NPM"
    ]
  },
  {
    id: 4,
    question: " How to write an ‘if’ statement for executing some code.If “i” is NOT equal to 8?",
    answer: "if(i!=5)",
    options: [
      "if(i<>5)",
      "if i<>5",
      "if(i!=5)",
      "if i!=5"
    ]
  },
  {
    id: 5,
    question: "What is the correct syntax for adding comments in JavaScript?",
    answer: "//This is a comment",
    options: [
      "!–This is a comment",
      "//This is a comment",
      "–This is a comment",
      "**This is a comment**"
    ]
  },
  {
    id: 6,
    question: "What is the JavaScript syntax for printing values in Console?",
    answer: "console.log(5);",
    options: [
      "print(5)",
      "console.log(5);",
      "console.print(5);",
      "print.console(5);"
    ]
  },
  {
    id: 7,
    question: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
    answer: "trim()",
    options: [
      "strip()",
      "trim()",
      "stripped()",
      "trimmed()"
    ]
  },
  {
    id: 8,
    question: "If we want to wrap a block of text around an image, which css property will we use ?",
    answer: "float;",
    options: [
      "wrap",
      "push",
      "float",
      "align"
    ]
  },
  {
    id: 9,
    question: "Which of the following is an advantage of using JavaScript?",
    answer: "All of the above",
    options: [
      "Increased interactivity",
      "Less server interaction",
      "Immediate feedback from the users",
      "All of the above"
    ]
  },
  {
    id: 10,
    question: "JavaScript is a ________ Side Scripting Language",
    answer: "Browser",
    options: [
      "Server",
      " ISP",
      "Browser",
      "None of the above"
    ]
  }
];

    let value = JSON.stringify(questions);
     localStorage.setItem("question", value);
    

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) 
  {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  else{
    points += 0;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) 
        {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
