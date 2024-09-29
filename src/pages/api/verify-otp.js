import connectMongo from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, otp, password } = req.body;

    try {
      await connectMongo();

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });
      if (user.otp !== otp)
        return res.status(400).json({ message: "Invalid OTP" });

      // OTP is valid, hash the password and complete registration
      const hashedPassword = await bcrypt.hash(password, 10);

      user.password = hashedPassword;
      user.otp = null; // Clear OTP field after verification
      console.clear();
      console.log(user);
      await user.save();

      res
        .status(200)
        .json({ message: "Email verified and registration completed" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
      console.log(error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
