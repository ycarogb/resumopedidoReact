function Input({ type, value, onChange, placeholder, required, label }) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="inputs bg-foreground text-background rounded-md"
        style={{ width: "100%", padding: 10, marginTop: 10 }}
        required={required}
        placeholder={placeholder}
        auto-complete="off"
      ></input>
    </>
  );
}
export default Input;
