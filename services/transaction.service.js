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
  // async setTransaction({transaction_name, transaction_amount, account_id}) {
  //   console.log('TransactionService::setTransaction');
  //   const result = await db.Transaction.insert(db, )
  // }
}

module.exports = TransactionService