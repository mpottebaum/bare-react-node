const express = require('express')
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express()
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = 3000

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)

app.use(webpackHotMiddleware(compiler))

// const watching = compiler.watch({}, () => console.log('watch'))

// console.log('watching', watching)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


