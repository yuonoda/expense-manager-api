const db = require('../models')

class TransactionService {
  async getTransactions() {
    console.info('TransactionService::getTransactions')
    const transactions = await db.Transaction.findAll()
    return transactions
  }
}

module.exports = TransactionService