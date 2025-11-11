function Button({ label, type, style, onclick }) {
  return (
    <button
      className="botoes"
      style={style ?? { width: "100%", padding: 10, marginTop: 10 }}
      type={type}
      onClick={onclick}
    >
      {label}
    </button>
  );
}
export default Button;
