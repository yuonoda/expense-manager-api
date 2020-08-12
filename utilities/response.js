class Response {
    response({statusCode, body = null, message = null, errors = null}) {
        // ステータスが無効のときには、サーバーエラー
        if (!statusCode || statusCode < 100 || statusCode >= 600) {
            return this.internalServerError()
        }

        // body がないときは、messageとstatusCodeを返す
        if (!body) body = {statusCode, message, errors}
        return {statusCode: statusCode, body: JSON.stringify(body)}
    }

    ok(body = null, message = null) {
        return this.response({statusCode: 200, message: message || 'OK', body})
    }

    created(body = null, message = null) {
        return this.response({statusCode: 201, message: message || 'Created' , body})
    }

    // noContent(message = null) {
    //     return this.response({ statusCode: 204, message: 'No Content' | message})
    // }
    badRequest(errors = null, message = null) {
        return this.response({statusCode: 400, message: message || 'Bad Request', errors})
    }

    notFound(message = null) {
        return this.response({statusCode: 404, message: message || 'Not Found'})
    }

    internalServerError(message = null) {
        console.info('Response::internalServerError')
        return this.response({statusCode: 500, message: message || 'Internal Server Error'})
    }
}

module.exports = Response