const Transaction = require('../models/Transaction');

class TransactionService {
  async list() {
    try {
      const transactions = await Transaction.find();
      return transactions;
    } catch (error) {
      throw new Error('Error listing transactions');
    }
  }

  async create(transaction) {
    try {
      const newTransaction = new Transaction(transaction);
      await newTransaction.save();
      return newTransaction;
    } catch (error) {
      throw new Error('Error creating transaction');
    }
  }

  async update(id, transaction) {
    try {
      const updatedTransaction = await Transaction.findByIdAndUpdate(
        id,
        transaction,
        { new: true }
      );
      return updatedTransaction;
    } catch (error) {
      throw new Error('Error updating transaction');
    }
  }

  async delete(id) {
    try {
      await Transaction.findByIdAndDelete(id);
      return { message: 'Transaction successfully deleted' };
    } catch (error) {
      throw new Error('Error deleting transaction');
    }
  }
}

module.exports = new TransactionService();
