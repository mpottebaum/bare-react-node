const express = require('express')
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express()
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = 3000


app.get('/', (req, res) => {
    console.log('method:   GET')
    console.log('route:    /')
    res.sendFile(__dirname + '/public/index.html')
})

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)
app.use(webpackHotMiddleware(compiler))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Waiting for Webpack to compile...`)
    console.log('\n')
    console.log('\n')
})