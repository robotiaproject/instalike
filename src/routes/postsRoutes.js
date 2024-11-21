import express from "express";
import { listarPosts } from "../controllers/postsController.js";

// Middleware para JSON
const routes = (app) => {
    // Configura o middleware para interpretar o corpo das requisições como JSON.
    app.use(express.json());
    // Configuração da rota "/posts"
    app.get("/posts", listarPosts);
}

export default routes;