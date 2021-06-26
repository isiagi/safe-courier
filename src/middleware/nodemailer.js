import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

dotenv.config()

export const EmailTransporter = async(email) => {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.USERS,
        pass: process.env.PASS,
      },
    })
  );

  var mailOptions = {
    from: "somerealemail@gmail.com",
    to: email,
    subject: "Admin has updated your parecel",
    text: "Login and view changes made",
  };


  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

