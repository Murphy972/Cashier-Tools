
//Input Buttons
var newSignup = document.getElementById("new-signup");
var newScan = document.getElementById("new-cardscan");
var transButton = document.getElementById("trans-btn");
var resetButton = document.getElementById("reset-btn");
//Actual Values
var transCount = 0
var signupCount = 0
var scanCount = 0
//Outputs
var transCounter = document.getElementById("trans-count");
var signupCounter = document.getElementById("signup-count");
var scanPercentage = document.getElementById("scan-percent");

newSignup.checked = false;
newScan.checked = false;

function addToTranscount() {
  transCount++;
  transCounter.innerHTML = "Trans Count:  " + transCount;
}

function addToSignupcount() {
  if(newSignup.checked == true){
    signupCount++;
    signupCounter.innerHTML = "Signup Count: " + signupCount;
    document.getElementById("new-signup").checked = false;
  }
}

function addToscanCount() {
  if(newScan.checked == true){
    scanCount++;
    document.getElementById("new-cardscan").checked = false;
  }
}

function writeScanPercentage(){
  var scanPercent = scanCount*100/transCount;
  scanPercentage.innerHTML = "Scan Percentage: " + scanPercent.toFixed() + "%";
}

function reset(){
  transCount = 0;
  signupCount = 0;
  scanCount = 0;
  transCounter.innerHTML = "Trans Count:  ";
  signupCounter.innerHTML = "Signup Count: ";
  document.getElementById("new-signup").checked = false;
  document.getElementById("new-cardscan").checked = false;
  scanPercentage.innerHTML = "Scan Percentage: ";
}

transButton.addEventListener("click", function(){
  addToscanCount();
  addToSignupcount();
  addToTranscount();
  writeScanPercentage();
});

resetButton.addEventListener("click", function(){
  reset();
});
