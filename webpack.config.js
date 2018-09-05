const resolve = require('path').resolve;

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        path: resolve('dist'),
        publicPath: 'http://localhost:50000/dist/'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader'
            }, {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    }
};
