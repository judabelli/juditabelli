var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        "javascript" : ["./js/main.js"],
        "styles" : ["./scss/main.scss"]
    },
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                // Uses regex to test for a file type - in this case, ends with `.css`
                test: /\.scss$/,
                // Apply these loaders if test returns true
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
