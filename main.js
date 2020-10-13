"use strict";

console.log("hola");

const input = document.querySelector(".js-input");
const btn = document.querySelector(".js-btn");
const random = getRandomNumber(100);
const clue = document.querySelector(".js-clue");
const attempts = document.querySelector(".js-attempts");

//nº aleatorio generado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(random);

//nº introducido por usuaria
function showNumber() {
  const number = parseInt(input.value); 
  console.log(number);
  return number;  
}

// btn.addEventListener("click", showNumber);

//comparación nº aleatorio -- nº introducido
function compNum() {
  if (random === showNumber()) {
    console.log("Has ganado campeona!!!");
  } else if (random < showNumber()) {
    console.log("Demasiado bajo");
  }
}


btn.addEventListener("click", compNum);