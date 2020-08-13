const Sequelize = require('sequelize')

module.exports = sequelize => {
    const AccountTransferModel = sequelize.define(
        'AccountTransfer',
        {
            accountFrom: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: false,
            },
            accountTo: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: false,
            },
            transferAmount: {
                type: Sequelize.INTEGER,
            },
            transferredAt: {
                type: Sequelize.TIME,
                default: null,
            },
            isTransferred: {
                type: Sequelize.BOOLEAN,
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
    return AccountTransferModel
}
