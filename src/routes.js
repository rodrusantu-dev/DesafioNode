const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const { TESTE_CONEXAO } = require('./constants');
const transactions = [];

// Teste de conexão com o servidor
router.get('/', (request, response) => {
    return response.send(TESTE_CONEXAO);
});

// RF-01 e RF-02 - ROTA CRIAÇÃO DE TRANSAÇÃO COM ID E DATA
router.post('/transactions', (request, response) => {
    const id = uuid.v4();
    const dataCriacao = new Date();
    const transaction = {
        id,
        dataCriacao,
        ...request.body,
    };
    transactions.push(transaction);
    return response.status(201).json(transaction);
});

// RF-03 - ROTA PARA LISTAR A TRANSAÇÃO
router.get('/transactions', (request, response) => {
    return response.status(200).json(transactions);
});

// RF-04 - ROTA PARA EDITAR UMA TRANSAÇÃO
// RF-05 - ROTA PARA DELETAR UMA TRANSAÇÃO

// Exporta o objeto Router para que possa ser utilizado em outros arquivos
module.exports = router;
