let calculate = document.getElementById("calculate");

function seven() {
  calculate.innerHTML += "7";
}
function eight() {
  calculate.innerHTML += "8";
}
function nine() {
  calculate.innerHTML += "9";
}
function four() {
  calculate.innerHTML += "4";
}
function five() {
  calculate.innerHTML += "5";
}
function six() {
  calculate.innerHTML += "6";
}
function one() {
  calculate.innerHTML += "1";
}
function two() {
  calculate.innerHTML += "2";
}
function three() {
  calculate.innerHTML += "3";
}
function zero() {
  calculate.innerHTML += "0";
}
function dote() {
  calculate.innerHTML += ".";
}
function plus() {
  calculate.innerHTML += "+";
}
function minuse() {
  calculate.innerHTML += "-";
}
function divide() {
  calculate.innerHTML += "/";
}

function cross() {
  calculate.innerHTML += "*";
}
function openParenthesis() {
  calculate.innerHTML += "(";
}

function closeParenthesis() {
  calculate.innerHTML += ")";
}
function ac() {
  calculate.innerHTML = " ";
}
function equal() {
  calculate.innerHTML = eval(calculate.textContent);
}

function del() {
   
}



