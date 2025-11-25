function Input({ type, value, onChange, placeholder, required, label, style }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {label && <label style={{ marginBottom: 5 }}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="inputs bg-foreground text-background rounded-md"
        style={
          style ?? {
            width: "100%",
            padding: 10,
          }
        }
        required={required}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}
export default Input;
