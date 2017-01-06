/**
 * Created by Administrator on 2017/1/5.
 */
var webpack = require('webpack')

module.exports = {
    entry: [
        './app.js',
        'webpack-dev-server/client?http://127.0.0.1:9090',//资源服务器地址
    ],
    output: {
        path: __dirname+'/dist/',
        publicPath: "http://127.0.0.1:9090/dist/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test:/\.vue$/,loader:'vue'}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}