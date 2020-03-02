// importacoes
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// conexao com o mongo DB
mongoose.connect('mongodb+srv://mateussantin:mts123@cluster0-dt7xo.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
});

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());

// permite acessar o caminho da imagem no front /files
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// rotas
app.use(require('./routes'));

// yarn dev fica rodando o projeto automático
// porta para acesso localhost:3333
server.listen(3333);