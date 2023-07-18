const express = require('express')

const mailRouter = require('./mail.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/mail', mailRouter)
}

module.exports = routerApi
