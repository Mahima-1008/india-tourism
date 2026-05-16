import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema(
  {
    destinationName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
    },

    bookingDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Booking ||
  mongoose.model('Booking', BookingSchema)