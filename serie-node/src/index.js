const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send('OK');
// });

require('./controllers/index')(app);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});