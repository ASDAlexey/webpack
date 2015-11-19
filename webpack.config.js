'use strict';
var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
module.exports = {
    context: __dirname + "/frontend",//абсолютная директория ов которой ледат все модул и поиск производится относительно нее
    entry: {
        home: "./home",
        about: "./about",
        common: ["./welcome", "./common"]//при сборке в common.js будет все что было в нем + общего во всех точках входа кусочка сборки
    },
    output: {
        path: __dirname + '/public',//абсолютный путь к директории сборки
        filename: "[name].js",
        library: "[name]"//для common получит экспорт последнего модуля, для остальных точек входа просто их по названию
    },
    watch: NODE_ENV == 'development',// webpack пересобирает с учетом кеша только те файлы которые изменились
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-sourse-map' : null,
    plugins: [
        new webpack.NoErrorsPlugin(),//не создавать файлы если есть ошибки сборки
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        }),//определяет NODE_ENV
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",//имя нового общего во всех точках входа кусочка сборки
            chunks: ['about', 'home']//common - это общее из мобулей about и home
            //minChunks: 2//минимальное кол-во файлов в который есть общие куски кода для выноса в отдельный файл
        })
    ],
    //Поиск модулей
    resolve: {
        modulesDirectories: ['node_modules']
        //extensions: ['', 'js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', 'js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?optional=runtime'//?optional=runtime - уменьшение размера кода после babel
            }
        ]
    }
};
if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}