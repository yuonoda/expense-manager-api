const db = require('../models/index')

const setSampleData = () => {
    db.AccountGroup.bulkCreate([
        {
            account_group_id: 1,
            account_group_name: 'Monthly Accounts'
        },
        {
            account_group_id: 2,
            account_group_name: 'Saving Accounts'
        }
    ])

    db.Account.bulkCreate([
        {
            account_id: 1,
            account_name: '普通預金',
            account_balance: 400000,
            account_group_id: 1
        },
        {
            account_id: 2,
            account_name: '現金',
            account_balance: 20000,
            account_group_id: 1
        },
        {
            account_id: 3,
            account_name: '定期預金',
            account_balance: 1000000,
            account_group_id: 2
        },
    ])

    db.Transaction.bulkCreate([
        {
            transaction_name: '家賃',
            transaction_amount: 80000,
            account_id: 1,
        },
        {
            transaction_name: 'スーパー',
            transaction_amount: 2000,
            account_id: 1,
        },
        {
            transaction_name: 'コンビニ',
            transaction_amount: 500,
            account_id: 1,
        },
        {
            transaction_name: 'コンビニ',
            transaction_amount: 500,
            account_id: 1,
        },
        {
            transaction_name: 'コンビニ',
            transaction_amount: 500,
            account_id: 1,
        },
    ])
}

exports.setSampleData = setSampleData