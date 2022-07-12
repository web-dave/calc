import "./Display.css";

export function Display(props: { value: string }) {
  return <output>{props.value}</output>;
}
