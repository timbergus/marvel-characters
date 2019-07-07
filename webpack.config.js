const glob = require('glob');
const merge = require('webpack-merge');
const { resolve } = require('path');

const {
  setMode,
  setEntry,
  setOutput,
  setSourcemapMode,
  devServer,
  loadJSX,
  loadCSS,
  extractCSS,
  loadImages,
  notify,
  purifyCSS,
  extensions,
  getAssets,
  loadGraphQl,
} = require('./config/webpack/fragments');

module.exports = env => merge([
  env.dev && setMode('development'),
  env.prod && setMode('production'),
  setEntry(resolve('src', 'index.jsx')),
  setOutput(resolve('dist')),
  env.dev && setSourcemapMode('development'),
  env.prod && setSourcemapMode('production'),
  env.dev && devServer({
    host: '0.0.0.0',
    port: 3000,
  }),
  loadJSX({
    include: resolve('src'),
    exclude: /node_modules/,
  }),
  loadGraphQl(),
  env.dev && loadCSS({
    include: resolve('src'),
    exclude: /node_modules/,
  }),
  env.prod && extractCSS({
    include: resolve('src'),
    exclude: /node_modules/,
  }),
  loadImages({
    include: resolve('src'),
    exclude: /node_modules/,
    options: {
      limit: 25000,
      name: '[name].[hash].[ext]',
    },
  }),
  notify(),
  purifyCSS(glob.sync(resolve('src', '**', '*'), {
    nodir: true,
  })),
  extensions(),
  getAssets(),
]);
