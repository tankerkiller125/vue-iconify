const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
    mode: 'development',
    devtool: '#eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hotReload: true
                }
            }
        ]
    },
    plugins: [
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
    ]
});
