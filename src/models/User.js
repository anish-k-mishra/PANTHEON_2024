import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String, required: false },
  college: { type: String, required: false },
  contact: { type: String, required: false },
  teamId: {
    type: String,
    unique: true,
    default: "",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
