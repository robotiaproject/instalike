import conectarAoBanco from "../config/dbConfig.js"

// Conecta ao banco de dados usando a string de conexão do ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//Função assincrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
  // Seleciona o banco de dados "imersao-instabytews".
  const db = conexao.db("imersao-instabytews")
  // Seleciona a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // Busca todos os documentos da coleção e retorna como um array.
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytews")
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}