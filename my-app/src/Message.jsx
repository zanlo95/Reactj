export function Message({ age }) {
  return <p>{age > 18 ? `Hai ${age} anni.` : "Sei molto giovane!"}</p>;
}
