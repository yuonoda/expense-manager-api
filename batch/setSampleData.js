const db = require('../models/index')

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
