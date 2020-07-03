const db = require('../models')

class AccuntService {
  async getAccounts() {
    console.info('AccuntService::getAccounts')
    const accounts = await db.Account.findAll()
    return accounts
  }
}

module.exports = AccuntService