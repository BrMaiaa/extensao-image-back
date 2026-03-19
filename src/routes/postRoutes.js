// Importa as dependências necessárias: Express para criar a API, Multer para lidar com uploads e as funções controladoras.
import express from "express"; 
import multer from "multer";
import { listarPosts, PostarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

// Configura o armazenamento de arquivos utilizando o Multer
// Define o diretório de destino para os arquivos e a forma como os arquivos serão nomeados
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
    // Define o diretório 'uploads' como destino para os arquivos
    cb(null, 'uploads/'); 
  }, 
  filename: function (req, file, cb){ 
    // Mantém o nome original do arquivo
    cb (null, file.originalname);
  } 
}) 

// Cria uma instância do Multer utilizando a configuração de armazenamento definida
const upload = multer({ dest:"./uploads" , storage})

// Função para definir as rotas da aplicação
const routes = (app) => { 
  // Habilita o parser JSON para lidar com dados enviados no corpo das requisições
  app.use(express.json());

  // Rota GET para listar todos os posts
  app.get("/posts", listarPosts); 

  // Rota POST para criar um novo post
  app.post("/posts", PostarNovoPost) 

  // Rota POST para realizar o upload de uma imagem
  // Utiliza o middleware Multer para processar o arquivo de imagem
  // A função uploadImagem no controlador irá lidar com a imagem recebida
  app.post("/uploads", upload.single("imagem"), uploadImagem )
  app.put("/upload/:id", atualizarNovoPost ) 
}

// Exporta a função de rotas para ser utilizada em outros módulos
export default routes;