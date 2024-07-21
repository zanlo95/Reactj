import { useState } from "react";
import { CounterState } from "./CounterState";

export function Counter() {
  // ritorna un array: 1 elemento->stateVariable
  //  2 elemento->funzione che aggiorna la variabile
  const [counter, setCounter] = useState(0);

  function handleCounterIncrement() {
    //usa sempre le callback/arrow function
    setCounter((c) => c + 1);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }
  function handleCounterReset() {
    setCounter((c) => (c = 0));
  }
  return (
    <div>
      <CounterState counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
