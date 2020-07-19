const Joi = require('@hapi/joi')
const TransactionService = require('../services/transaction.service')

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

    // バリデーションルール
    const validationSchema = Joi.object().keys({
        transactionId: Joi.string()
            .regex(/^[0-9]+$/)
            .required(),
    })

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

module.exports.setTransaction = async (req, res) => {
    console.info('setTransaction')

    // TODO Add othe columns
    const params = {
        transactionName: res.query.transaction_name,
        transactionAmount: res.query.transaction_amount,
        accountId: res.query.account_id,
    }

    // バリデーションルール
    const validationSchema = Joi.object().keys({
        transactionName: Joi.string().max(100),
        transactionAmount: Joi.string().regex(/^[0-9]+$/),
        accountId: Joi.string().regex(/^[0-9]+$/),
    })

    const { error } = validationSchema.validate(params)
    if ( error ) {
        res.status(400).json(error)
        return
    }

    const transactionService = new TransactionService()
    const transaction = await transactionService.setTransaction(params)
    // TODO Format and eliminate unnecessary output
    // TODO Move to utilities/response
    // TODO Error Handling
    res.status(200).json({transaction})
}