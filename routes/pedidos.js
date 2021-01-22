const express = require('express');
const router = express.Router();
const mysql = require('../routes/mysql').pool;
 
// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Aqui estao todos os pedidos'
    });

});
// INSERE OS DADOS EM UM PEDIDO
router.post('/', (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.id_produto
    }
    res.status(201).send({   
        mensagem: 'O Pedido foi inserido',
        pedidoCriado: pedido
    })
});
// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido',(req, res, next) => {
    const id = req.params.id_pedido
        res.status(200).send({
            mensagem: 'Detalhes do Pedido',
            id_pedido : id
        });
});

// APAGA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O Pedido foi apagado'
    })
});

module.exports = router;
