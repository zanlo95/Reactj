import React, { useState, useEffect } from "react";

export function UseEffect() {
  const [count, setCount] = useState(0);

  // useEffect viene eseguito dopo ogni render del componente!!
  useEffect(() => {
    alert("Il componente è stato renderizzato o aggiornato");

    // clean-up--->eseguito prima del prossimo useEffect o quando il componente viene rimosso
    return () => {
      alert("Il componente sta per essere aggiornato o rimosso");
    };
  }, [count]); // --> dependency array(?)

  return (
    <div>
      <p>Hai cliccato {count} volte</p>
      <button onClick={() => setCount((c) => c + 1)}>Cliccami</button>
    </div>
  );
}
