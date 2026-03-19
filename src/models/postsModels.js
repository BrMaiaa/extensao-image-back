import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Establish a connection to the MongoDB database
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Asynchronous function to fetch all posts from the 'posts' collection
export async function getTodosPosts() {
  // Get the 'imersao-instabytes' database
  const db = conexao.db("imersao-instabytes");

  // Get the 'posts' collection from the database
  const colecao = db.collection("posts");

  // Find all documents in the 'posts' collection and return them as an array
  return colecao.find().toArray();
} 
 
  export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
  }  
 
  export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts")  
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost} )
  }  
