//https://webpack.kr/guides/csp/
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env, options) => {
  options = options || {};
  options.mode = options.mode || 'development';
  return {
    entry: './src/index.js',
    output: {
      filename: 'static/[name].[hash].js',
      chunkFilename: 'static/[name].[chunkhash].chunk.js',
      assetModuleFilename: 'images/[hash][ext][query]',
      path: path.resolve(__dirname + '/build'),
      publicPath: '/',
      clean: true,
      pathinfo: false,
    },
    mode: options.mode, //[ production, development, none ]
    module: {
      //loaders
      rules: [
        ...require('./webpack.loaders').concat([
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: false },
              },
            ],
          },
        ]),
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: 'REACT-APP',
        template: './public/index.html', // target
        filename: 'index.html', // output
      }),
      new MiniCssExtractPlugin({
        filename: './css/[name]_[id].css',
        chunkFilename: 'css/[name]_[id].css',
      }),
      new webpack.DefinePlugin({
        ELASTIC_URL: JSON.stringify('http://kdg1986.synology.me:9200'),
        DEVELOP_MODE: options.mode === 'development',
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new Dotenv({
        path: './.env',
        //systemvars: true,
        allowEmptyValues: true,
        //safe: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@COMPONENTS': path.resolve(__dirname, 'src/components/'),
        '@COMMON': path.resolve(__dirname, 'src/components/common'),
        '@STYLE': path.resolve(__dirname, 'src/css'),
        '@ELECTRON': path.resolve(__dirname, 'electron/'),
      },
      fallback: {
        //crypto: require.resolve('crypto-browserify'),
        //stream: require.resolve('stream-browserify'),
        //path: require.resolve('path-browserify'),
        //os: require.resolve('os-browserify/browser'),
        //http: require.resolve('stream-http'),
        //https: require.resolve('https-browserify'),
        //assert: require.resolve('assert/'),
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname + '/build'),
      index: 'index.html',
      port: 3000,
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/v2': {
          target: 'https://www.mocky.io',
          changeOrigin: true,
          pathRewrite: { '^/v2': '' },
        },
      },
    },
  };
};
