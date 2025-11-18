"use client";

import { useRouter } from "next/navigation";
import LoggoutButton from "../components/LoggoutButton";
import { useEffect } from "react";
import Button from "../components/Button";
import { MdAddBox, MdReceipt, MdList } from "react-icons/md";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleCadastrarProduto = () => {
    router.push("/cadastrar-produto");
  };

  const handleCriarNovoResumoPedido = () => {
    router.push("/criar-novo-resumo-pedido");
  };

  const handleProdutosCadastrados = () => {
    router.push("/produtos-cadastrados");
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
          label={"Cadastrar Produto"}
          icon={<MdAddBox />}
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
          label={"Produtos cadastrados"}
          icon={<MdList />}
          onclick={handleProdutosCadastrados}
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
          icon={<MdReceipt />}
          onclick={handleCriarNovoResumoPedido}
        />
      </div>
    </>
  );
}
