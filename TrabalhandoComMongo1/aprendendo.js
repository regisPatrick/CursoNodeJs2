const mongoose = require('mongoose');

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/aprendendo1', { 
        // useMongoClient: true, // WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it. // Foi substituído por `useNewUrlParser`.
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log('MongoDB Conectado...')
    }).catch((err) => {
        console.log('Houve um erro ao se conectar ao mongoDB: ' + err)
    })