const express = require('express')

const MailService = require('../services/mail.service')
const service = new MailService()

const validatorHandler = require('./../middleware/validator.handler')
const sendMailSchema = require('./../schemas/mail.schema')

const router = express.Router()

router.post('/send',
  validatorHandler(sendMailSchema, 'body'),
  async (req, res, next) => {
    try {
      const { name, email, phone, description } = req.body
      const response = await service.sendMail(name, email, phone, description)
      res.json(response)
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router
