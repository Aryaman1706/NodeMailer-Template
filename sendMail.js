const nodemailer = require('nodemailer');

async function sendMail(user, subject, text){
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'thisIsMyEmail@gmail.com',
            pass: 'thisIsMyEmailPassword'
        }
    });

    let info = await transporter.sendMail({
        from: 'thisIsMyEmail@gmail.com',
        to: JSON.stringify(user),
        subject: subject,
        text: text
        // html: <p>Hello World!</p>
    });

    console.log("Message sent: %s", info.messageId);          
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = sendMail;