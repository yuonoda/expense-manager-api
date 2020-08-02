const AccountService = require('../services/account.service')

module.exports.getAccounts = async (event, context, callback) => {
    console.info('accounts')

    const accountService = new AccountService()
    const accounts = await accountService.getAccounts()
    const responseBody = {'accounts': accounts}
    const responseJson = JSON.stringify(responseBody) // TODO 例外処理
    const response = {}
    response.statusCode = 200
    response.body = responseJson
    return response
}