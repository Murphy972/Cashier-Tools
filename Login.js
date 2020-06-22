var attemptLimit = 4;
var attemptCount = 0;
var isUsername = false;
var isPassword = false;
var outofAttempts = false;
var signedIn = false;
var isUser = false;
var index = "";

document.getElementById("username-error").style.display = "none";
document.getElementById("password-error").style.display = "none";
document.getElementById("attempt-warning").style.display = "none";

var attemptWarning = document.getElementById("attempt-warning").innerHTML;

var data = fetch("./Users.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    var usernameInput = document.getElementById("username-input").value;
    var passwordInput = document.getElementById("password-input").value;
    var signinBtn = document.getElementById("user-check-btn");

    function checkUsername(){
      var usernameInput = document.getElementById("username-input").value;
      for (var i = 0; i < data.length; i++){
        console.log("data.length " + data.length);
        if (usernameInput == data[i].username){
          document.getElementById("username-error").style.display = "none";
          console.log("correct username");
          isUsername = true;
          index = i;
          break;
        } else if (usernameInput !== data[i].username && attemptCount < attemptLimit){
          console.log(usernameInput);
          console.log(i);
          console.log("invalid username");
        } else if (attemptCount > attemptLimit){
          outofAttempts = true;
          break;
        }
      }
    }

    function checkPassword(){
      var passwordInput = document.getElementById("password-input").value;
      for (var i = 0; i < data.length; i++){
        if (passwordInput == data[i].password){
          document.getElementById("password-error").style.display = "none";
          isPassword = true;
        } else if (passwordInput != data[i].password && attemptCount <= attemptLimit){
        } else if (attemptCount > attemptLimit){
          outofAttempts = true;
          break;
        }
      }
    }

    function authentication(){
      if (isUsername == true && isPassword == true){
        signedIn = true;
        var theUser = data[index].name;
        console.log("Hi " + theUser);
        window.location.href = "mainscreen.html";
      } else if (attemptCount <= attemptLimit && isUsername == false && isPassword == true){
          attemptCount++;
          document.getElementById("attempt-warning").style.display = "block";
          document.getElementById("attempt-warning").innerHTML = "<strong>Attempt Limit: 5</strong>, Attempts: " + attemptCount;
          document.getElementById("username-error").style.display = "block";
          var userErrorStyle = document.getElementById("username-error").style;
          userErrorStyle.opacity = 2;
          (function fadeuser(){(userErrorStyle.opacity-=.1)<0?userErrorStyle.display="none":setTimeout(fadeuser,140)})();
          isUsername = false;
          isPassword = false;
      } else if (attemptCount <= attemptLimit && isPassword == false && isUsername == true){
          attemptCount++;
          document.getElementById("password-error").style.display = "block";
          document.getElementById("attempt-warning").style.display = "block";
          document.getElementById("attempt-warning").innerHTML = "<strong>Attempt Limit: 5</strong>, Attempts: " + attemptCount;
          var passErrorStyle = document.getElementById("password-error").style;
          passErrorStyle.opacity = 2;
          (function fadepass(){(passErrorStyle.opacity-=.1)<0?passErrorStyle.display="none":setTimeout(fadepass,140)})();
          isUsername = false;
          isPassword = false;
      } else if (attemptCount <= attemptLimit && isUsername == false && isPassword == false){
          attemptCount++;
          document.getElementById("username-error").style.display = "block";
          document.getElementById("password-error").style.display = "block";
          document.getElementById("password-error").style.display = "block";
          document.getElementById("attempt-warning").innerHTML = "<strong>Attempt Limit: 5</strong>, Attempts: " + attemptCount;
          var userErrorStyle = document.getElementById("username-error").style;
          userErrorStyle.opacity = 2;
          (function fadeuser(){(userErrorStyle.opacity-=.1)<0?userErrorStyle.display="none":setTimeout(fadeuser,140)})();
          var passErrorStyle = document.getElementById("password-error").style;
          passErrorStyle.opacity = 2;
          (function fadepass(){(passErrorStyle.opacity-=.1)<0?passErrorStyle.display="none":setTimeout(fadepass,140)})();
          isUsername = false;
          isPassword = false;
      } else if (attemptCount > attemptLimit) {
          document.getElementById("the-head").innerHTML = "<h3>Out Of Attempts</h3>";
          document.getElementById("user-check-btn").style.display = "none";
          outofAttempts = true;
      }
    }
    
    signinBtn.addEventListener("click", function(){
      var usernameInput = document.getElementById("username-input").value;
      var passwordInput = document.getElementById("password-input").value;
      checkUsername();
      checkPassword();
      authentication();
      document.getElementById("username-input").value = "";
      document.getElementById("password-input").value = "";
    });
  });
