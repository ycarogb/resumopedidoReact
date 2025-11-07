"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

const LoggoutButton = () => {
  const router = useRouter();

  const realizaLogout = () => {
    localStorage.removeItem("auth");
    router.replace("/");
  };
  return (
    <>
      <Button label={"Sair"} type="button" onclick={realizaLogout} />
    </>
  );
};

export default LoggoutButton;
