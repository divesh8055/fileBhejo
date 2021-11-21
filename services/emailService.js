const nodemailer = require("nodemailer");
async function sendMail({ from, to, subject, text, html }) {
  let transporter = nodemailer.createTransport({
    name: process.env.SMTP_HOST,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    // service: "SendinBlue",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: `FileBhejo<${from}>`,
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
  console.log(info);
}

module.exports = sendMail;
