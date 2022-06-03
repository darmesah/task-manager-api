const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'alex@damisaproject.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. Let me know if you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'alex@damisaproject.com',
    subject: 'Goodbye',
    text: `Goodbye, ${name}. Let us know how we can improve.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
