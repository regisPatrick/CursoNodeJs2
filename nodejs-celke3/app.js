const express = require('express');
const app = express();

// Conexão com BD MySql
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'celke'
});

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id: ' + connection.threadId);
});

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

connection.query('DELETE FROM users where id = 3', (err, result) => {
    if(!err){
        console.log('Usuário apagado com sucesso!');
    }else{
        console.log('Erro: o usuário não foi apagado com sucesso!');
    }
});

connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log('Erro ao realizar a consulta');
    }
});

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