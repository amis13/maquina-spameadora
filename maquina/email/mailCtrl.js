const nodemailer = require("nodemailer");
require("dotenv").config();
const { tarjet } = require('./target.js');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: `${process.env.SENDER}`,
    pass: `${process.env.PASSWORD}`,
  },
});
//TODO automatizacion
// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `${process.env.SENDER}`, // sender address
    to: `${tarjet}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

}

sendMail().catch(console.error);
