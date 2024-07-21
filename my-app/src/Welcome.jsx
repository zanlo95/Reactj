import { Age } from "./Age";
import { Message } from "./Message";

export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <strong>
        <p>You are {age} year's old</p>
      </strong>
      <p>
        <Age age={age} />
      </p>
      <p>{age > 18 && <Age age={age} />}</p>
      <p>{age && <Age age={age} />}</p>
      <p>{age > 18 && age < 65 && <Age age={age} />}</p>
      <p>{age > 18 && name === "John" ? <Age age={age} /> : null}</p>
      <Message age={age} />
    </div>
  );
}
