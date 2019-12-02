const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://106.12.10.151:3000/',
        pathRewrite: {
            "^/api": "/"
        }
    }));
};