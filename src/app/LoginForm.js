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
    <>
      <div>
        <h1 className={"text-center mt-24 font-sans text-4xl"}>
          Bem-vindo ao ResumoPedido
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: 40,
            marginTop: 50,
          }}
        >
          Login
        </h2>
      </div>
      <div
        style={{
          maxWidth: 300,
          margin: "50px auto",
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 8,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 10 }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputs"
              style={{ width: "100%", padding: 10, marginTop: 10 }}
              required
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputs"
              style={{ width: "100%", padding: 10, marginTop: 10 }}
              required
            />
          </div>
          <button
            type="submit"
            className="botoes"
            style={{ width: "100%", padding: 10, marginTop: 10 }}
          >
            Entrar
          </button>
        </form>
        {message && <div style={{ marginTop: 15 }}>{message}</div>}
      </div>
    </>
  );
}

export default LoginForm;
