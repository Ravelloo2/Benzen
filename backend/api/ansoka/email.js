let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
       pass: process.env.PASS,
   }
 })
 
 transporter.verify((err, success) => {
   err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
 })
 
 app.post('/send', function(req, res) {
   
   let emailOptions = {
     from: process.env.EMAIL,
     to: `${req.body.mailerState.email}`,
     subject: 'pickle rick',
     text: 'Ponera att han blev en gurka Mårten!'
   }
   
   transporter.sendMail(emailOptions, function(err, data) {
     if (err) {
       res.json({
         status: "fail",
       })
     } else {
       console.log('== Email Sent! ==')
       res.json({
         status: "success",
       })
     }
   });
 })