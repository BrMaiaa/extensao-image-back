import { getTodosPosts, criarPost, atualizarPost} from "../models/postsModels.js";
import fs from "fs";  
import gerarDescricaoComGemini from "../services/geminiService.js"

export async function listarPosts (req, res){ 
    //CHAMA a funcao para buscar os posts.
    const posts =  await getTodosPosts(); 
    //envia uma resposta HTTP com status 200 (OK) e os posts no formato json
    res.status(200).json(posts);
}  
 export async function PostarNovoPost(req, res) { 
    const novoPost = req.body; 
    try { 
        // Tenta criar um novo post no banco de dados usando a função criarPost
        const postCriado = await criarPost(novoPost);
      
        // Se a criação for bem-sucedida, retorna um status 200 com o post criado
        res.status(200).json(postCriado);
      } catch(error) {
        // Captura qualquer erro que possa ocorrer durante a criação do post
        console.error(error.message); // Loga o erro no console para depuração
      
        // Retorna um status 500 (erro do servidor) com uma mensagem informativa ao cliente
        res.status(500).json({"Erro":"Falha na Requisicao"});
      }
    
} 
  
 export async function uploadImagem(req, res) { 
  const novoPost = { 
    descricao:"",  
    imgUrl:req.file.originalname, 
    alt:"" 
  
}; 

  try { 
      // Tenta criar um novo post no banco de dados usando a função criarPost
      const postCriado = await criarPost(novoPost);
      const imagemAtualizada = `uploads/${postCriado.insertedId}.png` 
      fs.renameSync(req.file.path, imagemAtualizada)
      // Se a criação for bem-sucedida, retorna um status 200 com o post criado
      res.status(200).json(postCriado);
    } catch(error) {
      // Captura qualquer erro que possa ocorrer durante a criação do post
      console.error(error.message); // Loga o erro no console para depuração
    
      // Retorna um status 500 (erro do servidor) com uma mensagem informativa ao cliente
      res.status(500).json({"Erro":"Falha na Requisicao"});
    }
  
}
 
export async function atualizarNovoPost(req, res) { 
  const id = req.params.id;  
  const urlImagem = `http://localhost:3000/${id}.png`  
  
  try {   
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`) 
    const descricao = await gerarDescricaoComGemini(imgBuffer) 
     
    const post = { 
      imgUrl: urlImagem, 
      descricao: descricao, 
      alt: req.body.alt 
    } 

    const postCriado = await atualizarPost(id, post);
      res.status(200).json(postCriado);
    } catch(error) {
      console.error(error.message); 
      res.status(500).json({"Erro":"Falha na Requisicao"});
    }
  
} 











  
      
  
  
  
 

   