const Sequelize = require('sequelize')

module.exports = sequelize => {
    const TransactionModel = sequelize.define(
        'Transaction',
        {
            transaction_id: {
                field: 'transaction_id',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            account_id: {
                field: 'account_id',
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            transaction_name: {
                field: 'transaction_name',
                type: Sequelize.TEXT,
                default: null
            },
            transaction_amount: {
                field: 'transaction_amount',
                type: Sequelize.INTEGER,
                default: null,
            },
            transaction_time: {
                field: 'transaction_time',
                type: Sequelize.TIME,
                default: null
            },
            is_paid: {
                field: 'is_paid',
                type: Sequelize.BOOLEAN,
                default: false
            },
            gmail_message_id: {
                field: 'gmail_message_id',
                type: Sequelize.STRING(16),
                default: null,
                unique: true
            },
            // TODO スネークにする
            // created_at: {
            //     field: 'created_at',
            // }
        },
        {
            // 論理削除フラグ
            paranoid: true,
            // 楽観ロックフラグ
            version: true,
            // 自動生成カラムの命名ルールをスネークに
            underscored: true,
        }
    )
    return TransactionModel
}

