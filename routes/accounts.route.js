const router = require('express').Router()
const accountController = require('../controllers/account.controller')

module.exports = function(app, passport) {
    // 支出のリストを取得
    router.get('/accounts', async (req, res) => {
        await accountController.getAccounts(req, res)
    })
    return router
}
