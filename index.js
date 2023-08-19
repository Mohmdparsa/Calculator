let calculate = document.getElementById("calculate");
function setValue(n){

  calculate.innerHTML += n
}

function powerTwo() {
  calculate.innerHTML += "**2";
}
function powerThree() {
  calculate.innerHTML += "**3";
}
function ac(){
  calculate.innerHTML = ""
}

function equal() {
  calculate.innerHTML = eval(calculate.textContent);
}

function del() {
  calculate.textContent = calculate.textContent.slice(0, -1);
}
