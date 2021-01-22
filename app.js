const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(bodyParser.urlencoded({extended : false})); // Apenas para dados simples
app.use(bodyParser.json());

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//Cors codigo - Formacao de Cabecalho de HTTP
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Permissao de Origem de acesso a todos...
    res.header('Access-Control-Allow-Header', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');//Propriedades de cabecalho aceites...

    //Tipo de opcoes aceites pelo servidor de API
    if (req.method === 'OPTION') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({}); 
    }
    next();
});

app.use( (req, res, next) => {
    const erro = new Error('Nao encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.status({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;