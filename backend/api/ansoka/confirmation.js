const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: 'eliaz.a.ravello02@gmail.com',
        pass: 'RealMadrid2002043678'
    }
})

const mailOptions = {
    from: 'vindication@enron.com',
    to: 'friendsofenron@gmail.com',
    subject: 'Invoices due',
    text: 'We need your money dude'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log('Email sent:' + info.response)
    }
})