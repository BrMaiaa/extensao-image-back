import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
  // Inicializa uma variável para armazenar o cliente MongoDB
  let mongoClient;

  // Bloco try-catch para lidar com possíveis erros durante a conexão
  try {
    // Cria um novo cliente MongoDB usando a string de conexão fornecida
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');

    // Conecta-se ao banco de dados de forma assíncrona
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para uso posterior
    return mongoClient;
  } catch (erro) {
    // Imprime uma mensagem de erro no console e encerra o processo
    console.error('Falha na conexão com o banco!', erro);
    process.exit();
  }
}