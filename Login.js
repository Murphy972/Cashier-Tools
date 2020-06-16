
let theUser, theUsername, thePassword = [];
fetch("./Users.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data[0]);
    theUser = data[0].name;
    theUsername = data[1].username;
    thePassword = data[0].password;
    console.log(theUser);
    console.log(theUsername);
    console.log(thePassword);
  });
console.log(theUsername)

function checkUser(){
  var usernameCheck = document.getElementById("").value;
  var passwordCheck = document.getElementById("").value;
}



// let requestURL = '//localhost:8000/Users.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
