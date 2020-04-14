const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

// Rotas

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            console.log(posts)
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req, res){
        // res.send('ROTA DE CADASTRO DE POSTS')
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            // res.send("Post criado com sucesso!")
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
        // res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo);
    })
    
// app.get("/", function (req, res){
//     // res.send("Sejam todos bem-vindos ao meu app!")
//     res.sendFile(__dirname + "/html/index.html");
// });

// app.get("/sobre", function (req, res) {
//     // res.send("Minha pagina sobre");
//     res.sendFile(__dirname + "/html/sobre.html");
// });

// app.get("/blog", function (req, res) {
//     res.send("Bem-vindo ao meu blog!");
// });

// app.get('/ola/:cargo/:nome/:cor', function(req, res){
//     res.send("<h1>Ola " + req.params.nome + "</h1>" + 
//                 "<h2>Seu cargo e: " + req.params.cargo + "</h2>" +
//                 "<h3>Sua cor favorita e: " + req.params.cor + "</h3>");
// });

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Esta postagem não existe! " + erro)
        })
    })

app.listen(8080, function (){
    console.log("Servidor rodando na url http://localhost:8080");
});