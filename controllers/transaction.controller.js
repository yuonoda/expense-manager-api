const TransactionService = require('../services/transaction.service')

module.exports.getTransactions = async (req, res) => {
  console.info('getTransactions')
  const transactionService = new TransactionService()
  const transactions = await transactionService.getTransactions()
  // TODO Format and eliminate unnecessary output
  // TODO Move to utilities/response
  res.status(200).json({ transactions })
}