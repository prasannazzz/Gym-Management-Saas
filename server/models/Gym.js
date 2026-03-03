// models/Gym.js
const GymSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ownerName: String,
    email: { type: String, unique: true },
    phone: String,
    address: String,
    city: String,
    state: String,
    logo: String,

    subscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
