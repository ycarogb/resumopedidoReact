"use client";
import Input from "./Input";
import { useEffect } from "react";

export default function InputDinheiro({
  value,
  placeholder,
  label,
  onChange,
  onPrecoFormatado,
}) {
  const handleChange = (e) => {
    const apenasNumeros = e.target.value.replace(/\D/g, "");
    const valorEmCentavos = Number(apenasNumeros);
    onChange(valorEmCentavos);
  };

  const formatarParaDinheiro = (valorEmCentavos) => {
    const valorEmReais = valorEmCentavos / 100;
    const valorFormatado = valorEmReais.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return valorFormatado;
  };

  useEffect(() => {
    const valorFormatado = formatarParaDinheiro(value || 0);
    onPrecoFormatado(valorFormatado);
  }, [value, onPrecoFormatado]);

  return (
    <>
      <Input
        type="text"
        value={formatarParaDinheiro(value || 0)}
        onChange={handleChange}
        required={true}
        placeholder={placeholder}
        autoComplete="off"
        label={label}
      />
    </>
  );
}
