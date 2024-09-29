import nodemailer from "nodemailer";

const sendEmail = async (recipient, subject, message) => {
  try {
    console.log("Creating email transporter...");
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipient,
      subject: subject,
      text: message,
    };

    console.log("Sending email...");
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
