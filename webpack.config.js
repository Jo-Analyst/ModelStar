const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizedCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const webpackdevServer = require("webpack-dev-server");



module.exports = {
    mode: "production",
    entry: "./src/indexJS.js",
    output: {
        filename: "index.js",
        path: __dirname + "/public"
    },
    devServer: {
        contentBase: "./public/",
        port: 8081
    }
    ,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache:true,
                parallel:true
            }),
            new OptimizedCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HTMLWebPackPlugin({
            filename: "index.html",
            template: "src/assets/index.html",
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
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ]
        },
        {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.html$/,
            use: ["html-loader"]
        }]
    }
}