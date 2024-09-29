import mongoose from "mongoose";
import { User } from "./User";
import { Event } from "./Event";

const teamSchema = new mongoose.Schema(
  {
    teamId: {
      type: String,
      required: true,
      unique: true,
    },
    teamName: {
      type: String,
      required: true,
      unique: true,
    },
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    registeredEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    teamScore: {
      type: Number,
      default: 0, // Initialize score to 0
    },
  },
  { timestamps: true }
);

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);
export default Team;
