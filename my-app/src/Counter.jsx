import { useState } from "react";
import { CounterState } from "./CounterState";

export function Counter({ initialValue = 0 }) {
  // ritorna un array: 1 elemento->stateVariable
  //  2 elemento->funzione che aggiorna la variabile
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    //usa sempre le callback/arrow function, così abbiamo la sicurezza di avere il valore più recente disponibile
    setCounter((c) => c + 1);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }
  function handleCounterReset() {
    setCounter(initialValue);
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
