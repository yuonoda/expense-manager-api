const AccountService = require('../services/account.service')

module.exports.handler = async (event, context, callback) => {
  console.info('accounts')
  const accountService = new AccountService()
  const accounts = await accountService.getAccounts()

  // TODO Move to utilities/response
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      'status': 200,
      'data': accounts,
    }),
    headers: {'Content-Type': 'application/json'}
  });
}