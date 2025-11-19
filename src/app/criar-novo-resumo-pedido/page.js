"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import InputComBusca from "../components/InputComBusca";

export default function CriarNovoResumoPedido() {
  const router = useRouter();

  let produtosDoResumo = [];

  const handleVoltarTelaInicial = () => {
    router.push("/admin");
  };

  const handleSelectProduto = (produto) => {
    produtosDoResumo.push(produto);

    console.log(produtosDoResumo);
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
        <InputComBusca
          label={"Escolher produto"}
          placeholder={"Digite o nome aqui..."}
          onSelect={handleSelectProduto}
        />
      </div>
    </>
  );
}
