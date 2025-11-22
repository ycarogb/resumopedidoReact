"use client";

import { useState, useRef, useEffect } from "react";
import produtos from "../lib/produtos";
import Button from "./Button";

export default function InputComBusca({ onSelect, label, placeholder }) {
  const [textoDigitado, setTextoDigitado] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Fecha o dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const opcoesFiltradas = produtos.filter((produto) => {
    return produto.nome.toLowerCase().includes(textoDigitado.toLowerCase());
  });

  const handleSelect = (produto) => {
    setIsOpen(false);
    if (onSelect) onSelect(produto);
  };

  const abrirMenuSuspenso = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {label && <label>{label}</label>}
      <div style={{ display: "flex", gap: 5 }}>
        <input
          type="text"
          className="input-busca"
          placeholder={placeholder}
          value={textoDigitado}
          onChange={(e) => {
            setTextoDigitado(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          style={{
            width: "100%",
            padding: 2,
            border: "2px solid #e0e0e0",
            borderRadius: 8,
            backgroundColor: "white",
            color: "#333",
            fontSize: 16,
            outline: "none",
            transition: "all 0.3s ease",
            marginTop: 5,
            width: "800%",
          }}
        />
        <Button onclick={abrirMenuSuspenso} type={"button"} label={"▼"} />
      </div>
      {isOpen &&
        (textoDigitado === "" ? produtos : opcoesFiltradas).length > 0 && (
          <ul
            style={{
              border: "1px solid #ccc",
              maxHeight: 200,
              overflowY: "auto",
              listStyle: "none",
              padding: 0,
              margin: 0,
              position: "absolute",
              backgroundColor: "#063b77", // Fundo azul escuro
              width: "100%",
              zIndex: 1000,
            }}
          >
            {(textoDigitado === "" ? produtos : opcoesFiltradas).map(
              (produto, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(produto)}
                  style={{
                    padding: 10,
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                    color: "white", // Texto branco nos itens
                  }}
                >
                  {produto.nome}
                </li>
              )
            )}
          </ul>
        )}
    </div>
  );
}
