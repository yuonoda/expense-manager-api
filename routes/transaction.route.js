const router = require('express').Router()
const transactionController = require('../controllers/transaction.controller')

module.exports = function(app, passport) {
    // 支出のリストを取得
    router.get('/transactions', async (req, res) => {
        await transactionController.getTransactions(req, res)
    })
    router.get('/transaction/:transaction_id', async (req, res) => {
        await transactionController.getTransaction(req, res)
    })
    router.put('/transaction', async (req, res) => {
        await transactionController.setTransaction(req, res)
    })
    return router
}

