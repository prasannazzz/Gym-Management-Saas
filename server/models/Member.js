// models/Member.js
const MemberSchema = new mongoose.Schema({
  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gym",
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  phone: String,
  age: Number,
  gender: String,
  address: String,

  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan"
  },

  joinDate: Date,
  expiryDate: Date,

  status: {
    type: String,
    enum: ["ACTIVE", "EXPIRED"],
    default: "ACTIVE"
  }

}, { timestamps: true });