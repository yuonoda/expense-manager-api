"use strict";
require("dotenv").config();
const { Sequelize } = require("sequelize");
const db = {};

// DBの接続設定
// DB connection settings
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    native: false,
    pool: {
      max: 10,
      idle: 30000,
      acquire: 60000
    },
    logging: sql => console.log(sql) // TODO Change to logger
  }
);

db.Account = require('./account')(sequelize)
db.Transaction = require('./transaction')(sequelize)
db.AccountGroup = require('./account-group')(sequelize)
db.AccountTransfer = require('./account-transfer')(sequelize)

db.Account.hasMany(db.Transaction, { foreignKey: 'accountId' })
db.AccountGroup.hasMany(db.Account, { foreignKey: 'accountGroupId'})
db.Account.hasMany(db.AccountTransfer, { foreignKey: 'accountFrom'})
db.Account.hasMany(db.AccountTransfer, { foreignKey: 'accountTo'})

db.sequelize = sequelize;
db.Op = Sequelize.Op;

module.exports = db;
