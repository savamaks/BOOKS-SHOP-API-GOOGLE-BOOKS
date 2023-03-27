const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "main.js",
    },
    mode: "production", // минификация для js файлов
    //production
    //development
    optimization: {
        minimizer: [
            `...`,// оставить дефолтные настройки webpack и добавить то что ниже
            new CssMinimizerPlugin(),
        ],

    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        
        static: {
            directory: path.join(__dirname, "./output"),
        },
        port:3000,
        hot: true,
        
    },
};
