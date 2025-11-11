import { funcoesUsuario } from "./funcoesUsuarios";

let usuariosCadastrados = [
  { email: "teste@teste.com", password: "123456", role: funcoesUsuario.ADMIN },
  { email: "teste2@teste.com", password: "teste2", role: funcoesUsuario.COMUM },
];

export default usuariosCadastrados;
