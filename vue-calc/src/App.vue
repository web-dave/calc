<template>
  <h1>welcome to {{ title }}!</h1>
  <h1>Taschenrechner</h1>
  <main role="main">
    <div id="calc">
      <AppDisplay :out="out" />
      <fieldset>
        <AppBtn @pong="input" value="7" />
        <AppBtn @pong="input" value="8" />
        <AppBtn @pong="input" value="9" />
        <AppBtn @pong="operator('+')" value="+" />
        <AppBtn @pong="input" value="4" />
        <AppBtn @pong="input" value="5" />
        <AppBtn @pong="input" value="6" />
        <AppBtn @pong="operator('-')" value="-" />
        <AppBtn @pong="input" value="1" />
        <AppBtn @pong="input" value="2" />
        <AppBtn @pong="input" value="3" />
        <AppBtn @pong="operator('x')" value="x" />
        <AppBtn @pong="input" value="." />
        <AppBtn @pong="input" value="0" />
        <AppBtn @pong="clear()" value="C" />
        <AppBtn @pong="operator('/')" value="÷" />
        <AppBtn @pong="result()" value="=" />
      </fieldset>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import AppDisplay from "./components/AppDisplay.vue";
import AppBtn from "./components/AppBtn.vue";
const title = ref("vue-calc");
let displayValue = [0];
let out = ref("");

function clear() {
  displayValue = [0];
  out.value = displayValue.join("");
}
function input(c) {
  if (displayValue.length === 1 && displayValue[0] === 0 && c != ".") {
    displayValue = [];
  }

  displayValue.push(c);
  out.value = displayValue.join("");
}

function operator(c) {
  displayValue.push(c);
  out.value = displayValue.join("");
}

function result(noDisplay = false) {
  let input = displayValue.join("");
  let r = 0;
  // replace × with * and ÷ with / for eval()
  input = input.replace(/x/g, "*").replace(/÷/g, "/");
  // remove anything else that is not allowed here
  input = input.replace(/[^0-9. +\-*/]/g, "");
  try {
    r = eval(input);
  } catch (e) {
    r = 0;
  }
  if (noDisplay !== true) {
    out.value = String(r);
  }
  return r;
}
</script>
<style>
#calc {
  background: royalblue;
  border: 1px solid darkblue;
  border-radius: 0.5em;
  box-shadow: inset 0 0 5px white;
  display: inline-block;
  padding: 1em 0;
  text-align: center;
  width: 15em;
}

#calc fieldset {
  border: none;
  margin: 0 auto;
  padding-bottom: 0;
}

#usage {
  display: inline-block;
  padding: 0 0 0 2em;
  vertical-align: top;
}
</style>
