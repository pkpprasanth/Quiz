// Create the questions
let questions = [
  {
    id: 1,
    question: "Which is the hottest planet in our solar system?",
    answer: "Mars",
    options: [
      "Mercury",
      "Earth",
      "Venus",
      "Mars"
    ]
  },
  { 
    id: 2,
    question: "What is the correct order of the planets from the sun?",
    answer: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune",
    options: [
      "Venus, Earth, Mercury, Mars, Jupiter, Saturn, Uranus and Neptune",
      "Venus, Earth, Jupiter, Mars, Mercury, Saturn, Uranus and Neptune",
      "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune",
      "Venus, Earth, Jupiter, Mars, Mercury, Saturn, Uranus and Neptune"
    ]
  },
  {
    id: 3,
    question: "Which is the largest asteroid?",
    answer: "Ceres",
    options: [
      "Ceres",
      "4 Vesta",
      "Bennu",
      "2 Pallas"
    ]
  },
  {
    id: 4,
    question: " What year were the first astronauts selected?",
    answer: "1959",
    options: [
      "1959",
      "1998",
      "1958",
      "1963"
    ]
  },
  {
    id: 5,
    question: "What mass does the sun take up in the solar system?",
    answer: "99.86",
    options: [
      "89.45",
      "99.86",
      "78.68",
      "32.89"
    ]
  },
  {
    id: 6,
    question: "Who was the first man in space ?",
    answer: "Yuri Gagarin",
    options: [
      "Scott Kelly",
      "Yuri Gagarin",
      "Nick Hauge",
      "Neil Armstrong"
    ]
  },
  {
    id: 7,
    question: "Which was the first animal to go into space?",
    answer: "Dog",
    options: [
      "Mouse",
      "Cat",
      "Dog",
      "Monkey"
    ]
  },
  {
    id: 8,
    question: "Complete the formula: Speed = _____ / Time",
    answer: "float;",
    options: [
      "Mass",
      "Direction",
      "Temperature",
      "Distance"
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
