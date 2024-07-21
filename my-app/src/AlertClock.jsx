import { Button } from "./Button";

export function AlertClock() {
  function handleButtonClick() {
    alert("Current time: " + new Date().toLocaleTimeString());
  }
  return (
    <div>
      <Button onClick={handleButtonClick} title="Cliccami!" />
    </div>
  );
}
