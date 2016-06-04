const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};