export const result = (displayValue: string) => {
  let input = displayValue;
  let r = 0;
  // replace × with * and ÷ with / for eval()
  input = input.replace(/x/g, "*").replace(/÷/g, "/");
  // remove anything else that is not allowed here
  input = input.replace(/[^0-9. +\-*\/]/g, "");
  try {
    // eslint-disable-next-line no-eval
    r = eval(input);
  } catch (e) {
    r = 0;
  }

  console.log(r);
  return String(r);
};

export const clear = () => {
  return "";
};

export const input = (c: number | ".", displayValue: string) => {
  console.log(displayValue, c);
  if (displayValue.length === 1 && displayValue[0] === "0" && c !== ".") {
    displayValue = "";
  }

  displayValue += c;
  console.log(displayValue);
  return displayValue;
};

export const operator = (c: "+" | "-" | "÷" | "×", displayValue: string) => {
  displayValue += c;
  console.log(displayValue);
  return displayValue;
};
