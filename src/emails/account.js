const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chhsu0222@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chhsu0222@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
