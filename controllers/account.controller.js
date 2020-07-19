const AccountService = require('../services/account.service')

module.exports.getAccounts = async (req, res) => {
  console.info('accounts')
  const accountService = new AccountService()
  const accounts = await accountService.getAccounts()
  // TODO Format and eliminate unnecessary output
  // TODO Move to utilities/response
  res.status(200).json({ accounts })
}