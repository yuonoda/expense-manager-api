// index.js
console.log('index.js')
const serverless = require('serverless-http');
const express = require('express')
const app = express()
const path = require('path')
const passport = require('passport')

// TODO list_api.jsを使わずに、routes配下が自動でルーティングされるにようにしたい
const routesApi = require(path.join(__dirname, './routes/list_api.js'))(app, passport)
for (const router of routesApi) {
  console.log('router:', router)
  app.use('/api', router)
}

module.exports.handler = serverless(app);