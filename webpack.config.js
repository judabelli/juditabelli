var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build',
        filename: "bundle.js"
    },

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(), not needed any more
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [
                    autoprefixer
                ]
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader' , 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            }
        ]
    }
};