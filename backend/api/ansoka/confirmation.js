require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    }
})

let emailOptions = {
    from: 'eliaz.a.ravello02@gmail.com',
    to: 'g12eliazra@gmail.com',
    subject: 'Testing and Testing',
    text: 'NICE'
}

transporter.sendMail(emailOptions, function(err, data) {
    if (err) {
        console.log('Error Ocurrs')
    } else {
        console.log('Email sent!')
    }
});
