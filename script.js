"use strict";

const box = document.getElementById("box");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

const boxInput = document.createElement("span");
const inputValue = document.createTextNode(0);

boxInput.appendChild(inputValue);

box.appendChild(boxInput);

let value = 0;
console.log(value);

increment.addEventListener("click", () => {
  value++;
  boxInput.textContent = value;
  console.log(value);
});

decrement.addEventListener("click", () => {
  if (value <= 0) return;
  value--;
  boxInput.textContent = value;
  console.log(value);
});
