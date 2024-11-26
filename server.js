// Importa o framework Express e a função json para lidar com dados JSON.
import express, { json } from "express";
// Importa as rotas definidas no arquivo postsRoutes.js.
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do Express para iniciar o servidor.
const app = express();
app.use(express.static("uploads"))
// Aplica as rotas definidas no arquivo routes.js à aplicação Express.
routes(app)

// Inicia o servidor na porta 3000 e imprime uma mensagem no console.
app.listen(3000, () => {
  console.log("Servidor escutando...");
//  Gerencia os erros que possam ocorrer ao iniciar o servidor.
}).on('error', (err) => {
  // Verifica se o erro é causado pela porta já estar em uso.
  if (err.code === 'EADDRINUSE') {
    console.error('Error: Porta 3000 já está em uso.');
  } else {
    // Imprime qualquer outro tipo de erro no console.
    console.error(err);
  }
});