const nodemailer = require('nodemailer');

module.exports = (req, res) => {
  const text = 'check this out muthafucka! You got an email';
  const mailOptions = {
    from: process.env.PARKBOUND_EMAIL,
    to: 'nkbelow@gmail.com',
    subject: 'Welcome to parkbound!',
    // text: text,
    html: '<img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Double-O-Arch_Arches_National_Park_2.jpg" alt="parkpic">'

  }
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.PARKBOUND_EMAIL,
      pass: process.env.PARKBOUND_PASSWORD
    }
  })
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error, 'this was an error')
      res.send(error)
    } else {
      console.log('this was sent', info);
      res.send(info);
    }
  })


}