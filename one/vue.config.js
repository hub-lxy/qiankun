const { name } = require('./package');
console.log('name:', name)
module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*', //允许开发环境跨域
        },
    },
    configureWebpack: {
        output: {
            library: `${name}`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};