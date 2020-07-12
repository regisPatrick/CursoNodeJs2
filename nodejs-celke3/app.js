const express = require('express');
const app = express();

app.get('/', function(req, res){
    // res.send('Gerenciador Financeiro');
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/sobre-empresa', (req, res) => {
    // res.send('Página sobre empresa');
    res.sendFile(__dirname + '/src/sobre-empresa.html')
});

app.get('/blog', (req, res) => {
    res.send('Página do blog');
});

app.get('/contato', (req, res) => {
    res.send('Página de contato');
});

// http://localhost:8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
});