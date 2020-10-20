"use strict";

const inputNumber = document.querySelector(".js-number");
const btn = document.querySelector(".js-btn"); // button
const random = getRandomNumber(100); // nº aleatorio
const clue = document.querySelector(".js-clue"); // pista

//pr nº intentos
let counterClick = 0; // variable que inicia en 0 y va a ir sumando y guardando los intentos que hagamos
const attempts = document.querySelector(".js-attempts");
let isFinished = false;

//nº aleatorio generado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// recoge nº introducido y comparo con el random
function showNumber() {
  if (isFinished == false) {
    // para que termine el contador

    const inputValue = parseInt(inputNumber.value); // convierto la cadena de caracteres recibida a int

    if (inputValue > 0 && inputValue <= 100) {
      if (inputValue < random) {
        clue.innerHTML = "El número es demasiado bajo";
      } else if (inputValue > random) {
        clue.innerHTML = "El número es demasiado alto";
      } else if (inputValue === random) {
        clue.innerHTML = "Has ganado campeona!!!";
        isFinished = true;
      }
    } else {
      clue.innerHTML = "Introduzca número entre 0 y 100";
    }

    counter();
  } else {
    clue.innerHTML =
      "Juego finalizado, refresque la pantalla para volver a jugar";
  }
}

// nº intentos

function counter() {
  counterClick = counterClick + 1;
  attempts.innerHTML = `Número de intentos: ${counterClick}`;
  //let counterClick = 0; => no la puedo definir dentro de la función porque cada vez que la invoque el contador = 0
}

btn.addEventListener("click", showNumber); //evento con el que todo empieza
