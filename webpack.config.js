module.exports = {
    entry: ["./global.js", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'

            }
        ],
        loaders: [
            {
                test: [/\.jsx?$/, /\.js$/, /\.es6$/],
                exclude: '/node_modules',
                loader: 'babel-loader',
                query : {
                    presets: ["es2015", "stage-0", "react"],
                }
            }
        ]
    },
    resolve: {
        // Resolve: Lets us specify what kind of file types we can process without specifically giving
        // a file extension.
        extensions: ['.js', '.es6']
    }
}