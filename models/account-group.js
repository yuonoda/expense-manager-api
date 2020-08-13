const Sequelize = require('sequelize')

module.exports = sequelize => {
    const AccountGroupModel = sequelize.define(
        'AccountGroup',
        {
            accountGroupId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            accountGroupName: {
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
