import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import Team from "../../models/team"; // Make sure this matches your actual model path
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { teamName } = req.body;

  // Ensure that the request is authenticated
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  await dbConnect();

  try {
    // Verify the token and get the user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user._id);

    if (!user) {
      return res.status(400).json({ message: "Invalid user" });
    }

    // Check if the user is already in a team
    if (user.teamId) {
      return res
        .status(400)
        .json({ message: "User already in a team. Cannot create a new team." });
    }

    // Check if the teamName is provided
    if (!teamName) {
      return res.status(400).json({ message: "Team name is required" });
    }

    // Check if the teamName already exists
    const existingTeam = await Team.findOne({ teamName });
    if (existingTeam) {
      return res.status(400).json({ message: "Team name already exists" });
    }

    // Create a new team
    const teamId = uuidv4();
    const newTeam = new Team({
      teamId,
      teamName,
      leader: user._id, // Use user's ObjectId as the leader
      members: [user._id], // Add the user's ObjectId to the members array
    });

    user.teamId = teamId; // Assign teamId to the user

    await newTeam.save();
    await user.save();

    res.status(201).json({ message: "Team created successfully", teamId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
