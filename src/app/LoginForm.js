"use client";

import { useState, React } from "react";

function LoginForm({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simples validação para teste
    if (email === "teste@teste.com" && password === "123456") {
      setMessage("Login realizado com sucesso!");
      setIsLoggedIn(true); // Atualiza o estado de login
    } else {
      setMessage("Email ou senha incorretos.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 300,
        margin: "50px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Entrar
        </button>
      </form>
      {message && <div style={{ marginTop: 15 }}>{message}</div>}
    </div>
  );
}

export default LoginForm;
