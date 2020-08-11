
class Response {
    response({statusCode, body = null, message = null, errors = null}) {
        console.info('Response::reponse')

        // ステータスが無効のときには、サーバーエラー
        if (!statusCode || statusCode < 100 || statusCode >= 600 ) {
            return this.internalServerError()
        }

        // body がないときは、messageとstatusCodeを返す
        if (!body) body = { statusCode, message, errors }
        return {statusCode: statusCode, body: JSON.stringify(body)}
    }
    ok(body = null) {
        return this.response({ statusCode: 200, message: 'OK' , body})
    }
    created(message = null) {
        console.info('Response::created')
        return this.response({ statusCode: 201, message: message || 'Created' })
    }
    badRequest(errors = null ,message = null) {
        return this.response({statusCode: 400, message: message || 'Bad Request', errors})
    }
    notFound(message = null) {
        return this.response({statusCode: 404, message: message || 'Not Found'})
    }
    internalServerError(message = null) {
        console.info('Response::internalServerError')
        return this.response({ statusCode: 500, message: message || 'Internal Server Error'})
    }
}

module.exports = Response