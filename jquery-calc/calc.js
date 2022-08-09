// https://wiki.selfhtml.org/extensions/Selfhtml/frickl.php/Beispiel:JS_Taschenrechner.html#view_result

// const form = document.querySelector("#calc");
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
$.each([7, 8, 9], (i, v) =>
  $("fieldset").append(`<button class="input_${v}">${v}</button>`)
);
$("fieldset").append(`<button class="input_add">+</button>`);
$.each([4, 5, 6], (i, v) =>
  $("fieldset").append(`<button class="input_${v}">${v}</button>`)
);
$("fieldset").append(`<button class="input_sub">-</button>`);
$.each([1, 2, 3], (i, v) =>
  $("fieldset").append(`<button class="input_${v}">${v}</button>`)
);
$("fieldset").append(`<button class="input_x">+</button>`);
$("fieldset").append(`<button class="input_dez">.</button>`);
$("fieldset").append(`<button class="input_0">0</button>`);
$("fieldset").append(`<button class="input_C">C</button>`);
$("fieldset").append(`<button class="input_eq">=</button>`);
$.each(inputNumbers, (i, value) =>
  $(".input_" + value).on("click", () => input(value))
);
$.each(inputOperators, (i, value) =>
  $(".input_" + value[0]).on("click", () => operator(value[1]))
);
$(".input_eq").on("click", () => result());
$(".input_C").on("click", () => clear());
$(".input_dez").on("click", () => input("."));
