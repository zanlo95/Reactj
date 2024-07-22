export function MouseClicker() {
  function handleButtonClickOne(event) {
    console.log(event.target.name);
  }
  function handleButtonClickTwo(event) {
    console.log(event.target.src);
  }
  return (
    <div>
      <button name="one" onClick={handleButtonClickOne}>
        Button One
      </button>
      <hr />
      <button name="two" onClick={handleButtonClickTwo}>
        Button Two
        <img
          width={24}
          height={24}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fadventure%2Farticle%2F140127-cats-pets-animals-nation-dogs-people-science&psig=AOvVaw3Y4pVa0mW8U_8ZEEhzagmY&ust=1721719259502000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPivmJyOuocDFQAAAAAdAAAAABAE"
          alt=""
        />
      </button>
    </div>
  );
}
