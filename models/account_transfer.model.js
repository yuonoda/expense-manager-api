const Sequelize = require('sequelize')

module.exports = sequelize => {
    const AccountTransferModel = sequelize.define(
        'AccountTransfer',
        {
            account_id_from: {
                field: 'account_id_from',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: false,
            },
            account_id_to: {
                field: 'account_id_to',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: false,
            },
            account_transfer_amount: {
                field: 'account_transfer_amount',
                type: Sequelize.INTEGER,
            },
            account_transfer_time: {
                field: 'account_transfer_time',
                type: Sequelize.TIME,
                default: null,
            },
            is_account_transfered: {
                field: 'is_account_transfered',
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
