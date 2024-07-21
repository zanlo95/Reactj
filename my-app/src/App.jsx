import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
export function App() {
  return (
    <div>
      <HelloWorld />
      <hr />
      <Message />
      <hr />
      <Welcome name="John" age={29} />
      <AlertClock />
      <Counter />
    </div>
  );
}
