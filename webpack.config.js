var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                exclude: '/node_modules/',
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
