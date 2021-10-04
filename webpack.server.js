const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve("build-server"),
        filename: "index.js"
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_module/,
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                exclude: /node_module/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ]
    }
}