var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngminPlugin = require("ngmin-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    plugins: [
        new ngminPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        })
    ]
};
