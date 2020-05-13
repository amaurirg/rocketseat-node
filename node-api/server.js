// retorna uma função express()
const express = require('express');

//importando CORS
const cors = require('cors');

// importando mongoose
const mongoose = require('mongoose');

// importa require-dir para não precisar registrar todos os models em todos os arquivos
const requireDir = require('require-dir');

// executa a função armazenando na const app
const app = express();

// permitir enviar dados no formato json pela app
app.use(express.json());

// para usar o CORS. Dentro de () pode-se colocar quais domínios podem ter acesso
// ou algumas configurações de segurança
app.use(cors());

// ou coloca em set ou no connect porque findOneAndDelete() e findOneAndUpdate() são deprecated
// mongoose.set('useFindAndModify', false);

// iniciando o DB
// mongoose.connect(padrao://ip_ou_user@password/nome_db, { quando_houve_atualizacao }  // pode gerar erro se estiver atualizado
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true , useNewUrlParser: true, useFindAndModify: false });

// abaixo da conexão com o DB precisa informar o require
// forma sem require-dir
// require('./src/models/Product');

// forma com require-dir
requireDir('./src/models');

// primeiro parâmetro é a rota, segundo a requisição e terceiro a resposta
// O req pode conter: parâmetros, corpo, cabeçalho, usuário, autenticação, IP da requisição
// app.get('/', (req, res) => {
    //     res.send('Hello World!');
    // });
    
// inserindo dados
// passado para routes.js
// const Product = mongoose.model('Product');
// app.get('/', (req, res) => {
//     Product.create({
//         title: "React Native",
//         description: "Build native aps qith Reactr",
//         url: "http://github.com/facebook/react-native"
//     });

//     return res.send("Hello Rocketseat");
// });

// use aceita todos os tipos de requisições: get, post...
// toda requisição feita nessa rota será enviada para o arquivo routes.js
app.use('/api', require('./src/routes'));

// escuta na porta 3001
app.listen(3001);