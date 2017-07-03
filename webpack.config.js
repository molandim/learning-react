const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/main'],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, './')
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 8000
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, './src')],
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0', 'react']
            }
        }]

    }
};