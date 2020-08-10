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

  /**
   * 新しいトランザクションを追加する
   * @param transactionName
   * @param transactionAmount
   * @param transactionTime
   * @param isPaid
   * @param accountId
   * @returns {Promise<boolean>}
   */
  async setTransaction({ transactionName, transactionAmount, transactionTime, isPaid, accountId = 1 }) {
    console.log('TransactionService::setTransaction');
    let result = false
    await db.Transaction.create({
      account_id: accountId,
      transaction_name: transactionName,
      transaction_amount: transactionAmount,
      transaction_time: transactionTime,
      is_paid: isPaid
    }).then(transaction => {
      // console.debug(transaction)
      result = true
    }).catch(e => {
      console.error(e)
    })
    return result
  }
}

module.exports = TransactionService