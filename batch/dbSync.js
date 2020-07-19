require("dotenv").config();
const db = require('../models/index')
const { setSampleData } = require('./setSampleData')

async function sync() {
    await db.sequelize.drop()
    await db.sequelize.sync({force: false, alter: true}).then(
        function (object) {
            console.log('Modelの設定でデータベースを同期しました')
            setSampleData()
        },
        function (error) {
            console.log(error)
        }
    )
}

sync()