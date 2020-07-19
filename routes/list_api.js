const routes = []

// TODO 自動でディレクトリ内をみてルーティングとして登録させたい
module.exports = function(app, passport) {
    routes.push(require('./index.route')(app, passport))
    routes.push(require('./transaction.route')(app, passport))
    routes.push(require('./accounts.route')(app, passport))
    return routes
}
