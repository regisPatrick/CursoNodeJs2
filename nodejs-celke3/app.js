const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão realizada com sucesso!');
}).catch((err) => {
    console.log('Erro ao realizar a conexão com BD: ' + err);
});

// Configurações

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//  Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())   

// Public
app.use(express.static(path.join(__dirname, 'public')))

// Rotas
app.get('/pagamento', function(req, res){
    // res.send('Página para listar os pagamentos');
    res.render('pagamento');
});

app.get('/cad-pagamento', function(req, res){
    // res.send('Formulário para cadastrar pagamento');
    res.render('cad-pagamento');
});

app.post('/add-pagamento', (req, res) => {
    res.send('Nome: ' + req.body.nome + '<br>Valor: ' + req.body.valor + '<br>')
});

const Pagamento = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DOUBLE
    }
});

// Criar tabela com Sequelize
// Pagamento.sync({force: true});

// Inserir registro no banco de dados
// Pagamento.create({
//     nome: "Agua",
//     valor: 150
// }).then(() => {
//     console.log('Registro inserido com sucesso!');
// }).catch((err) => {
//     console.log('Aconteceu um erro ao inserir o registro, tente novamento!' + err);
// });

// Conexão com BD MySql
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'celke'
// });

// connection.connect(function(err) {
//     if(err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id: ' + connection.threadId);
// });

// connection.query("INSERT INTO users(nome, email) VALUES ('Adolfo', 'adolfo@email.com')", (err, result) => {
//     if(!err){
//         console.log('Usuario cadastrado com sucesso!');
//     }else{
//         console.log('Erro ao cadastrar o usuario!');
//     }
// });

// connection.query("UPDATE users SET nome = 'Regis' where id = 1", (err, result) => {
//     if(!err){
//         console.log('Usuário editado com sucesso!');
//     }else{
//         console.log('Erro: o usuário não foi editado com sucesso!');
//     }
// });

// connection.query('DELETE FROM users where id = 3', (err, result) => {
//     if(!err){
//         console.log('Usuário apagado com sucesso!');
//     }else{
//         console.log('Erro: o usuário não foi apagado com sucesso!');
//     }
// });

// connection.query('SELECT * FROM users', function(err, rows, fields){
//     if(!err){
//         console.log('Resultado: ', rows);
//     }else{
//         console.log('Erro ao realizar a consulta');
//     }
// });

// app.get('/', function(req, res){
//     // res.send('Gerenciador Financeiro');
//     res.sendFile(__dirname + '/src/index.html');
// });

// app.get('/sobre-empresa', (req, res) => {
//     // res.send('Página sobre empresa');
//     res.sendFile(__dirname + '/src/sobre-empresa.html')
// });

// app.get('/blog', (req, res) => {
//     res.send('Página do blog');
// });

// app.get('/contato', (req, res) => {
//     res.send('Página de contato');
// });

// http://localhost:8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
});