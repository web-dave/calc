import { Calc } from "./components/app/calc";

import "./global.css";

export const Root = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Calc />
      </body>
    </html>
  );
};
