const nodemailer = require('nodemailer');

module.exports = (req, res, cookie) => {

  const annualPassString = req.body.shoppingCartState.annualPass > 0 ? (req.body.shoppingCartState.annualPass + (req.body.shoppingCartState.annualPass > 1 ? ' annual passes' : ' annual pass')) : '';
  const dayPassString =  req.body.shoppingCartState.dayPass > 0 ? (' and ' + req.body.shoppingCartState.dayPass + (req.body.shoppingCartState.dayPass > 1 ? ' day passes ' : ' day pass ')) : '';


  const text = 'This is confirmation of your order for ' + annualPassString + dayPassString + '. Thank you for your purchase and enjoy our beautiful national parks!';
  console.log(req.body, 'INSIDE THE EMAILER')
  const mailOptions = {
    from: process.env.PARKBOUND_EMAIL,
    to: req.body.stripeEmail,
    subject: 'Order Confirmation: ' + req.body.id,
    text: text,
    // html: '<img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Double-O-Arch_Arches_National_Park_2.jpg" alt="parkpic">'

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