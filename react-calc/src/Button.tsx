export function Btn(props: {
  value: number | string;
  onFoo: (value: number | string | any) => void;
}) {
  return (
    <button onClick={() => props.onFoo(props.value)}>{props.value}</button>
  );
}
