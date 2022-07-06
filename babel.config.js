module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/components',
          '@images': './src/assets/image',
          '@styles': './src/styles',
          '@screens': './src/screens',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
