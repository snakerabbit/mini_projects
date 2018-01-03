var path = require('path');

module.exports = {
  entry: './js/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  presets: ["env"]
};
