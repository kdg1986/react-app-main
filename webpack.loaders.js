module.exports = [
  {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      //plugins: [],
    },
  },
  {
    test: /\.(css|scss|less)$/,
    use: [
      {
        loader: require('mini-css-extract-plugin').loader,
        options: {
          //publicPath: 'build/static/images',
        },
      },
      {
        loader: 'css-loader',
        options: {
          //url: false
        },
      },
      'sass-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 4 * 1024, // 4kb
      },
    },
  },
];
