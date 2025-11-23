"use client";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import InputDinheiro from "../components/InputDinheiro";
import produtos from "../lib/produtos";
import { useRouter } from "next/navigation";

export default function CadastrarProduto() {
  const [nomeDoPrato, setNomeDoPrato] = useState("");
  const [preco, setPreco] = useState(0);
  const [precoFormatado, setPrecoFormatado] = useState("");
  const router = useRouter();

  const handleVoltarTelaInicial = () => {
    router.push("/admin");
  };

  const produtoEstaCadastrado = () => {
    var produtoJaCadastrado = produtos.some((p) => p.nome === nomeDoPrato);

    if (produtoJaCadastrado) {
      window.alert("Produto ja está cadastrado no sistema.");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (produtoEstaCadastrado()) {
      return;
    }

    const novoProduto = {
      nome: nomeDoPrato,
      valor: preco / 100,
      valorFormatado: precoFormatado,
    };

    produtos.push(novoProduto);

    console.log(produtos);
    setNomeDoPrato("");
    setPreco(0);
    setPrecoFormatado("");
    window.alert("Produto cadastrado com sucesso");
    router.push("/cadastrar-produto");
  };

  const handleListarProdutosCadastrados = () => {
    router.push("produtos-cadastrados");
  };

  return (
    <>
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <Button label="Sair" type="button" onclick={handleVoltarTelaInicial} />
      </div>
      <div style={{ position: "fixed", top: 20, left: 20 }}>
        <Button label="Home" type="button" onclick={handleVoltarTelaInicial} />
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
              placeholder={"Digite o nome do prato"}
              label="Nome do prato: "
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <InputDinheiro
              value={preco}
              onChange={(e) => setPreco(e)}
              required={true}
              placeholder={"Inclua o preço do produto"}
              label="Preço: "
              onPrecoFormatado={setPrecoFormatado}
            />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <Button label="Cadastrar" type="submit" />
            <Button
              label={"Produtos Cadastrados"}
              type={"button"}
              onclick={handleListarProdutosCadastrados}
            />
          </div>
        </form>
      </div>
    </>
  );
}
