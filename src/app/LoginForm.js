"use client";

import { useState, React } from "react";
import Image from "next/image";
import Input from "./components/Input";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import usuariosCadastrados from "./lib/usuarios";
import { funcoesUsuario } from "./lib/funcoesUsuarios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioValido = usuariosCadastrados.find(
      (login) => login.email === email && login.password === password
    );

    if (usuarioValido) {
      const dadosAutenticacao = {
        isLoggedIn: true,
        funcaoUsuario: usuarioValido.role,
      };
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

  const handleCadastrarUsuario = () => {
    router.push("/cadastrar-usuario");
  };

  const responseGoogle = (response) => {
    const usuarioGoogle = jwtDecode(response.credential);
    const dadosAutenticacao = {
      isLoggedIn: true,
      funcaoUsuario: funcoesUsuario.COMUM,
      loginType: "Google",
    };

    if (
      usuarioGoogle.email === "ycarobatalha1@gmail.com" ||
      "wallacefcosta@gmail.com"
    ) {
      dadosAutenticacao.funcaoUsuario = funcoesUsuario.ADMIN;
    }

    localStorage.setItem("auth", JSON.stringify(dadosAutenticacao));

    router.push("/admin");
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
          <div style={{ display: "flex", gap: 10, marginTop: 5 }}>
            <Button
              label="Entrar"
              type="submit"
              style={{
                width: "100%",
                padding: 10,
                marginTop: 10,
                marginBottom: 5,
              }}
            />
          </div>
          <GoogleLogin
            clientID="1011143551853-fl96ut3dhue6bqfv3jge31q8hspr1nit.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          <div style={{ display: "flex", gap: 10, marginTop: 5 }}>
            <Button
              label="Recuperar senha"
              type="button"
              onclick={handleRecuperarSenha}
              style={{ width: "50%", padding: 10, marginTop: 10 }}
            />
            <Button
              label="Cadastrar usuário"
              type="button"
              onclick={handleCadastrarUsuario}
              style={{ width: "50%", padding: 10, marginTop: 10 }}
            />
          </div>
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
