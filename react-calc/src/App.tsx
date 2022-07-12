import { useState } from "react";
import React from "react";
import "./App.css";
import { Btn } from "./Button";
import { Display } from "./Display";
import { input, operator, clear, result } from "./calc";

export const App: React.FC<{}> = () => {
  let displayValue: (number | string)[] = [0];
  const [out, setOut] = useState<string>("");
  return (
    <>
      <h1>react-calc</h1>
      <main role="main">
        <div id="calc">
          <Display value={out} />
          <fieldset>
            <Btn onFoo={(e) => setOut(input(e, out))} value={7} />
            <Btn onFoo={(e) => setOut(input(e, out))} value={8} />
            <Btn onFoo={(e) => setOut(input(e, out))} value={9} />
            <Btn onFoo={(e) => setOut(operator(e, out))} value="+" />
            <Btn onFoo={(e) => setOut(input(e, out))} value={4} />
            <Btn onFoo={(e) => setOut(input(e, out))} value={5} />
            <Btn onFoo={(e) => setOut(input(e, out))} value={6} />
            <Btn onFoo={(e) => setOut(operator(e, out))} value="-" />
            <Btn onFoo={(e) => setOut(input(e, out))} value={1} />
            <Btn onFoo={(e) => setOut(input(e, out))} value={2} />
            <Btn onFoo={(e) => setOut(input(e, out))} value={3} />
            <Btn onFoo={(e) => setOut(operator(e, out))} value="x" />
            <Btn onFoo={(e) => setOut(input(e, out))} value="." />
            <Btn onFoo={(e) => setOut(input(e, out))} value={0} />
            <Btn onFoo={(e) => setOut(clear())} value="C" />
            <Btn onFoo={(e) => setOut(operator(e, out))} value="÷" />
            <Btn onFoo={(e) => setOut(result(out))} value="=" />
          </fieldset>
        </div>
      </main>
    </>
  );
};

// export function Appe() {
//   const [out, setOut] = useState<string>("");
//   // out = fout;
//   // setOut = fsetOut;
//   function result(noDisplay = false) {
//     let input = displayValue.join("");
//     let r = 0;
//     // replace × with * and ÷ with / for eval()
//     input = input.replace(/x/g, "*").replace(/÷/g, "/");
//     // remove anything else that is not allowed here
//     input = input.replace(/[^0-9. +\-*\/]/g, "");
//     try {
//       // eslint-disable-next-line no-eval
//       r = eval(input);
//     } catch (e) {
//       r = 0;
//     }
//     if (noDisplay !== true) {
//       setOut(String(r));
//     }
//     console.log(r);
//     return r;
//   }

//   function clear() {
//     displayValue = [0];
//     setOut(displayValue.join(""));
//   }

//   function input(c: number | ".") {
//     if (displayValue.length === 1 && displayValue[0] === 0 && c !== ".") {
//       displayValue = [];
//     }

//     displayValue.push(c);
//     console.log(displayValue.join(""));
//     setOut(displayValue.join(""));
//     // out = displayValue.join("");
//     // setState({ out: displayValue.join("") });
//   }

//   function operator(c: "+" | "-" | "÷" | "×") {
//     displayValue.push(c);
//     console.log(displayValue.join(""));
//     setOut(displayValue.join(""));
//     // this.setState({ out: displayValue.join("") });
//   }

//   return (
//     <>
//       <h1>react-calc</h1>
//       <main role="main">
//         <div id="calc">
//           <Display value={out} />
//           <fieldset>
//             <Btn onFoo={input} value={7} />
//             <Btn onFoo={input} value={8} />
//             <Btn onFoo={input} value={9} />
//             <Btn onFoo={operator} value="+" />
//             <Btn onFoo={input} value={4} />
//             <Btn onFoo={input} value={5} />
//             <Btn onFoo={input} value={6} />
//             <Btn onFoo={operator} value="-" />
//             <Btn onFoo={input} value={1} />
//             <Btn onFoo={input} value={2} />
//             <Btn onFoo={input} value={3} />
//             <Btn onFoo={operator} value="x" />
//             <Btn onFoo={input} value="." />
//             <Btn onFoo={input} value={0} />
//             <Btn onFoo={clear} value="C" />
//             <Btn onFoo={operator} value="÷" />
//             <Btn onFoo={result} value="=" />
//           </fieldset>
//         </div>
//       </main>
//     </>
//   );
// }
/*
class App1 extends React.Component {
  overwrite = true;

  constructor(props: any) {
    super(props);
    this.input = this.input.bind(this);
    this.state = { out: "" };
  }
  handleFoo(val: any) {
    console.log(val);
  }

  clear() {
    displayValue = [0];
    out = displayValue.join("");
  }

  input(c: number | ".") {
    if (displayValue.length === 1 && displayValue[0] === 0 && c !== ".") {
      displayValue = [];
    }

    displayValue.push(c);
    console.log(displayValue.join(""));
    out = displayValue.join("");
    this.setState({ out: displayValue.join("") });
  }

  operator(c: "+" | "-" | "÷" | "×") {
    displayValue.push(c);
    console.log(displayValue.join(""));
    out = displayValue.join("");
    this.setState({ out: displayValue.join("") });
  }

  result(noDisplay = false) {
    let input = displayValue.join("");
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
    if (noDisplay !== true) {
      out = String(r);
    }
    console.log(r);
    return r;
  }
  render() {
    return (
      <>
        <h1>react-calc</h1>
        <main role="main">
          <div id="calc">
            <Display value={out} />
            <fieldset>
              <Btn onFoo={this.input} value={7} />
              <Btn onFoo={this.input} value={8} />
              <Btn onFoo={this.input} value={9} />
              <Btn onFoo={this.operator} value="+" />
              <Btn onFoo={this.input} value={4} />
              <Btn onFoo={this.input} value={5} />
              <Btn onFoo={this.input} value={6} />
              <Btn onFoo={this.operator} value="-" />
              <Btn onFoo={this.input} value={1} />
              <Btn onFoo={this.input} value={2} />
              <Btn onFoo={this.input} value={3} />
              <Btn onFoo={this.operator} value="x" />
              <Btn onFoo={this.input} value="." />
              <Btn onFoo={this.input} value={0} />
              <Btn onFoo={this.clear} value="C" />
              <Btn onFoo={this.operator} value="÷" />
              <Btn onFoo={this.result} value="=" />
            </fieldset>
          </div>
        </main>
      </>
    );
  }
}
*/
// export default App;
