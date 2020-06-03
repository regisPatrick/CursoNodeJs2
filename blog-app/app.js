// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
// const mongoose = require('mongoose')

// Configuracoes
// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
// Mongoose
    // Em Breve

// Rotas

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log('Servidor rodando na porta 8081')
})