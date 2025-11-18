"use client";
import produtos from "../lib/produtos";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function ProdutosCadastrados() {
  const router = useRouter();

  const handleVoltarTelaInicial = () => {
    router.push("/admin");
  };

  const handleCadastrarProduto = () => {
    router.push("cadastrar-produto");
  };

  const handleSair = () => {
    router.push("/");
  };

  const handleExcluirProduto = (produto) => {
    const index = produtos.findIndex((p) => p.nome === produto.nome);

    if (index > -1) {
      produtos.splice(index, 1);
      console.log(produtos);
      router.push("/produtos-cadastrados");
      return;
    }

    console.log(produtos);
  };

  return (
    <>
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <Button label="Sair" type="button" onclick={handleSair} />
      </div>
      <div style={{ position: "fixed", top: 20, left: 20 }}>
        <Button label="Home" type="button" onclick={handleVoltarTelaInicial} />
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
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          Produtos Cadastrados
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "white",
            marginBottom: 40,
          }}
        >
          <thead style={{ backgroundColor: "#ec31ae" }}>
            <tr>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: 12,
                  textAlign: "left",
                }}
              >
                Produto
              </th>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: 12,
                  textAlign: "left",
                }}
              >
                Preço
              </th>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: 12,
                  textAlign: "left",
                }}
              >
                Excluir
              </th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
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
                  {produto.valor}
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
        <Button
          label={"Cadastrar novo produto"}
          type={"button"}
          onclick={handleCadastrarProduto}
        />
      </div>
    </>
  );
}
