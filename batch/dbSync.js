require("dotenv").config();
const db = require('../models/index')

db.sequelize.sync({ force: false, alter: true }).then(
  function(object) {
    console.log('Modelの設定でデータベースを同期しました')
  },
  function(error) {
    console.log(error)
  }
)