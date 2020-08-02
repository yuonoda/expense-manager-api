const Joi = require('@hapi/joi')
const TransactionService = require('../services/transaction.service')

// バリデーションルール
const validationSchema = Joi.object().keys({
  transactionId: Joi.string()
      .regex(/^[0-9]+$/)
      .required(),
})


module.exports.getTransactions = async (event, context, callback) => {
    console.info('getTransactions')

    const transactionService = new TransactionService()
    const transactions = await transactionService.getTransactions()
    // TODO Format and eliminate unnecessary output
    // TODO Move to utilities/response
    // TODO Error Handling
    const responseBody = { 'transactions': transactions }
    const response = {}
    response.statusCode = 200
    response.body = JSON.stringify(responseBody)
    callback(null, response)
}


module.exports.getTransaction = async ({ pathParameters }, context, callback) => {
    console.info('getTransaction')
    const params = {
        transactionId: pathParameters.transaction_id
    }

    const { error } = validationSchema.validate(params)
    if ( error ) {
        const responseBody = {
            'error': { status: 400, type: 'Bad Request' , message: error.message }
        }
        callback(null, {statusCode: 400, body: JSON.stringify(responseBody)})
        return
    }

    const transactionService = new TransactionService()
    const transaction = await transactionService.getTransaction(params.transactionId)
    // TODO Format and eliminate unnecessary output
    // TODO Move to utilities/response
    // TODO Error Handling
    const responseBody = { 'transaction': transaction }
    callback(null, {statusCode: 200, body: JSON.stringify(responseBody)})
}