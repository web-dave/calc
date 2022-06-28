import { component$, QRL, useStore, useStyles$ } from "@builder.io/qwik";
import css from "./style.css?inline";
interface CalcState {
  display: any[];
}
export const Calc = component$(() => {
  useStyles$(css);
  const store = useStore<CalcState>({ display: [0] }, { recursive: true });
  return (
    <>
      <h1>Taschenrechner</h1>
      <main role="main">
        <div id="calc">
          <Display store={store} />
          <fieldset>
            <button onClick$={() => input(store, 7)} class="input_7">
              7
            </button>
            <button onClick$={() => input(store, 8)} class="input_7">
              8
            </button>
            <button onClick$={() => input(store, 9)} class="input_7">
              9
            </button>
            <button onClick$={() => operator(store, "+")} class="input_add">
              +
            </button>
            <button onClick$={() => input(store, 4)} class="input_4">
              4
            </button>
            <button onClick$={() => input(store, 5)} class="input_5">
              5
            </button>
            <button onClick$={() => input(store, 6)} class="input_6">
              6
            </button>
            <button onClick$={() => operator(store, "-")} class="input_sub">
              -
            </button>
            <button onClick$={() => input(store, 1)} class="input_1">
              1
            </button>
            <button onClick$={() => input(store, 2)} class="input_2">
              2
            </button>
            <button onClick$={() => input(store, 3)} class="input_3">
              3
            </button>
            <button onClick$={() => operator(store, "x")} class="input_x">
              ×
            </button>
            <button onClick$={() => input(store, ".")} class="input_dez">
              .
            </button>
            <button onClick$={() => input(store, 0)} class="input_0">
              0
            </button>
            <button
              onClick$={() => {
                if (store.display.length != 1) {
                  store.display.length = 1;
                }
                if (store.display[0] != 0) {
                  store.display[0] = 0;
                }
              }}
              class="input_C"
            >
              C
            </button>
            <button onClick$={() => operator(store, "/")} class="input_dif">
              ÷
            </button>
            <button onClick$={() => result(store)} class="input_eq">
              =
            </button>
          </fieldset>
        </div>
      </main>
    </>
  );
});

export function clear(state: CalcState) {
  state.display = [0];
}

export function input(state: CalcState, c: any) {
  if (state.display.length === 1 && state.display[0] === 0 && c != ".") {
    state.display = [];
  }

  state.display.push(c);
}

export const Display = component$((props: { store: CalcState }) => {
  return <output>{props.store.display.join("")}</output>;
});

export function operator(state: CalcState, c: "-" | "+" | "x" | "/") {
  state.display.push(c);
}

export function result(state: CalcState) {
  let input = state.display.join("");
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
  state.display = [r];
}

// export const Btn = component$(
//   (props: { value: number; onPongQrl?: QRL<(value: number) => void> }) => {
//     return (
//       <button
//         onClick$={() => input(store, 5)}
//         onClick$={async () => await props.onPongQrl?.invoke(props.value)}
//         class="input_sub"
//       >
//         {props.value}
//       </button>
//     );
//   }
// );
