
var percentDisplay = document.getElementById("percent-result");
var checkButton = document.getElementById("percent-check");

function getPercent(){
  var percentInp = document.getElementById("percent").value;
  console.log(percentInp);
  var numInp = document.getElementById("percent-of").value;
  parseInt(numInp);
  parseInt(percentInp);
  if (isNaN(numInp) || isNaN(percentInp)) {
    document.getElementById("percent-result").innerHTML = "error"
  }
  else{
    var result = (percentInp/100)*numInp;
    console.log(percentInp);
    result.toString;
    document.getElementById("percent-result").innerHTML = result;
    percentInp = null;
    numInp = null;

  }

}
checkButton.addEventListener("click", getPercent);
