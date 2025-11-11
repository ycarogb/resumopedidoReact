"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import usuariosCadastrados from "../lib/usuarios";
import { funcoesUsuario } from "../lib/funcoesUsuarios";

const CadastrarUsuario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswordConfirmation, setnewPasswordConfirmation] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const handleVoltarTelaInicial = () => {
    router.push("/");
  };

  const validarEmailExistente = () => {
    var emailJaCadastrado = usuariosCadastrados.some((p) => p.email === email);

    if (emailJaCadastrado) {
      return window.alert("Email ja está cadastrado no sistema.");
    }
  };

  const validarConfirmacaoSenha = () => {
    const confirmacaoNovaSenhaConfere = newPasswordConfirmation === password;
    if (!confirmacaoNovaSenhaConfere) {
      return alert("Confirme com a mesma escolhida em anteriormente!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validarEmailExistente();
    validarConfirmacaoSenha();

    const novoUsuario = {
      email: email,
      password: password,
      role: isAdmin ? funcoesUsuario.ADMIN : funcoesUsuario.COMUM,
    };

    usuariosCadastrados.push(novoUsuario);

    window.alert("Usuário cadastrado com sucesso");
    router.push("/");
  };

  return (
    <>
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <Button label="Sair" type="button" onclick={handleVoltarTelaInicial} />
      </div>
      <div
        style={{
          maxWidth: 300,
          margin: "100px auto",
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
          <div>
            <Input
              type="password"
              value={newPasswordConfirmation}
              onChange={(e) => setnewPasswordConfirmation(e.target.value)}
              required={true}
              placeholder={"Confirme sua senha"}
              label="Confirmar senha: "
            />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <Button
              label="Cadastrar"
              type="submit"
              style={{ flex: 7, padding: 10 }}
            />

            <div
              style={{
                flex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #ff69b4",
                borderRadius: 8,
                padding: 10,
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  cursor: "pointer",
                }}
              >
                <Input
                  type="checkbox"
                  style={{
                    width: 18,
                    height: 18,
                    cursor: "pointer",
                    accentColor: "#ff69b4",
                  }}
                  checked={isAdmin}
                  onChange={(p) => setIsAdmin(p.target.checked)}
                />
                <span style={{ fontSize: 16, whiteSpace: "nowrap" }}>
                  Admin
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CadastrarUsuario;
