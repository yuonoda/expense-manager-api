const Joi = require('@hapi/joi')
const TransactionService = require('../services/transaction.service')

// バリデーションルール
const validationSchema = Joi.object().keys({
  transactionId: Joi.string()
      .regex(/^[0-9]+$/)
      .required(),
})


module.exports.getTransactions = async (req, res) => {
    console.info('getTransactions')
    const transactionService = new TransactionService()
    const transactions = await transactionService.getTransactions()
    // TODO Format and eliminate unnecessary output
    // TODO Move to utilities/response
    // TODO Error Handling
    res.status(200).json({transactions})
}


module.exports.getTransaction = async (req, res) => {
    console.info('getTransaction')
    const params = {
        transactionId: req.params.transaction_id
    }

    const { error } = validationSchema.validate(params)
    if ( error ) {
        res.status(400).json(error)
        return
    }

    const transactionService = new TransactionService()
    const transaction = await transactionService.getTransaction(params.transactionId)
    // TODO Format and eliminate unnecessary output
    // TODO Move to utilities/response
    // TODO Error Handling
    res.status(200).json({transaction})
}