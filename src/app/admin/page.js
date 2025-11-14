"use client";

import { useRouter } from "next/navigation";
import LoggoutButton from "../components/LoggoutButton";
import { useEffect } from "react";
import Button from "../components/Button";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleCadastrarProduto = () => {
    router.push("/cadastrar-produto");
  };

  useEffect(() => {
    const dadosAutenticacao = JSON.parse(localStorage.getItem("auth"));

    if (!dadosAutenticacao?.isLoggedIn) {
      router.replace("/");
    }
  }, [router]);

  return (
    <>
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <LoggoutButton />
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
        <Button
          style={{
            maxWidth: 500,
            width: "100%",
            margin: "10px auto",
            padding: 20,
            border: "1px solid #ccc",
            borderRadius: 8,
          }}
          label={"Cadastrar produto"}
          onclick={handleCadastrarProduto}
        />
        <Button
          style={{
            maxWidth: 500,
            width: "100%",
            margin: "10px auto",
            padding: 20,
            border: "1px solid #ccc",
            borderRadius: 8,
          }}
          label={"Novo Pedido"}
          onclick={handleCadastrarProduto}
        />
      </div>
    </>
  );
}
