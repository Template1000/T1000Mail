const Joi = require('joi')

const name = Joi.string().pattern(new RegExp('^[ a-zA-Z]')).min(3).max(30)
const email = Joi.string().email()
const phone = Joi.number().integer().min(999999999).max(9999999999)
const description = Joi.string().pattern(/^[ a-zA-Z0-9,.$]+$/)

const sendMailSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  phone: phone.required(),
  description: description.required()
})

module.exports = sendMailSchema
