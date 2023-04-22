const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { TESTE_CONEXAO } = require('./constants');

let transactions = [];

// RF-01 e RF-02 - ROTA CRIAÇÃO DE TRANSAÇÃO COM ID E DATA
router.post('/transactions', (req, res) => {
  const id = uuidv4();
  const dataCriacao = new Date();
  const transaction = { id, dataCriacao, ...req.body };
  transactions.push(transaction);
  res.status(201).json(transaction);
});


// RF-03 - ROTA PARA LISTAR A TRANSAÇÃO
router.get('/transactions', (req, res) => {
  res.status(200).json(transactions);
});

// RF-04 - ROTA PARA EDITAR UMA TRANSAÇÃO
router.put('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, valor } = req.body;
  const transactionIndex = transactions.findIndex((transaction) => transaction.id === id);
  if (transactionIndex === -1) {
    return res.status(404).json({ error: `Transação ${id} não encontrada.` });
  }
  transactions[transactionIndex] = { ...transactions[transactionIndex], descricao, valor };
  return res.status(200).json({ message: `Transação ${id} atualizada com sucesso.` });
});

// RF-05 - ROTA PARA DELETAR UMA TRANSAÇÃO
router.delete('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const index = transactions.findIndex((transaction) => transaction.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Transação não encontrada.' });
  }
  transactions.splice(index, 1);
  return res.status(200).json({ message: 'Transação excluída com sucesso.' });
});

module.exports = router;


