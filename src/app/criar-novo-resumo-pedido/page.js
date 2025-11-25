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
  const [descontoDigitado, setdescontoDigitado] = useState("");
  const [descontoAplicado, setDescontoAplicado] = useState(0);

  const handleVoltarTelaInicial = () => {
    router.push("/admin");
  };

  const handleSelectProduto = (produto) => {
    setProdutosDoResumo([...produtosDoResumo, produto]);
  };

  const calcularDesconto = (totalProdutos) => {
    if (!descontoAplicado) {
      return 0;
    }

    const result = totalProdutos * (Number(descontoAplicado) / 100);
    return result;
  };

  const calcularTotal = () => {
    const totalProdutos = produtosDoResumo.reduce(
      (total, produto) => total + produto.valor,
      0
    );

    const totalPedido =
      totalProdutos + Number(taxaEntrega) - calcularDesconto(totalProdutos);

    return totalPedido;
  };

  const gerarTextoResumo = () => {
    let texto = "*📋 RESUMO DO PEDIDO*\n\n";

    produtosDoResumo.forEach((produto, index) => {
      texto += `${index + 1}. ${produto.nome} - ${produto.valorFormatado}\n`;
    });

    if (taxaEntrega) {
      texto += `Taxa de entrega - R$ ${taxaEntrega},00\n`;
    }

    if (descontoAplicado) {
      texto += `Desconto aplicado - ${descontoAplicado}%`;
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
    setTaxaEntrega(0);
    setDescontoAplicado(0);
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

  const handleAplicarDesconto = () => {
    if (descontoDigitado) {
      setDescontoAplicado(descontoDigitado);
      setdescontoDigitado("");
    }
  };

  const handleExcluirProduto = (produto) => {
    var novosProdutosDoResumo = produtosDoResumo.filter(
      (p) => p.nome !== produto.nome
    );
    setProdutosDoResumo(novosProdutosDoResumo);
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
        <div style={{ display: "flex", gap: 5, marginTop: 10 }}>
          <Input
            label={"Aplicar desconto (%): "}
            type={"text"}
            value={descontoDigitado}
            onChange={(e) => setdescontoDigitado(e.target.value)}
            required={false}
            placeholder={"Digite o desconto em %..."}
          />
          <Button
            type={"button"}
            onclick={handleAplicarDesconto}
            style={{
              width: "20%",
              padding: 10,
              marginTop: 28,
            }}
            label={"—"}
          />
        </div>
        {produtosDoResumo.length > 0 && (
          <>
            <div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  color: "white",
                  marginBottom: 40,
                  marginTop: 20,
                }}
              >
                <thead style={{ backgroundColor: "#ec31ae" }}>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ccc",
                        padding: 10,
                        textAlign: "left",
                        width: "80%",
                      }}
                    >
                      Produtos selecionados
                    </th>
                    <th
                      style={{
                        border: "1px solid #ccc",
                        padding: 10,
                        textAlign: "left",
                      }}
                    >
                      Excluir
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {produtosDoResumo.map((produto, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: 12,
                        }}
                      >
                        {produto.nome}
                      </td>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: 12,
                        }}
                      >
                        <Button
                          label={"—"}
                          style={{
                            width: "50%",
                            padding: 5,
                            marginLeft: 20,
                            marginTop: 5,
                          }}
                          type={"button"}
                          onclick={() => handleExcluirProduto(produto)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
          </>
        )}
      </div>
    </>
  );
}
