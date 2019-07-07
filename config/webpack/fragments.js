const { resolve } = require('path');

const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports.setMode = (mode = 'development') => ({ mode });

module.exports.setEntry = app => ({
  entry: ['@babel/polyfill', app],
});

module.exports.setSourcemapMode = (mode = 'development') => ({
  devtool: mode === 'production' ? '' : 'source-map',
});

module.exports.setOutput = (path) => {
  const plugin = new HtmlWebpackPlugin({
    template: resolve('src', 'index.html'),
  });

  return {
    output: {
      path,
      filename: '[name].[hash].js',
    },
    plugins: [plugin],
  };
};

module.exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    contentBase: resolve('src', 'assets'),
    compress: true,
    host, // Defaults to "localhost"
    port, // Defaults to 8080
    overlay: true,
  },
});

module.exports.loadJSX = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.jsx?$/,
      include,
      exclude,
      use: ['babel-loader'],
    }],
  },
});

module.exports.loadGraphQl = () => ({
  module: {
    rules: [
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: 'graphql-import-loader',
      },
    ],
  },
});

// To use PostCSS we need to add the "postcss-loader" and a configuration file
// called "postcss.config.js" with the plugins we are going to use.

module.exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.css$/,
      include,
      exclude,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }],
  },
});

module.exports.extractCSS = ({ include, exclude } = {}) => {
  const plugin = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].css',
  });

  return {
    module: {
      rules: [{
        test: /\.css$/,
        include,
        exclude,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      }],
    },
    plugins: [plugin],
    optimization: {
      minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
  };
};

module.exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      test: /\.(jpg|png|svg)$/,
      include,
      exclude,
      use: [
        {
          loader: 'image-trace-loader',
          options: {
            color: '#cccccc',
          },
        },
        {
          loader: 'url-loader',
          options,
        },
      ],
    }],
  },
});

module.exports.notify = () => ({
  plugins: [
    new SystemBellPlugin(),
    new WebpackNotifierPlugin({
      contentImage: resolve('src', 'assets', 'icons', 'favicon.png'),
    }),
  ],
});

module.exports.purifyCSS = (paths) => {
  const plugin = new PurifyCSSPlugin({ paths });
  return {
    plugins: [plugin],
  };
};

module.exports.extensions = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
});

module.exports.getAssets = () => ({
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('src', 'assets'),
        to: resolve('dist', 'assets'),
      },
    ]),
  ],
});
