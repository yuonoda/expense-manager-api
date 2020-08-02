const db = require('../models')

class AccountService {
  async getAccounts() {
    console.info('AccuntService::getAccounts')
    const accounts = await db.Account.findAll()
    return accounts
  }
}

module.exports = AccountService