const db = require('../models/index')

const setSampleData = () => {
    // db.Account.destroy({
    //     where: {},
    //     truncate: true
    // })

    db.Account.bulkCreate([
        {
            account_name: '普通預金',
            account_balance: 400000,
            account_group_id: 1
        },
        {
            account_name: '現金',
            account_balance: 20000,
            account_group_id: 1
        },
        {
            account_name: '定期預金',
            account_balance: 400000,
            account_group_id: 2
        },
    ])

    // db.Transaction.destroy({
    //     where: {},
    //     truncate: true
    // })
    db.Transaction.bulkCreate([
        {
            transaction_name: '家賃',
            transaction_amount: 80000,
        },
        {
            transaction_name: 'スーパー',
            transaction_amount: 2000,
        },
        {
            transaction_name: 'コンビニ',
            transaction_amount: 500,
        },
        {
            transaction_name: 'コンビニ',
            transaction_amount: 500,
        },
        {
            transaction_name: 'コンビニ',
            transaction_amount: 500,
        },
    ])
}

exports.setSampleData = setSampleData