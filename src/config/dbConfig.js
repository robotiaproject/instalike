// Importa o cliente MongoDB para realizar a conexão com o banco de dados.
import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
  // Declara uma variável para armazenar o cliente MongoDB.
  let mongoClient;

  // Bloco try-catch para tratar possíveis erros durante a conexão.
  try {
    // Cria uma nova instância do cliente MongoDB usando a string de conexão fornecida.
    mongoClient = new MongoClient(stringConexao);
    // Imprime uma mensagem no console indicando que a conexão está sendo estabelecida.
    console.log('Conectando ao cluster do banco de dados...');
    // Conecta-se ao banco de dados de forma assíncrona.
    await mongoClient.connect();
    // Imprime uma mensagem de sucesso após a conexão ser estabelecida.
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para uso em outras partes do código.
    return mongoClient;
  } catch (erro) {
    // Imprime uma mensagem de erro no console e encerra o processo.
    console.error('Falha na conexão com o banco!', erro);
    process.exit();
  }
}