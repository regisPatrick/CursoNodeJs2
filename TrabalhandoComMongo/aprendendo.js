const mongoose = require('mongoose')

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/aprendendo", {
        // useMongoClient: true // Foi substituido por
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: " + err)
    })

// Model - Usuarios
// Definindo o model
    const UsuarioSchema = mongoose.Schema({

        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true      
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }

    })

// Collection
    mongoose.model('usuarios', UsuarioSchema)

    const Regis = mongoose.model('usuarios')

    new Regis({
        nome: "Jhon",
        sobrenome: "Doe",
        email: "jhon@email.com",
        idade: 21,
        pais: "EUA"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário: " + err)
    })