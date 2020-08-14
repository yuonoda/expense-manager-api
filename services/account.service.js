const db = require('../models')

class AccountService {
  async getAccounts() {
    console.info('AccuntService::getAccounts')
    const accounts = await db.Account.findAll()
    return accounts
  }
  async update({ accountId, accountGroupId, accountName, accountBalance }) {
    console.log('AccountService::update');

    // 値を格納
    let result = false
    const where = {
      accountId
    }
    const values = {
      accountName,
      accountBalance,
    }
    if(accountGroupId) {
      values['accountGroupId'] = accountGroupId
    }

    // 更新
    await db.Account.update(values, { where, returning: true }).then(values => {
      console.debug(values)
      result = (values[0] > 0)? values[1][0].dataValues : false
    }).catch(e => {
      console.error(e)
    })
    return result
  }
}

module.exports = AccountService