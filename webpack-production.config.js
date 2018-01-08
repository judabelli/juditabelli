// WebpackStripLoader : require the striploader npm module
var WebpackStripLoader = require('strip-loader');
// devConfig : we require the original webpack configuration file
var devConfig = require('./webpack.config.js');

// we create a new object, and pass in the test and exclude keys
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
}


//  we push the new object into our loaders array from our original config
devConfig.module.loaders.push(stripLoader);

//  we export our new config object
module.exports = devConfig;