const router = require('express').Router()
const transactionController = require('../controllers/transaction.controller')

module.exports = function(app, passport) {
    // 支出のリストを取得
    router.get('/transactions', async (req, res) => {
        console.log('transactions')
        await transactionController.getTransactions(req, res)
    })
    router.get('/transaction/:transaction_id', async (req, res) => {
        console.log('transaction')
        await transactionController.getTransaction(req, res)
    })
    return router
}

