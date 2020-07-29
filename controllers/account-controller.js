const AccountService = require('../services/account.service')

module.exports.getAccounts = async (event, context, callback) => {
  console.info('accounts')
  console.log(event);
  console.log(context)
  console.log(callback)
  const accountService = new AccountService()
  const accounts = await accountService.getAccounts()

  const responseBody = { 'accounts': accounts }
  // TODO Format and eliminate unnecessary output
  // TODO Move to utilities/response
  const response = {}
  response.statusCode = 200
  response.body = JSON.stringify(responseBody)
  callback(null, response)
}