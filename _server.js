const express = require('express')
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express()
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = 3000


// app.use(express.static('public'))

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Wait for Webpack to compile the project`)
})