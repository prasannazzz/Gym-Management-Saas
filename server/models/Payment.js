const PaymentSchema = new mongoose.Schema({
  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gym",
    required: true
  },

  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member"
  },

  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan"
  },

  amount: Number,
  paymentMethod: {
    type: String,
    enum: ["CASH", "UPI", "CARD", "ONLINE"]
  },

  transactionId: String,

  paymentDate: { type: Date, default: Date.now }

}, { timestamps: true });