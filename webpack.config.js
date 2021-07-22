
module.exports = {
    mode : "development",
    entry : {
        "test" : `${__dirname}/src/test.js`
    },
    output : {
        filename : "[name].js",
        path : `${__dirname}/build/`
    },
    module : {
        rules : [
            {
                test : /\.svelte/,
                use : {
                    loader : "svelte-loader",
                    options : {preprocess : require('svelte-preprocess')({})}
                }
            },
            {
                test : /\.ts$/,
                use : "ts-loader",
                exclude : /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".svelte"]
    }
}