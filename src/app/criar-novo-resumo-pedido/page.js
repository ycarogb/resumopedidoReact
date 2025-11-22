"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import InputComBusca from "../components/InputComBusca";

export default function CriarNovoResumoPedido() {
  const router = useRouter();
  const [produtosDoResumo, setProdutosDoResumo] = useState([]);

  const handleVoltarTelaInicial = () => {
    router.push("/admin");
  };

  const handleSelectProduto = (produto) => {
    setProdutosDoResumo([...produtosDoResumo, produto]);
  };

  const calcularTotal = () => {
    return produtosDoResumo.reduce(
      (total, produto) => total + produto.valor,
      0
    );
  };

  const gerarTextoResumo = () => {
    let texto = "*📋 RESUMO DO PEDIDO*\n\n";

    produtosDoResumo.forEach((produto, index) => {
      texto += `${index + 1}. ${produto.nome} - ${produto.valorFormatado}\n`;
    });

    texto += "\n━━━━━━━━━━━━━━━━━━━━\n";
    const totalFormatado = calcularTotal().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    texto += `*TOTAL: ${totalFormatado}*`;

    return texto;
  };

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <>
      <div style={{ position: "fixed", top: 20, left: 20 }}>
        <Button label="Home" type="button" onclick={handleVoltarTelaInicial} />
      </div>
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <Button label="Sair" type="button" onclick={handleLogout} />
      </div>
      <div
        style={{
          maxWidth: 600,
          margin: "100px auto",
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 8,
        }}
      >
        <InputComBusca
          label={"Escolher produto"}
          placeholder={"Digite o nome aqui..."}
          onSelect={handleSelectProduto}
        />

        {produtosDoResumo.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <textarea
              value={gerarTextoResumo()}
              readOnly
              rows={10}
              style={{
                width: "100%",
                padding: 30,
                fontFamily: "monospace",
                fontSize: 12,
                border: "1px solid #ccc",
                borderRadius: 8,
                resize: "none",
                alignContent: "center",
              }}
            />
            <Button
              label="Copiar"
              onclick={() => navigator.clipboard.writeText(gerarTextoResumo())}
              style={{ marginTop: 5 }}
            />
          </div>
        )}
      </div>
    </>
  );
}
