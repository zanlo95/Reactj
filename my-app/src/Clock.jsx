import React, { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 10000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}
