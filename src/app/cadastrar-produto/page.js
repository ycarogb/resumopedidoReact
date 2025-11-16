"use client";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import InputDinheiro from "../components/InputDinheiro";
export default function CadastrarProduto() {
  const [nomeDoPrato, setNomeDoPrato] = useState();
  const [preco, setPreco] = useState();

  const handleVoltarTelaInicial = () => {
    router.push("/admin");
  };

  const handleSubmit = () => {};

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
              type="text"
              value={nomeDoPrato}
              onChange={(e) => setNomeDoPrato(e.target.value)}
              required={true}
              placeholder={"Nome do prato"}
              label="Nome do prato: "
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <InputDinheiro
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
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
}
