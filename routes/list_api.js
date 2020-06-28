const routes = []

module.exports = function(app, passport) {
    routes.push(require('./expense.route')(app, passport))
    return routes
}
