const slsw = require('serverless-webpack')
//const { node } = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    devtool: 'source-map',
    externals: [nodeExternals()],
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    optimization: {
        //nao vamos minimizar o codigo por enquanto
        minimize: false
    },
    performance: {
        //desabilita warnings sobre o tamanho das entry points
        hints: false
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              include: __dirname,
              exclude: /node_modules/
            }
        ]
    }
}