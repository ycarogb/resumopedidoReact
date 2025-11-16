"use client";
import Input from "./Input";

export default function InputDinheiro({ value, placeholder, label }) {
  const handleChange = (value) => {
    const apenasNumeros = e.target.value.replace(/\D/g, "");
    const valorEmCentavos = Number(apenasNumeros);
    onChange(valorEmCentavos);
  };

  const formatarParaDinheiro = () => {};

  return (
    <>
      <Input
        type="text"
        value={formatarParaDinheiro(value || 0)}
        onChange={handleChange}
        required={true}
        placeholder={placeholder}
        auto-complete="off"
        label={label}
      />
    </>
  );
}
