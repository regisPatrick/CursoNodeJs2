const express = require("express");

const app = express();

app.get("/", function (req, res){
    res.send("Sejam todos bem-vindos ao meu app!")
});

app.get("/sobre", function (req, res) {
    res.send("Minha pagina sobre");
});

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu blog!");
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + 
                "<h2>Seu cargo e: " + req.params.cargo + "</h2>" +
                "<h3>Sua cor favorita e: " + req.params.cor + "</h3>");
});


app.listen(8080, function (){
    console.log("Servidor rodando na url http://localhost:8080");
});