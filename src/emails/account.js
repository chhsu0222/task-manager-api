const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'chhsu0222@gmail.com',
    from: 'chhsu0222@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you.'
})
