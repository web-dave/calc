// https://wiki.selfhtml.org/extensions/Selfhtml/frickl.php/Beispiel:JS_Taschenrechner.html#view_result

const form = document.querySelector("#calc");
const out = document.querySelector("#calc output");
let overwrite = true;
let displayValue = [0];

function clear() {
  displayValue = [0];
  out.textContent = displayValue.join("");
  overwrite = true;
}

function input(c) {
  if (displayValue.length === 1 && displayValue[0] === 0 && c != ".") {
    displayValue = [];
  }

  displayValue.push(c);
  out.textContent = displayValue.join("");
  overwrite = false;
}

function operator(c) {
  displayValue.push(c);
  out.textContent = displayValue.join("");
  overwrite = false;
}

function result(noDisplay = false) {
  let input = displayValue.join("");
  let r = 0;
  // replace × with * and ÷ with / for eval()
  input = input.replace(/x/g, "*").replace(/÷/g, "/");
  // remove anything else that is not allowed here
  input = input.replace(/[^0-9. +\-*\/]/g, "");
  try {
    r = eval(input);
  } catch (e) {
    r = 0;
  }
  if (noDisplay !== true) {
    out.textContent = String(r);
    overwrite = true;
  }
  return r;
}

const inputNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const inputOperators = [
  ["add", "+"],
  ["sub", "-"],
  ["x", "x"],
  ["dif", "/"],
];

inputNumbers.forEach((value) =>
  document
    .querySelector(".input_" + value)
    .addEventListener("click", () => input(value))
);
inputOperators.forEach((value) =>
  document
    .querySelector(".input_" + value[0])
    .addEventListener("click", () => operator(value[1]))
);
document.querySelector(".input_eq").addEventListener("click", () => result());
document.querySelector(".input_C").addEventListener("click", () => clear());
document
  .querySelector(".input_dez")
  .addEventListener("click", () => input("."));
