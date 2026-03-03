const AttendanceSchema = new mongoose.Schema({
  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gym",
    required: true
  },

  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true
  },

  date: { type: Date, default: Date.now },
  checkInTime: Date,
  checkOutTime: Date

}, { timestamps: true });