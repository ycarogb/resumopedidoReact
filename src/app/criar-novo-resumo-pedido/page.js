"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import InputComBusca from "../components/InputComBusca";
import Input from "../components/Input";
import { MdAdd } from "react-icons/md";

export default function CriarNovoResumoPedido() {
  const router = useRouter();
  const [produtosDoResumo, setProdutosDoResumo] = useState([]);
  const [taxaDigitada, setTaxaDigitada] = useState("");
  const [taxaEntrega, setTaxaEntrega] = useState(0);

  const handleVoltarTelaInicial = () => {
    router.push("/admin");
  };

  const handleSelectProduto = (produto) => {
    setProdutosDoResumo([...produtosDoResumo, produto]);
  };

  const calcularTotal = () => {
    const totalProdutos = produtosDoResumo.reduce(
      (total, produto) => total + produto.valor,
      0
    );

    const totalPedido = totalProdutos + Number(taxaEntrega);
    return totalPedido;
  };

  const gerarTextoResumo = () => {
    let texto = "*📋 RESUMO DO PEDIDO*\n\n";

    produtosDoResumo.forEach((produto, index) => {
      texto += `${index + 1}. ${produto.nome} - ${produto.valorFormatado}\n`;
    });

    if (taxaEntrega) {
      texto += `Taxa de entrega - R$ ${taxaEntrega},00`;
    }

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

  const handleLimparResumo = () => {
    setProdutosDoResumo([]);
  };

  const handleCopiar = () => {
    navigator.clipboard.writeText(gerarTextoResumo());
    window.alert("Resumo copiado");
  };

  const handleAdicionarTaxaEntrega = () => {
    if (taxaDigitada) {
      setTaxaEntrega(taxaDigitada);
      setTaxaDigitada("");
    }
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
          marginTop: 150,
        }}
      >
        <InputComBusca
          label={"Escolher produto: "}
          placeholder={"Digite o nome aqui..."}
          onSelect={handleSelectProduto}
        />
        <div style={{ display: "flex", gap: 5, marginTop: 10 }}>
          <Input
            label={"Taxa de entrega: "}
            type={"text"}
            value={taxaDigitada}
            onChange={(e) => setTaxaDigitada(e.target.value)}
            required={false}
            placeholder={"Digite a taxa de entrega..."}
          />
          <Button
            type={"button"}
            onclick={handleAdicionarTaxaEntrega}
            style={{
              width: "20%",
              padding: 10,
              marginTop: 28,
            }}
            icon={<MdAdd />}
          />
        </div>

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
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <Button label={"Copiar"} onclick={() => handleCopiar()} />
              <Button label={"Limpar"} onclick={handleLimparResumo} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
