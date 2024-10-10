module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@babel/plugin-transform-flow-strip-types'],
  // env: {
  //   development: {
  //     plugins: require('fs').existsSync('./source-location-logger.js')
  //       ? ['./source-location-logger.js']
  //       : [],
  //   },
  // },
};
