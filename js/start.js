var objPeople = [
  { 
    username: "pkp",
    password: "pkp123"
  },
  { 
    username: "test1",
    password: "test1"
  },
  { 
    username: "test2",
    password: "test2"
  }

]


function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  for (var i = 0; i < objPeople.length; i++) 
  {
    if (username == objPeople[i].username && password == objPeople[i].password) 
    {
      console.log(username + " is logged in!!!")
      sessionStorage.setItem("name", name);
      location.href = "quiz.html";    }
  }
  document.getElementById('error').innerHTML ='Invalid Credentials';
  console.log("Incorrect username or password")
  
   
  }