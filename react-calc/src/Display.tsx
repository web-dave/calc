import { Component } from "react";
import "./Display.css";

export function Display(props: { value: string }) {
  return <output>{props.value}</output>;
}
// export class Display extends Component<{ value: string }> {
//   render() {
//     return <output>{this.props.value}</output>;
//   }
// }
