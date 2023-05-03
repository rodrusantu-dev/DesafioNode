const transactionService = require('../services/transactionService');

exports.createTransaction = (req, res, next) => {
  try {
    const transaction = transactionService.createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

exports.listTransactions = (req, res) => {
  const transactions = transactionService.listTransactions();
  res.status(200).json(transactions);
};

exports.updateTransaction = (req, res, next) => {
  try {
    const { id } = req.params;
    const { descricao, valor } = req.body;
    transactionService.updateTransaction(id, descricao, valor);
    res.status(200).json({ message: `Transação ${id} atualizada com sucesso.` });
  } catch (error) {
    next(error);
  }
};

exports.deleteTransaction = (req, res, next) => {
  try {
    const { id } = req.params;
    transactionService.deleteTransaction(id);
    res.status(200).json({ message: `Transação ${id} excluída com sucesso.` });
  } catch (error) {
    next(error);
  }
};
