function Button({ label }) {
  return (
    <button
      className="botoes"
      style={{ width: "100%", padding: 10, marginTop: 10 }}
      type="submit"
    >
      {label}
    </button>
  );
}
export default Button;
