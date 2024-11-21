import express, { json } from "express";
// Importa o módulo Express e a função json para lidar com requisições JSON.
import conectarAoBanco from "./src/config/dbConfig.js";
// Importa a função para conectar ao banco de dados.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando a string de conexão do ambiente.

const app = express();
// Cria uma instância do Express para iniciar o servidor.

// Middleware para JSON
app.use(express.json())
// Configura o middleware para interpretar o corpo das requisições como JSON.

app.listen(3000, () => {
  console.log("Servid0r escutando...");
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Error: Porta 3000 já está em uso.');
  } else {
    console.error(err);
  }
});

// Inicia o servidor na porta 3000 e imprime uma mensagem no console.

async function getTodosPosts() {
  const db = conexao.db("imersao-instabytews")
  // Seleciona o banco de dados "imersao-instabytews".
  const colecao = db.collection("posts");
  // Seleciona a coleção "posts" dentro do banco de dados.
  return colecao.find().toArray();
  // Busca todos os documentos da coleção e retorna como um array.
}

// Configuração da rota "/posts"
app.get("/posts", async (req, res) => {
  const posts = await getTodosPosts()
  // Busca todos os posts usando a função getTodosPosts.
  res.status(200).json(posts)
  // Envia uma resposta HTTP com status 200 (OK) e os posts em formato JSON.
});

// function buscarPostPorId(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// };

// // Configuração da rota "/posts"
// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorId(req.params.id);
//     res.status(200).json(posts[index])
// });