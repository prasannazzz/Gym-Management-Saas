const PlanSchema = new mongoose.Schema({
  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gym",
    required: true
  },

  name: { type: String, required: true },
  durationInDays: Number,
  price: Number,
  description: String,

  isActive: { type: Boolean, default: true }

}, { timestamps: true });