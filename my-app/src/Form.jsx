function MyForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function handleInputChange(event) {
    const { name, value } = event.target; // destrutturazione degli attributi
    setData((data) => {
      return {
        ...data, // tiene lo stato precedente
        [name]: value, // Setta la chiave dinamicamente da `name` a `value`
      };
    });
  }
  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        value={data.password}
        type="password"
        onChange={handleInputChange}
      />
    </div>
  );
}
