const AccountService = require('../services/account.service')
const Joi = require('@hapi/joi')
const Response = require('../utilities/response')

module.exports.getAccounts = async (event, context, callback) => {
    console.info('accounts')

    const accountService = new AccountService()
    const accounts = await accountService.getAccounts()
    const responseBody = {'accounts': accounts}
    // TODO エラー処理
    const response = new Response()
    return response.ok(responseBody)
}


module.exports.updateAccount = async ({ pathParameters, body })=> {
    console.info('updateTransaction')

    // JSONフォーマットチェック
    const response = new Response()
    try {
        body = JSON.parse(body)
    } catch (e) {
        return response.badRequest(null, 'Invalid JSON format')
    }

    // // バリデーション
    const params = {
        accountId: Number(pathParameters.account_id),
        accountName: body.account_name,
        accountBalance: body.account_balance,
        accountGroupId: body.account_group_id
    }
    const validationSchema = Joi.object().keys({
        accountId:  Joi.number().required(),
        accountName: Joi.string().allow(null),
        accountBalance: Joi.number().allow(null),
        accountGroupId:  Joi.number().allow(null),
    })
    const { error } = validationSchema.validate(params)
    if ( error ) {
        const errors = error.details.map( detail => detail.message)
        return response.badRequest(errors, 'Validation Error')
    }

    // データを更新
    const accountService = new AccountService()
    const result = await accountService.update(params)
    console.debug('result:', result)

    // 結果に応じてレスポンスを返す
    if( result ) {
        return response.ok( result )
    } else {
        return response.internalServerError()
    }


}