# ResumoPedidosApp (Versão 2.0)

Essa aplicação tem objetivo gerar um resumo de pedido. O resumo é composto por todos os produtos solicitados pelo cliente, incluindo a taxa de entrega e uma porcentagem de desconto (caso seja do interesse do usuário). 
O resumo é um texto com o formato ideal para compartilhar via mensagem para os clientes do usuário.

A primeira versão desse projeto consiste em uma api em .NET, que pode ser visitada [clicando aqui](https://github.com/ycarogb/ResumoPedidosApp). Agora, a segunda versão é no formato em frontend, com dados estáticos incluídos diretamente no código da aplicação. O que será que virá por aí? 

[![Generic badge](https://img.shields.io/badge/Version-2.0-<COLOR>.svg)](https://shields.io/)
---

## 🚀 Funcionalidades

- Autenticação de usuário via login e senha cadastrados na aplicação
- Autenticação via conta do Google
- Adicionar e remover registros de pratos com descrição e valor (_como os dados são estáticos nessa versão, essas alterações nos registros são desfeitas ao atualizar a página_)
- Consulta à lista de produtos cadastrados
- Geração do resumo do pedido em formato de texto
- Permissão para copiar o texto do resumo

---

## 🧱 Tecnologias

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🔧 Como executar

1. Clone o repositório:
   
    ```sh
    git clone https://github.com/ycarogb/resumopedidoReact.git
    cd resumoPedidoReact
    ```
   
2. Instale as dependências:

   ```sh
   npm install
   ```

3. Rode o projeto em modo desenvolvimento:

   ```sh
   npm run dev
   ```

4. Acesse no navegador:
    ```
    http://localhost:3000
    ```

## 🧩 Estrutura do projeto

- **public/** – Arquivos oriundos da criação do projeto React
- **public/images**  – Imagens utilizadas no desenvolvimento da aplicação
- **src/** – página de login e arquivos de configuração de estilização com css
- **src/admin/** - página inicial da aplicação
- **src/cadastrar-produto/** - página de cadastrar produto
- **src/cadastrar-usuario/** - página de cadastrar usuário
- **src/components/** - pasta com os componentes do frontend
- **src/criar-novo-resumo-pedido/** - página para geração de resumo do pedido
- **src/lib/** - pasta com os dados estáticos de pratos e usuários
- **src/produtos-cadastrados/** - página de listagem dos produtos cadastrados
- **src/recuperar-senha/** - página para recuperação de senha dos usuários



## 👥 Autoria

 <img style="border-radius: 80%;" src="https://i1.sndcdn.com/avatars-001002863491-80v8qp-t500x500.jpg" width="100px;" alt=""/>
<br />
Feito de ❤️ por Ycaro Batalha

<br />
👋🏽 Let's talk!
<br />

[![Linkedin Badge](https://img.shields.io/badge/-Ycaro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ycaro-gabriel-da-costa-batalha-2019/)](https://www.linkedin.com/in/ycaro-gabriel-da-costa-batalha-2019/)
