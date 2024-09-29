import connectMongo from "../../lib/mongodb";
import User from "../../models/User";
import sendEmail from "../../lib/sendEmail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, password, college, contact } = req.body; // Add contact here

    try {
      console.clear();
      console.log(req.body);
      console.log("Connecting to MongoDB...");
      await connectMongo();
      console.log("MongoDB connected.");

      const userExists = await User.findOne({ email });
      if (userExists)
        return res.status(400).json({ message: "User already exists" });

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const newUser = new User({
        firstname,
        lastname,
        email,
        otp,
        password,
        college,
        contact, // Include contact in the user creation
      });

      console.log("Sending OTP email...");
      await sendEmail(email, "Your OTP Code", otp);
      console.log("OTP email sent.");

      await newUser.save();

      console.log("User saved to MongoDB.");

      res.status(200).json({ message: "OTP sent to your email" });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
