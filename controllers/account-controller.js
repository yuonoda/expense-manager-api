const AccountService = require('../services/account.service')
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