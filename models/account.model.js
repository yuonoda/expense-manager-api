const Sequelize = require('sequelize')

module.exports = sequelize => {
    const AccountModel = sequelize.define(
        'Account',
        {
            account_id: {
                field: 'account_id',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            account_group_id: {
                field: 'account_group_id',
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            account_name: {
                field: 'account_name',
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            account_balance: {
                field: 'account_balance',
                type: Sequelize.INTEGER,
                allowNull: true,
                default: 0,
            },
        },
        {
            // 論理削除フラグ
            paranoid: true,
            // 楽観ロックフラグ
            version: true,
            // 自動生成カラムの命名ルールをスネークに
            underscored: true, // TODO createdAtなどがスネークになっていない
        }
    )
    return AccountModel
}
