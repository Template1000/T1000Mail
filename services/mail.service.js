const nodemailer = require('nodemailer')

const { config } = require('../config/config')

class MailService {
  async sendMail(infoName, infoMail, infoPhone, infoMessage) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      secure: false,
      port: 587,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword
      }
    })

    await transporter.sendMail({
      from: infoMail,
      to: config.smtpEmail,
      subject: `${infoName} - Desde ${config.domain}`,
      text: `Telefono: ${infoPhone}
      Mensaje: ${infoMessage}`
    })
    return { message: 'mail sent' }
  }
}

module.exports = MailService
