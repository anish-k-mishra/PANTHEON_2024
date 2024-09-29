import dbConnect from "../../lib/dbConnect";
import User from "../../models/User"; // Corrected path to models
import Team from "../../models/team"; // Corrected path to models
import jwt from "jsonwebtoken"; // Import jwt for token verification

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { teamId } = req.body;

  // Ensure that the request is authenticated
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  await dbConnect();

  try {
    // Verify the token to get the user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user._id); // Fetch user using decoded token

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user is already in a team or is a team leader
    if (user.teamId) {
      return res
        .status(400)
        .json({ message: "User already in a team. Cannot join a new team." });
    }

    // Find the team by teamId
    const team = await Team.findOne({ teamId });
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    // Check if the user is already a member of the team
    if (team.members.includes(user._id)) {
      return res
        .status(400)
        .json({ message: "User already a member of the team" });
    }

    // Add user to the team
    user.teamId = team._id; // Assign the team ID to the user
    team.members.push(user._id); // Add user to the team's members
    await team.save(); // Save the updated team
    await user.save(); // Save the updated user

    res.status(200).json({ message: "User added to the team successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
