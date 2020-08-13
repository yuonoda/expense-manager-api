const db = require('../models/index')

module.exports.setSampleData = async () => {
    await db.AccountGroup.bulkCreate([
        {
            accountGroupId: 1,
            accountGroupName: 'Monthly Accounts'
        },
        {
            accountGroupId: 2,
            accountGroupName: 'Saving Accounts'
        }
    ])

    await db.Account.bulkCreate([
        {
            accountId: 1,
            accountName: '普通預金',
            accountBalance: 400000,
            accountGroupId: 1
        },
        {
            accountId: 2,
            accountName: '現金',
            accountBalance: 20000,
            accountGroupId: 1
        },
        {
            accountId: 3,
            accountName: '定期預金',
            accountBalance: 1000000,
            accountGroupId: 2
        },
    ])

    await db.Transaction.bulkCreate([
        {
            transactionName: '家賃',
            transactionAmount: 80000,
            accountId: 1,
            paidAt: '2020-08-31T01:48:09.946Z',
            isPaid: false
        },
        {
            transactionName: 'スーパー',
            transactionAmount: 2000,
            accountId: 1,
            paidAt: '2020-08-14T01:48:09.946Z',
            isPaid: true
        },
        {
            transactionName: 'コンビニ',
            transactionAmount: 500,
            accountId: 1,
            paidAt: '2020-08-10T01:48:09.946Z',
            isPaid: false
        },
        {
            transactionName: 'コンビニ',
            transactionAmount: 500,
            accountId: 1,
        },
        {
            transactionName: 'コンビニ',
            transactionAmount: 500,
            accountId: 1,
        },
    ])

    return true
}

