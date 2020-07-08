var number = "x";

function display(x) {
  document.getElementById("display").innerHTML += `${x}`;
}

function result() {
  let result = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = eval(result);
}

function ac() {
  document.getElementById("display").innerHTML = "";
}

// function plusMinus() {
//   document.getElementById("display").innerHTML += `- ${x}`;
// }

// function modulus() {
//   let result = document.getElementById("display").innerHTML;
//   console.log(result);
//   let splittedResult = result.split(`\n`);
//   console.log(splittedResult);
//   let a = splittedResult[0];
//   console.log(a);
//   let b = splittedResult[2];
//   document.getElementById("display").innerHTML = parseInt(a);
// }

function percentage() {
  let result = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = result / 100;
}

function plusMinus() {
  let result = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = result * -1;
}
