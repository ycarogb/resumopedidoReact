"use client";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import usuariosCadastrados from "../lib/usuarios";
import { useRouter } from "next/navigation";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPasswordConfirmation, setnewPasswordConfirmation] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioExistente = usuariosCadastrados.find((p) => p.email === email);
    if (!usuarioExistente) {
      return alert("Digite o email cadastrado no sistema.");
    }

    const confirmacaoNovaSenhaConfere = newPasswordConfirmation === newPassword;
    if (!confirmacaoNovaSenhaConfere) {
      return alert("Confirme nova senha com a mesma escolhida em 'Nova senha'");
    }

    usuarioExistente.password = newPassword;

    alert("Senha alterada com sucesso");
    router.push("/");

    console.log(usuariosCadastrados);
  };

  const handleVoltarTelaInicial = () => {
    router.push("/");
  };

  return (
    <>
      {/* Botão fixo no canto superior direito */}
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <Button
          label="Início"
          type="button"
          onclick={handleVoltarTelaInicial}
        />
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
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              required={true}
              placeholder={"Digite sua nova senha"}
              label="Nova senha: "
            />
          </div>
          <div>
            <Input
              type="password"
              value={newPasswordConfirmation}
              onChange={(e) => setnewPasswordConfirmation(e.target.value)}
              required={true}
              placeholder={"Confirme nova senha"}
              label="Confirme nova senha: "
            />
          </div>
          <Button label="Confirmar" type="submit" />
        </form>
      </div>
    </>
  );
};

export default RecuperarSenha;
