const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/berillium.js',
    output: {
        filename: './js/berillium.js',
        path: path.resolve(__dirname, 'main'),
        libraryTarget: 'umd',
        library: 'berillium'
    } ,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};