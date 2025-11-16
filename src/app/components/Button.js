function Button({ label, type, style, onclick, icon }) {
  return (
    <button
      className="botoes"
      style={style ?? { width: "100%", padding: 10, marginTop: 10 }}
      type={type}
      onClick={onclick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {icon && <span style={{ fontSize: 24 }}>{icon}</span>}
      </div>
      {label}
    </button>
  );
}
export default Button;
