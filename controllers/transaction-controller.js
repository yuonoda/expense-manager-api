const Joi = require('@hapi/joi')
const TransactionService = require('../services/transaction.service')
const Response = require('../utilities/response')

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

    // JSONフォーマットチェック
    const response = new Response()
    try {
        body = JSON.parse(body)
    } catch (e) {
        return response.badRequest(null, 'Invalid JSON format')
    }

    // 中身のバリデーション
    // TODO 他のパラメーターも追加
    // TODO より細かいバリデーション
    const params = {
        transactionName: body.transaction_name,
        transactionAmount: body.transaction_amount,
    }
    const validationSchema = Joi.object().keys({
        transactionName: Joi.string(),
        transactionAmount: Joi.number()
    })
    const { error } = validationSchema.validate(params)
    if ( error ) {
        const errors = error.details.map( detail => detail.message)
        return response.badRequest(errors, 'Validation Error')
    }

    // データを追加
    const transactionService = new TransactionService()
    const result = await transactionService.upsert(params)

    // 結果に応じてレスポンスを返す
    if( result ) {
        return response.created(result)
    } else {
        return response.internalServerError()
    }

}

module.exports.updateTransaction = async ({ pathParameters, body })=> {
    console.info('updateTransaction')

    // JSONフォーマットチェック
    const response = new Response()
    try {
        body = JSON.parse(body)
    } catch (e) {
        return response.badRequest(null, 'Invalid JSON format')
    }
    //
    // // バリデーション
    const params = {
        transactionId: pathParameters.transaction_id,
        transactionName: body.transaction_name,
        transactionAmount: body.transaction_amount,
    }
    const validationSchema = Joi.object().keys({
        transactionName: Joi.string(),
        transactionAmount: Joi.number(),
        transactionId:  Joi.number().required()
    })
    const { error } = validationSchema.validate(params)
    if ( error ) {
        const errors = error.details.map( detail => detail.message)
        return response.badRequest(errors, 'Validation Error')
    }

    // データを更新
    const transactionService = new TransactionService()
    const result = await transactionService.upsert(params)
    console.debug('result:', result)

    // 結果に応じてレスポンスを返す
    if( result ) {
        return response.ok( result )
    } else {
        return response.internalServerError()
    }


}

module.exports.getTransaction = async ({ pathParameters }, context, callback) => {
    console.info('getTransaction')

    // バリデーション
    const params = {
        transactionId: pathParameters.transaction_id
    }
    const validationSchema = Joi.object().keys({
        transactionId: Joi.string()
            .regex(/^[0-9]+$/)
            .required()
    })
    const { error } = validationSchema.validate(params)
    const response = new Response()
    if ( error ) {
        const errors = error.details.map( detail => detail.message)
        return response.badRequest(errors, 'Validation Error')
    }

    // 取引詳細を取得
    const transactionService = new TransactionService()
    const transaction = await transactionService.getTransaction(params.transactionId)
    // TODO Error Handling
    const responseBody = { 'transaction': transaction }
    return response.ok(responseBody)
}