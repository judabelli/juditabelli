const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = [{
  devtool: 'cheap-module-source-map',
  entry: './material/components/main.js',
  output: {
    path: path.resolve(__dirname, './site/js'),
    filename: 'design-system.js',
    sourceMapFilename: 'design-system.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'buble-loader'
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      defaultSizes: 'parsed',
      generateStatsFile: true,
      statsOptions: {chunkModules: true},
      statsFilename: 'design-system.json',
      logLevel: 'info'
    })
  ]
},
  {
    devtool: 'cheap-module-source-map',
    entry: './material/components/c-favorites/data-js-api.js',
    output: {
      path: path.resolve(__dirname, './site/js'),
      filename: 'sundio-favorites.js',
      sourceMapFilename: 'sundio-favorites.map'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'buble-loader'
          }
        }
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        defaultSizes: 'parsed',
        generateStatsFile: true,
        statsOptions: { chunkModules: true },
        statsFilename: 'sundio-favorites.json',
        logLevel: 'info'
      })
    ]
  }
];
