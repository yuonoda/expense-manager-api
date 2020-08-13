const Sequelize = require('sequelize')

module.exports = sequelize => {
    const AccountModel = sequelize.define(
        'Account',
        {
            accountId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            accountGroupId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            accountName: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            accountBalance: {
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
