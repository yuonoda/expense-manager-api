const router = require('express').Router()

module.exports = function(app, passport) {
    // 支出のリストを取得
    router.get('/', async (req, res) => {
        return res.json({
            hello: 'world',
        })
    })
    return router
}
