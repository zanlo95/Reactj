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
      <Welcome name="Lorenzo" age={29} />
    </div>
  );
}
