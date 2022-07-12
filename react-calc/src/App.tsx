import { useState } from "react";
import React from "react";
import "./App.css";
import { Btn } from "./Button";
import { Display } from "./Display";
import { input, operator, clear, result } from "./calc";

export const App: React.FC<{}> = () => {
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
