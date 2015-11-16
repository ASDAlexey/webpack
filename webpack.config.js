'use strict';
var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
module.exports = {
    entry: "./home", //какой модуль собирать
    output: {
        filename: "build.js",
        library: "home"
    },
    watch: NODE_ENV == 'development',// webpack пересобирает с учетом кеша только те файлы которые изменились
    watchOptions: {
        aggregateTimeout: 100
    },
    //devtool: NODE_ENV == 'development' ? 'eval' : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /(node_modules|bower_components)/
        }]
    }
};