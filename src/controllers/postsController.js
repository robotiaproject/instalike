// Importa as funções para buscar e criar posts, e o módulo fs para manipulação de arquivos.
import { getTodosPosts, criarPost, atualizarPost } from "../models/postModels.js";
import fs from "fs";

// Função assíncrona para listar todos os posts.
export async function listarPosts(req, res) {
  // Busca todos os posts utilizando a função getTodosPosts do modelo.
  const posts = await getTodosPosts();
  // Envia uma resposta HTTP com status 200 (OK) e os posts em formato JSON.
  res.status(200).json(posts);
}

// Função assíncrona para criar um novo post.
export async function postarNovoPost(req, res) {
  // Obtém os dados do novo post do corpo da requisição.
  const novoPost = req.body;
  try {
    // Chama a função criarPost do modelo para inserir o novo post no banco de dados.
    const postCriado = await criarPost(novoPost);
    // Envia uma resposta HTTP com status 200 (OK) e o post criado em formato JSON.
    res.status(200).json(postCriado);
  } catch (erro) {
    // Imprime a mensagem de erro no console e envia uma resposta HTTP com status 500 (Erro interno do servidor).
    console.error(erro.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}

// Função assíncrona para fazer upload de uma imagem e criar um novo post.
export async function uploadImagem(req, res) {
  // Cria um novo objeto post com a descrição da imagem e o nome original do arquivo.
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  try {
    // Chama a função criarPost do modelo para inserir o novo post no banco de dados.
    const postCriado = await criarPost(novoPost);
    // Gera um novo nome para a imagem, utilizando o ID do post inserido.
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    // Renomeia o arquivo para o novo nome, movendo-o para o diretório de uploads.
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia uma resposta HTTP com status 200 (OK) e o post criado em formato JSON.
    res.status(200).json(postCriado);
  } catch (erro) {
    // Imprime a mensagem de erro no console e envia uma resposta HTTP com status 500 (Erro interno do servidor).
    console.error(erro.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}


export async function atualizarNovoPost(req, res) {
  const id = req.params.id;
  const urlImagem = `http://localhost:3000/${id}.png`
  const post = {
    imgUrl: urlImagem,
    descricao: req.body.descricao,
    alt: req.body.alt
  }
  try {
    const postCriado = await atualizarPost(id, post);

    res.status(200).json(postCriado);
  } catch (erro) {

    console.error(erro.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}