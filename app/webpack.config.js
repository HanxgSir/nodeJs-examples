var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        'login': ['./src/login/login.js'],
        'register': ['./src/register/register.js'],
        'home': ['./src/home/home.js'],
        'refer': ['./src/refer/refer.js'],
        'myBugs': ['./src/myBugs/myBugs.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/static'),
        filename: '[name].js',
        chunkFilename: "[id].chunk.js",
        publicPath: "/static"
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=102400&name=/images/[hash:8].[ext]"
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};