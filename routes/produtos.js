const express = require('express');
const router = express.Router();
const mysql = require('../routes/mysql').pool;


 
// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Aqui estao todos os produto'
    });

});
// INSERE OS DADOS EM UM PRODUTO
router.post('/', (req, res, next) => {     
    mysql.getConnection((error, conn) =>{
        conn.query(
            'INSERT INTO produtos (nome, preco) values (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) =>{
                conn.release();
                if (error) {
                   return res.status(500).send({
                        error: error,
                        response: null
                    });
                } 
            res.status(201).send({
                mensagem: 'Produto inserido com sucesso',
                id_produtos: resultado.insertId  
                });
            }
        )
    });

});

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto',(req, res, next) => {
    const id = req.params.id_produto
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Voce passou o ID especial',
            id : id
        });
    } else {
        res.status(200).send({
            mensagem: 'Fanho, deu merda'
        });
    }
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado com sucesso'
    })
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado com sucesso'
    })
});

module.exports = router;
