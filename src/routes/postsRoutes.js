import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

// Middleware para JSON
const routes = (app) => {
    // Configura o middleware para interpretar o corpo das requisições como JSON.
    app.use(express.json());
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)
}

export default routes;