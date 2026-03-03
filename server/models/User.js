// models/User.js
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["SUPER_ADMIN", "OWNER", "TRAINER", "MEMBER"],
    required: true
  },

  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gym"
  },

  isActive: { type: Boolean, default: true }

}, { timestamps: true });