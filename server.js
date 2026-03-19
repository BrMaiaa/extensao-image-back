import express from 'express';
import routes from './src/routes/postRoutes.js';

// Cria uma instância do aplicativo Express
const app = express(); 
app.use(express.static("uploads"))//servir arquivos estaticos

// Carrega as rotas definidas no arquivo postRoutes.js
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor escutando...');
});