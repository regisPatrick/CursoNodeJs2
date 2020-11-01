const express = require('express');
const app = express();

app.get('/', function(req, res){
    // res.send("Olá! Sejam bem-vindos ao meu app!");
    res.sendFile();
});

app.get('/sobre', function(req, res){
    res.send('Minha página sobre');
});

app.get('/blog', function(req, res){
    res.send('Bem vindo ao meu blog!');
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send('<h1>Ola ' + req.params.nome + '</h1>' + '<h2>Seu cargo é: ' 
                        + req.params.cargo + '</h2>' + '<h3>Sua cor fovorita é: ' 
                        + req.params.cor + '</h3>');
});

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});