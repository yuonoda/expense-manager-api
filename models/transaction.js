const Sequelize = require('sequelize')

module.exports = sequelize => {
    const TransactionModel = sequelize.define(
        'Transaction',
        {
            transactionId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            accountId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            transactionName: {
                type: Sequelize.TEXT,
                default: null
            },
            transactionAmount: {
                type: Sequelize.INTEGER,
                default: null,
            },
            paidAt: {
                type: Sequelize.DATE,
                default: null
            },
            isPaid: {
                type: Sequelize.BOOLEAN,
                default: false
            },
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

