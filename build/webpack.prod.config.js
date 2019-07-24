const path = require('path');
const merge = require('webpack-merge');
const DashboardPlugin = require("webpack-dashboard/plugin");
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '../dist'),
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
});
