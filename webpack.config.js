const Dotenv = require('dotenv-webpack');

module.exports = {
  // Other webpack configuration options...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      // ...
    }),
  ],
};
