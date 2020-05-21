const Sequelize = require('sequelize')
const sequelize = new Sequelize('test1', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: " + erro)
// })

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({force: true})

// Postagem.create({
//     titulo: "Um Titulo Qualquer",
//     conteudo: "adsadsdadsdsdasdas"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING      
    }
})

// Usuario.sync({force: true})

// Usuario.create({
//     nome: "Regis",
//     sobrenome: "Patrick",
//     idade: 99,
//     email: "regis@email.com"
// })