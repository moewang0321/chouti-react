const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/api', {
        target: "https://m.chouti.com/",
        changeOrigin: true,
        https: true
    }))
}