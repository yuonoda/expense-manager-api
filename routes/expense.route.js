const router = require('express').Router()

module.exports = function(app, passport) {
    // 支出のリストを取得
    router.get('/expenses', async (req, res) => {
        console.log('expenses')
        return res.json({
            hello: 'world',
        })
    })
    return router
}
