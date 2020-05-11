// retorna uma função express()
const express = require('express');

// importando mongoose
const mongoose = require('mongoose');

// executa a função armazenando na const app
const app = express();

// iniciando o DB
// mongoose.connect(padrao://ip_ou_user@password/nome_db, { quando_houve_atualizacao }  // pode gerar erro se estiver atualizado
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true , useNewUrlParser: true });

// primeiro parâmetro é a rota, segundo a requisição e terceiro a resposta
// O req pode conter: parâmetros, corpo, cabeçalho, usuário, autenticação, IP da requisição
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// escuta na porta 3001
app.listen(3001);