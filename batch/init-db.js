require("dotenv").config();
const db = require('../models/index')
const { setSampleData } = require('./set-sample-data')

module.exports.init = async()=> {
    await db.sequelize.drop()
    await db.sequelize.sync({force: false, alter: true}).then(
        (object) => {
            console.debug('データベースの初期化が完了しました')
        },
        (error) => {
            console.debug('データベースの初期化に失敗しました ')
            console.error(error)
        }
    )
    await setSampleData().then(
        (object) => {
            console.debug('サンプルデータの作成が完了しました')
        },
        (error) => {
            console.debug('サンプルデータの作成に失敗しました ')
            console.error(error)
        }
    )
    return true
}