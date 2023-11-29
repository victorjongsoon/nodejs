var nodemailer = require('nodemailer'); // import nodemailer module

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', // your email address
        pass: '' // your password
    }
});

var mailOptions = {
    from: '', // your email address
    to: '', // email address of the receiver
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}; // email options

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error); // error
    } else {
        console.log('Email sent: ' + info.response); // email sent
    }
}); // send email


