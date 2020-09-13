const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/noderest', {
    // useMongoClient: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao mongo')
}).catch((err) => {
    console.log('Erro ao se conectar: ' + err)
});

module.exports = mongoose;