"use client";

import { useState, React } from "react";
import Image from "next/image";
import Input from "./components/Input";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import usuariosCadastrados from "./lib/usuarios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioValido = usuariosCadastrados.some(
      (login) => login.email === email && login.password === password
    );

    if (usuarioValido) {
      const dadosAutenticacao = { isLoggedIn: true };
      localStorage.setItem("auth", JSON.stringify(dadosAutenticacao));
      window.alert("Login realizado com sucesso!");
      router.push("/admin");
    } else {
      setMessage("Email ou senha incorretos.");
    }
  };

  const handleRecuperarSenha = () => {
    router.push("/recuperar-senha");
  };

  return (
    <>
      <div>
        <div className="grid-cols-2 flex justify-center mt-10 mb-5">
          <h1 className="text-center mt-6 font-extrabold text-3xl">
            Bem-vindo ao ResumoPedido
          </h1>
          <Image
            width={100}
            height={100}
            src="/images/icone-carrinho.webp" // Caminho relativo à pasta public
            alt="carrinho de compras"
          />
        </div>
        <h2 className="text-center font-extrabold text-2xl">Login</h2>
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
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div style={{ marginBottom: 10 }}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              placeholder={"Digite seu email"}
              label="Email: "
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              placeholder={"Digite sua senha"}
              label="Senha: "
            />
          </div>
          <Button label="Entrar" type="submit" />
          <Button
            label="Recuperar senha"
            type="button"
            onclick={handleRecuperarSenha}
          />
        </form>
        {message && (
          <div className="mt-4 p-3 bg-red-100 border border-red-700 text-red-800 font-semibold text-center rounded-md shadow-sm">
            {message}
          </div>
        )}
      </div>
    </>
  );
}

export default LoginForm;
