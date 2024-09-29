import connectMongo from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import sendEmail from "../../lib/sendEmail"; // Assumes you have a utility to send emails
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Use a strong secret key

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      await connectMongo();

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Invalid password" });

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      user.otp = otp;
      await user.save();

      await sendEmail(email, otp);

      res.status(200).json({ message: "OTP sent to your email" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
      console.log(error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
