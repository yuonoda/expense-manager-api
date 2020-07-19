const db = require('../models')

class TransactionService {
  // TODO Error handling
  async getTransactions() {
    console.info('TransactionService::getTransactions')
    const transactions = await db.Transaction.findAll()
    return transactions
  }
  async getTransaction(transactionId) {
    console.info('TransactionService::getTransactions')

    const where = { transaction_id: transactionId}
    const transaction = await db.Transaction.findOne({ where })
    return transaction
  }
}

module.exports = TransactionService