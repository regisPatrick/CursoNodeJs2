const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco mySql realizada com sucesso!');
}).catch((err) => {
    console.log('Erro ao realizar a conexão com BD: ' + err);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}