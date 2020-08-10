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
    // TODO Error Handling
    const responseBody = { 'transactions': transactions }
    const response = {}
    response.statusCode = 200
    response.body = JSON.stringify(responseBody)
    return response
}

module.exports.createTransaction = async ({ body }, context, callback) => {
    console.info('crateTransaction')
    // TODO バリデーション

    body = JSON.parse(body)
    const newTransaction = {
        transactionName: body.transaction_name,
        transactionAmount: body.transaction_amount,
    }

    const transactionService = new TransactionService()
    const result = await transactionService.setTransaction(newTransaction)
    if( result ) {
        return {statusCode: 201, body: JSON.stringify({status: 201, message: "Created" })}
    } else {
        return {statusCode: 500, body: JSON.stringify({status: 500, message: "Internal Server Error" })}
    }

}

module.exports.getTransaction = async ({ pathParameters }, context, callback) => {
    console.info('getTransaction')
    const params = {
        transactionId: pathParameters.transaction_id
    }

    const { error } = validationSchema.validate(params)
    if ( error ) {
        // TODO バリデーション詳細の追加
        callback(null, {statusCode: 400, body: JSON.stringify({ status: 400, message: 'Bad Request' })})
        return
    }

    const transactionService = new TransactionService()
    const transaction = await transactionService.getTransaction(params.transactionId)
    // TODO Error Handling
    const responseBody = { 'transaction': transaction }
    return {statusCode: 200, body: JSON.stringify(responseBody)}
}