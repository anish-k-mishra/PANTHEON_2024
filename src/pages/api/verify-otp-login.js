import connectMongo from "../../lib/mongodb";
import User from "../../models/User";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Use the same secret key

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, otp } = req.body;

    try {
      await connectMongo();

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });
      if (user.otp !== otp)
        return res.status(400).json({ message: "Invalid OTP" });

      user.otp = null; // Clear OTP field after verification
      await user.save();

      const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: "1h" });
      console.log(token);
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
      console.log(error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
