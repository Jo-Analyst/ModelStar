const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
//const htmlMinifierWebpackPlugin = require("html-minifier-webpack-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyjsPlugin = require("uglifyjs-webpack-plugin");
const webpackDevServer = require("webpack-dev-server");

module.exports = {
    mode: "production",
    entry: "./src/indexJS.js",
    output: {
        filename: "index.js",
        path: __dirname + "/public"
    },
    devServer: {
        contentBase: "./public/",
        port: 8000
    },
    optimization: {
        minimizer: [
            new UglifyjsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "src/assets/index.html",
            inject: "body",
            minify: {
                html5: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: false,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributese: true,
                useShortDoctype: true
            }
        })
        // new htmlMinifierWebpackPlugin({
        //     filename: "index.html",
        //     template: "src/assets/index.html",            
        // })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"

            ]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: ["file-loader"]
        }, {
            test: /\.html$/,
            use: ["html-loader"]
        }]
    }
}