// routes.js - Define as rotas da aplicação

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { TESTE_CONEXAO, ERROR_MESSAGES } = require('./constants');

let transactions = [];

// Cria uma nova transação com um ID único e data de criação
router.post('/transactions', (req, res) => {
  const id = uuidv4();
  const dataCriacao = new Date();
  const transaction = { id, dataCriacao, ...req.body };
  transactions.push(transaction);
  res.status(201).json(transaction);
});

// Lista todas as transações
router.get('/transactions', (req, res) => {
  res.status(200).json(transactions);
});

// Edita uma transação existente
router.put('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, valor } = req.body;
  const transactionIndex = transactions.findIndex((transaction) => transaction.id === id);
  if (transactionIndex === -1) {
    return res.status(404).json({ error: ERROR_MESSAGES.TRANSACTION_NOT_FOUND });
  }
  transactions[transactionIndex] = { ...transactions[transactionIndex], descricao, valor };
  return res.status(200).json({ message: `Transação ${id} atualizada com sucesso.` });
});

// Deleta uma transação existente
router.delete('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const index = transactions.findIndex((transaction) => transaction.id === id);
  if (index === -1) {
    return res.status(404).json({ error: ERROR_MESSAGES.TRANSACTION_NOT_FOUND });
  }
  transactions.splice(index, 1);
  return res.status(200).json({ message: `Transação ${id} excluída com sucesso.` });
});

module.exports = router;


