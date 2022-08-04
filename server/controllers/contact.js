import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const contactForm = async (req, res) => {

  //getting our own access token so it doesnt expire
  const oAuth2Client = new google.auth.OAuth2(
    `${process.env.OAUTH_CLIENTID}`,
    `${process.env.OAUTH_CLIENT_SECRET}`,
    `${process.env.REDIRECT_URI}`
  )
  oAuth2Client.setCredentials({
    refresh_token: `${process.env.OAUTH_REFRESH_TOKEN}`,
  })

  const accessToken = await oAuth2Client.getAccessToken()

  let transport = {
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
      clientId: `${process.env.OAUTH_CLIENTID}`,
      clientSecret: `${process.env.OAUTH_CLIENT_SECRET}`,
      refreshToken: `${process.env.OAUTH_REFRESH_TOKEN}`,
      accessToken: accessToken,
    },
  }

  let transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take message')
    }
  })

  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const htmlContent = `<p> Name: ${name} </p>
                   <p> Email: ${email} </p>
                   <p> Message: ${message} </p>`

  const mail = {
    from: name,
    to: 'pauljungdev@gmail.com',
    subject: 'New Message from Contact Form',
    html: htmlContent,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail',
      })
    } else {
      res.json({
        msg: 'success',
      })
    }
  })
}

export default { contactForm }
