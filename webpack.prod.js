const merge = require('webpack-merge');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  stats: {
    assets: true,
    entrypoints: true,
    chunks: true,
    modules: true,
    builtAt: true,
    hash: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new BundleStatsWebpackPlugin(), new MiniCssExtractPlugin()]
});
