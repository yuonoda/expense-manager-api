/**
 * APIレスポンスをフォーマット化するクラス
 */
class Format {
    convertSnakeCamel(arg, isSnakeToCamel = true) {
        if (Array.isArray(arg) ) {
            return arg.map(element => this.convertSnakeCamel(element, isSnakeToCamel))
        } else if (typeof arg == 'object' && arg !== null) {
            let replaced = {}
            Object.keys(arg).forEach(key => {
                let replacer
                let searchRegex
                if (isSnakeToCamel) {
                    replacer = (x,y) => {return y.toUpperCase()}
                    searchRegex = /_([a-z])/g
                } else {
                    replacer = (x,y) => {return "_" + y.toLowerCase()}
                    searchRegex = /([A-Z])/g
                }
                const newKey = key.replace(searchRegex, replacer)
                replaced[newKey] = this.convertSnakeCamel(arg[key], isSnakeToCamel)
            })
            return replaced
        } else {
            return arg
        }
    }
    formatResponse(obj) {
        const json = JSON.parse(JSON.stringify(obj))
        return this.convertSnakeCamel(json, false)
    }
}

module.exports = Format