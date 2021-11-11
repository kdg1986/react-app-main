const webpackConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, options) => {
  options.devMode = false;
  options.mode = 'production';
  return {
    ...webpackConfig(env, options),
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
          },
          chunkFilter: (chunk) => {
            if (chunk.name === 'vendor') {
              return false;
            }
            return true;
          },
        }),
      ],
    },
    module: {
      //loaders
      rules: [
        ...require('./webpack.loaders').concat([
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: true },
              },
            ],
          },
        ]),
      ],
    },
  };
};
