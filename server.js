import express, { json } from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do Express para iniciar o servidor.
const app = express();
routes(app)

// Inicia o servidor na porta 3000 e imprime uma mensagem no console.
app.listen(3000, () => {
  console.log("Servid0r escutando...");
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Error: Porta 3000 já está em uso.');
  } else {
    console.error(err);
  }
});