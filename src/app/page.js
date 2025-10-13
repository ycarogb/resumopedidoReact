"use client";

import { useState } from "react";
import AdminPainel from "./AdminPainel.js"; // Adjust the path if needed
import LoginForm from "./LoginForm.js"; // Add this import if LoginForm is also undefined

export default function Home() {
  let content;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state to toggle login

  return (
    <div>
      {isLoggedIn ? (
        <AdminPainel />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}
