const TerserPlugin = require('terser-webpack-plugin');
const { override, addWebpackPlugin } = require('customize-cra');

module.exports = override(
  addWebpackPlugin(
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    })
  )
);