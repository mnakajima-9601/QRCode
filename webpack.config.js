module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    target: 'node',

    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.node$/,
                loader: 'node-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
    },
}