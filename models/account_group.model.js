const Sequelize = require('sequelize')

module.exports = sequelize => {
    const AccountGroupModel = sequelize.define(
        'AccountGroup',
        {
            account_group_id: {
                field: 'account_group_id',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            account_group_name: {
                field: 'account_group_name',
                type: Sequelize.TEXT,
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
    return AccountGroupModel
}
