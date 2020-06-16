
//Input Buttons
var newSignup = document.getElementById("new-signup");
var newScan = document.getElementById("new-cardscan");
var transButton = document.getElementById("trans-btn");
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


transButton.addEventListener("click", addToTranscount);
transButton.addEventListener("click", addToSignupcount);
transButton.addEventListener("click", addToscanCount);
transButton.addEventListener("click", writeScanPercentage);
