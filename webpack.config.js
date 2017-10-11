const path = require('path');

module.exports = {
  entry: './src/traffic-lights.js',
  output: {
    filename: 'traffic-lights.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': ['react', 'env'],
            'plugins': ['transform-react-jsx'],
          },
        },
      }
    ],
  },
};
