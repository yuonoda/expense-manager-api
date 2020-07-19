const router = require('express').Router()
const transactionController = require('../controllers/transaction.controller')

module.exports = function(app, passport) {
    // 支出のリストを取得
    router.get('/transactions', async (req, res) => {
        console.log('transactions')
        await transactionController.getTransactions(req, res)
    })
    return router
}

