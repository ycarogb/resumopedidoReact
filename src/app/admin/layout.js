"use client";

import { useRouter } from "next/navigation";
import LoggoutButton from "../components/LoggoutButton";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const dadosAutenticacao = JSON.parse(localStorage.getItem("auth"));

    if (!dadosAutenticacao?.isLoggedIn) {
      router.replace("/");
    }
  }, [router]);

  return (
    <>
      <div>
        <header
          style={{ display: "flex", justifyContent: "flex-end", padding: 10 }}
        ></header>
        <main>{children}</main>
        <LoggoutButton />
      </div>
    </>
  );
}
