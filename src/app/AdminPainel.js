"use client";

import { useState, React } from "react";

const usersMock = [
  { id: 1, name: "Alice", role: "User" },
  { id: 2, name: "Bob", role: "Admin" },
  { id: 3, name: "Carol", role: "User" },
];

export default function AdminPainel() {
  const [users, setUsers] = useState(usersMock);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Aqui será a tela onde serão feitas os resumos de pedidos</h1>
    </div>
  );
}
