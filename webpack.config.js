'use strict';
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    entry: "./home", //какой модуль собирать
    output: {
        filename: "build.js",
        library: "home"
    },
    watch: true,// webpack пересобирает с учетом кеша только те файлы которые изменились
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "eval"
};