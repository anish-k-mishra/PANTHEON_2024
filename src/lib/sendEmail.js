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
      subject: "Your Pantheon 2024 OTP",
      text:  `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4CAF50; text-align: center;">Welcome to Pantheon Techfest 2024!</h2>
      <p>Hi there,</p>
      <p>Greetings from Pantheon WebTeam2024.</p>
      <p>Your One-Time Password (OTP) is:</p>
      <div style="font-size: 24px; text-align: center; font-weight: bold; color: #4CAF50; padding: 10px 0;">
        ${otp}
      </div>
      <p>This OTP is valid for the next 10 minutes. Please use it to complete your login process.</p>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Best regards,<br>Pantheon WebTeam2024 Team</p>
      <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;">
    </div>`,
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
