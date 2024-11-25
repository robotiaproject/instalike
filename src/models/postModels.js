// Importa a função para conectar ao banco de dados, localizada no arquivo dbConfig.js.
import conectarAoBanco from "../config/dbConfig.js"

// Conecta ao banco de dados usando a string de conexão obtida da variável de ambiente STRING_CONEXAO.
// O resultado da conexão é armazenado na variável conexao.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados.
export async function getTodosPosts() {
  // Seleciona o banco de dados "imersao-instabytews".
  const db = conexao.db("imersao-instabytews")
  // Seleciona a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // Busca todos os documentos da coleção e retorna um array com os resultados.
  return colecao.find().toArray();
}

// Função assíncrona para criar um novo post no banco de dados.
export async function criarPost(novoPost) {
  // Seleciona o banco de dados "imersao-instabytews".
  const db = conexao.db("imersao-instabytews")
  // Seleciona a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // Insere um novo documento (post) na coleção e retorna um objeto com informações sobre a inserção.
  return colecao.insertOne(novoPost)
}