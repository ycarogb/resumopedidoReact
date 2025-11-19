"use client";

import { useState, useRef, useEffect } from "react";
import produtos from "../lib/produtos";

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
    setTextoDigitado(produto.nome);
    setIsOpen(false);
    if (onSelect) onSelect(produto);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {label && <label>{label}</label>}
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder={placeholder}
          value={textoDigitado}
          onChange={(e) => {
            setTextoDigitado(e.target.value);
            setIsOpen(true); // Abre o dropdown ao digitar
          }}
          onFocus={() => setIsOpen(true)}
          style={{
            width: "100%",
            padding: 8,
            paddingRight: 30,
            border: "1px solid white", // Borda branca fina
            backgroundColor: "transparent", // Fundo transparente para o input
            color: "white", // Texto branco no input
          }}
        />
        <button
          onClick={toggleDropdown}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 30,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          ▼
        </button>
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
