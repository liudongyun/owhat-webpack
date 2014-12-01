var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        })
    ]
};
