const express = require('express')
const serverless = require('serverless-http')

const path = require('path')

const app = express()
//app.use(express.static(path.join(__dirname, 'dist')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(`/.netlify/functions/api`)

module.exports = app
module.exports.handler = serverless(app)