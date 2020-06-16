var percentInp = document.getElementById("percent").value;
var numInp = document.getElementById("percent-of").value;
var percentDisplay = document.getElementById("percent-result");
var checkButton = document.getElementById("percent-check");

function getPercent(){
var percentInp = document.getElementById("percent").value;
var numInp = document.getElementById("percent-of").value;
  if (isNaN(percentInp) || isNan(numInp)){
    var result = (percentInp/100)*numInp;
    result.toString;
    document.getElementById("percent-result").innerHTML = result;
  }
}
checkButton.addEventListener("click", getPercent);
