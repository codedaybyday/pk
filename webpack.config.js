/**
 * Created by Administrator on 2017/1/5.
 */
var webpack = require('webpack')

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    resolve: {

        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}