const Joi = require('@hapi/joi')
const TransactionService = require('../services/transaction.service')
const Response = require('../utilities/response')

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
    const response = new Response()
    return response.ok(responseBody)
}

module.exports.createTransaction = async ({ body }, context, callback) => {
    console.info('crateTransaction')
    // TODO バリデーション
    body = JSON.parse(body)
    const newTransaction = {
        transactionName: body.transaction_name,
        transactionAmount: body.transaction_amount,
    }

    // データを追加
    const transactionService = new TransactionService()
    const result = await transactionService.setTransaction(newTransaction)

    // 結果に応じてレスポンスを返す
    const response = new Response()
    if( result ) {
        return response.created()
    } else {
        return response.internalServerError()
    }

}

module.exports.getTransaction = async ({ pathParameters }, context, callback) => {
    console.info('getTransaction')
    const params = {
        transactionId: pathParameters.transaction_id
    }

    const response = new Response()
    const { error } = validationSchema.validate(params)
    if ( error ) {
        const errors = error.details.map( detail => detail.message)
        return response.badRequest(errors, 'Validation Error')
    }

    const transactionService = new TransactionService()
    const transaction = await transactionService.getTransaction(params.transactionId)
    // TODO Error Handling
    const responseBody = { 'transaction': transaction }
    return response.ok(responseBody)
}