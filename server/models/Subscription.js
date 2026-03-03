const SubscriptionSchema = new mongoose.Schema({
  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gym",
    required: true
  },

  planType: {
    type: String,
    enum: ["BASIC", "PRO", "PREMIUM"]
  },

  price: Number,

  startDate: Date,
  endDate: Date,

  status: {
    type: String,
    enum: ["ACTIVE", "EXPIRED", "CANCELLED"],
    default: "ACTIVE"
  },

  paymentGatewayId: String

}, { timestamps: true });