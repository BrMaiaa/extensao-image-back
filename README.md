# Instabytes API 📸

> **Imersão Alura + Google** — Back-end de uma aplicação de compartilhamento de imagens com geração automática de descrições via Inteligência Artificial.

---

## 🇧🇷 Português

### Sobre o Projeto

O **Instabytes** é uma API RESTful desenvolvida durante a **Imersão Alura + Google**. A aplicação permite criar, listar e atualizar posts com imagens, gerando automaticamente descrições acessíveis (alt text) utilizando o modelo de IA **Google Gemini**.

### ✨ Funcionalidades

- 📋 Listar todos os posts
- ➕ Criar um novo post
- 🖼️ Fazer upload de imagens
- 🤖 Gerar descrição de imagem automaticamente com Google Gemini
- 🔄 Atualizar posts existentes

### 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| Node.js | Ambiente de execução JavaScript |
| Express.js | Framework para criação da API |
| MongoDB Atlas | Banco de dados NoSQL em nuvem |
| Multer | Middleware para upload de arquivos |
| Google Gemini | IA para geração de descrições de imagens |

### 📁 Estrutura do Projeto

```
projeto/
├── config/
│   └── dbConfig.js          # Configuração e conexão com o MongoDB
├── controllers/
│   └── postsController.js   # Lógica de negócio dos endpoints
├── models/
│   └── postsModels.js       # Funções de acesso ao banco de dados
├── routes/
│   └── postRoutes.js        # Definição das rotas da API
├── services/
│   └── geminiService.js     # Integração com o Google Gemini
└── uploads/                 # Diretório para armazenamento de imagens
```

### 🚀 Como Executar

#### Pré-requisitos

- Node.js v18+
- Conta no [MongoDB Atlas](https://www.mongodb.com/atlas)
- Chave de API do [Google Gemini](https://aistudio.google.com/)

#### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/instabytes-api.git
cd instabytes-api

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto com:
STRING_CONEXAO=sua_string_de_conexao_mongodb
GEMINI_API_KEY=sua_chave_api_gemini

# 4. Inicie o servidor
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

### 📡 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/posts` | Retorna todos os posts |
| `POST` | `/posts` | Cria um novo post (JSON) |
| `POST` | `/uploads` | Faz upload de uma imagem |
| `PUT` | `/upload/:id` | Atualiza post com URL da imagem e descrição gerada por IA |

#### Exemplos de Requisição

**Criar um post:**
```json
POST /posts
{
  "descricao": "Uma foto incrível",
  "imgUrl": "",
  "alt": ""
}
```

**Upload de imagem:**
```
POST /uploads
Content-Type: multipart/form-data
Campo: imagem (arquivo .png/.jpg)
```

**Atualizar post com IA:**
```json
PUT /upload/:id
{
  "alt": "Descrição alternativa personalizada"
}
```

### 🔧 Variáveis de Ambiente

```env
STRING_CONEXAO=mongodb+srv://usuario:senha@cluster.mongodb.net/
GEMINI_API_KEY=sua_chave_aqui
```

---

## 🇺🇸 English

### About the Project

**Instabytes** is a RESTful API developed during the **Alura + Google Immersion**. The application allows users to create, list, and update posts with images, automatically generating accessible descriptions (alt text) using the **Google Gemini** AI model.

### ✨ Features

- 📋 List all posts
- ➕ Create a new post
- 🖼️ Upload images
- 🤖 Auto-generate image descriptions with Google Gemini
- 🔄 Update existing posts

### 🛠️ Technologies Used

| Technology | Description |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Framework for building the API |
| MongoDB Atlas | Cloud-based NoSQL database |
| Multer | Middleware for file uploads |
| Google Gemini | AI for generating image descriptions |

### 📁 Project Structure

```
project/
├── config/
│   └── dbConfig.js          # MongoDB connection configuration
├── controllers/
│   └── postsController.js   # Business logic for endpoints
├── models/
│   └── postsModels.js       # Database access functions
├── routes/
│   └── postRoutes.js        # API route definitions
├── services/
│   └── geminiService.js     # Google Gemini integration
└── uploads/                 # Image storage directory
```

### 🚀 Getting Started

#### Prerequisites

- Node.js v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Google Gemini](https://aistudio.google.com/) API Key

#### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/instabytes-api.git
cd instabytes-api

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env file in the project root with:
STRING_CONEXAO=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key

# 4. Start the server
npm run dev
```

The server will be running at `http://localhost:3000`.

### 📡 API Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/posts` | Returns all posts |
| `POST` | `/posts` | Creates a new post (JSON body) |
| `POST` | `/uploads` | Uploads an image file |
| `PUT` | `/upload/:id` | Updates post with image URL and AI-generated description |

#### Request Examples

**Create a post:**
```json
POST /posts
{
  "descricao": "An amazing photo",
  "imgUrl": "",
  "alt": ""
}
```

**Upload an image:**
```
POST /uploads
Content-Type: multipart/form-data
Field: imagem (file .png/.jpg)
```

**Update post with AI:**
```json
PUT /upload/:id
{
  "alt": "Custom alternative description"
}
```

### 🔧 Environment Variables

```env
STRING_CONEXAO=mongodb+srv://user:password@cluster.mongodb.net/
GEMINI_API_KEY=your_key_here
```

### 📝 License

This project was developed for educational purposes during the Alura + Google Immersion program.

---

<p align="center">Desenvolvido durante a <strong>Imersão Alura + Google</strong> 🚀</p>
