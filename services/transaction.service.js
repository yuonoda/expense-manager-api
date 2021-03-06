const db = require('../models')

class TransactionService {
    /**
     * トランザクションの一覧を取得する
     * @returns {Promise<Model[]>}
     * @TODO Error handling
     */
    async getTransactions() {
        console.info('TransactionService::getTransactions')
        let transactions = {}
        await db.Transaction.findAll().then( models => {
            transactions = models.map(model => model.get())
        })
        return transactions
    }

    /**
     * トランザクションの詳細を取得する
     * @param transactionId
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async getTransaction({transactionId}) {
        console.info('TransactionService::getTransactions')
        const where = {transaction_id: transactionId}
        const transaction = await db.Transaction.findOne({where})
        return transaction
    }

    /**
     * トランザクションを追加または更新する
     * @param transactionId
     * @param transactionName
     * @param transactionAmount
     * @param transactionTime
     * @param isPaid
     * @param accountId
     * @returns {Promise<boolean|object>}
     */
    async upsert({transactionId,transactionName, transactionAmount, paidAt, isPaid, accountId = 1}) {
        console.log('TransactionService::createTransaction');
        let result = false
        await db.Transaction.upsert({
            transactionId,
            accountId,
            transactionName,
            transactionAmount,
            paidAt,
            isPaid
        }).then(transaction => {
            // console.debug(transaction[0].dataValues)
            result = transaction[0].dataValues
        }).catch(e => {
            console.error(e)
        })
        return result
    }

    /**
     * トランザクションを削除する
     * @param transactionId
     * @returns {Promise<boolean|number>}
     */
    async delete({transactionId}) {
        console.info('TransactionService::delete ', transactionId)
        let result = false
        await db.Transaction.destroy({where: {transactionId}}).then(count => {
            result = count
        }).catch(e => {
            console.error(e)
        })
        return result
    }
}

module.exports = TransactionService