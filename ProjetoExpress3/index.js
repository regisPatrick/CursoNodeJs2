const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
// Rotas
    app.get('/cad', function(req, res) {
        // res.send('Rota de cadastro de posts')
        res.render('formulario')
    })

    app.post('/add', function(req, res) {
        // res.send('Formulário recebido!')
        res.send('Texto: ' + req.body.titulo + " conteudo: " + req.body.conteudo)
    })

// app.get("/", function(req, res){
//     // res.send("Seja muito bem-vindo ao meu app!");
//     res.sendFile(__dirname + "/html/index.html");
// });

// app.get("/sobre", function(req, res){
//     // res.send("Minha pagina sobre");
//     res.sendFile(__dirname + "/html/sobre.html");
// });

// app.get("/blog", function(req, res){
//     res.send("Bem vindo ao meu blog!")
// });

// app.get('/ola/:cargo/:nome/:cor', function(req, res){
//     // res.send(req.params);
//     res.send("<h1>Ola " + req.params.nome + "</h1>" +
//         "<h2>Seu cargo é: " + req.params.cargo + "</h2>" +
//         "<h3>Sua cor favorita é: " + req.params.cor + "</h3>");
// });


app.listen(8081, function(){
    console.log('Servidor Rodando na URL http://localhost:8081')
});