// Import stylesheets
// import { Btn } from "./btn";
// import { Display } from "./display";
// import "./style.css";

// https://wiki.selfhtml.org/extensions/Selfhtml/frickl.php/Beispiel:JS_Taschenrechner.html#view_result
//**
const out = document.querySelector("#calc calc-display");
let overwrite = true;
let displayValue = [0];

function clear() {
  displayValue = [0];
  out.setAttribute("value", displayValue.join(""));
  overwrite = true;
}

function input(c) {
  if (displayValue.length === 1 && displayValue[0] === 0 && c != ".") {
    displayValue = [];
  }

  displayValue.push(c);
  out.setAttribute("value", displayValue.join(""));
  overwrite = false;
}

function operator(c) {
  displayValue.push(c);
  out.setAttribute("value", displayValue.join(""));
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
    out.setAttribute("value", String(r));
    overwrite = true;
  }
  return r;
}

document.querySelector("fieldset").addEventListener("pong", (e) => {
  const val = e["detail"];
  switch (val) {
    case "+":
    case "-":
    case "÷":
    case "×":
      operator(val);
      break;
    case "=":
      result();
      break;
    case "C":
      clear();
      break;
    case ".":
      input(".");
      break;
    default:
      input(val);
      break;
  }
});
