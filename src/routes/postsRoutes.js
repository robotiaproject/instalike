// Importa o framework Express para criar a aplicação web.
import express from "express";
// Importa o módulo Multer para lidar com o upload de arquivos.
import multer from "multer";
// Importa as funções controladoras para lidar com as requisições relacionadas a posts.
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

// Configura o armazenamento de arquivos utilizando o Multer.
const storage = multer.diskStorage({
  // Define o diretório de destino para os arquivos carregados.
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // Define o nome do arquivo no destino.
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Cria uma instância do Multer com a configuração de armazenamento.
const upload = multer({ dest: "./uploads" , storage });

// Middleware para configurar as rotas da aplicação.
const routes = (app) => {
  // Configura o middleware para interpretar o corpo das requisições como JSON.
  app.use(express.json());
  // Rota para buscar todos os posts.
  app.get("/posts", listarPosts);
  // Rota para criar um novo post.
  app.post("/posts", postarNovoPost);
  // Rota para fazer upload de uma imagem.
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

// Exporta o módulo de rotas para ser utilizado em outras partes da aplicação.
export default routes;