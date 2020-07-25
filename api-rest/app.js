const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/celke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com MongoDB realizada com sucesso!');
}).catch((erro) => {
    console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!')
});

app.get('/', (req, res) => {
    // res.send('Introdução a API REST');
    return res.json({
        titulo: 'Como criar API'
    });
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080/');
});