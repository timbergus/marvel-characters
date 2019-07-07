module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        targets: {
          browsers: [
            'last 2 versions',
            'ie >= 11',
          ],
        },
      },
    ],
    '@babel/react',
    '@babel/flow',
  ],
  plugins: [
    '@babel/plugin-transform-template-literals',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-optional-chaining',
      {
        loose: false,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false,
      },
    ],
  ],
};
