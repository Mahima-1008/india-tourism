import connectDB from '@/lib/mongodb'
import Booking from '@/models/Booking'

export async function POST(req) {

  try {

    await connectDB()

    const body = await req.json()

    const booking = await Booking.create(body)

    return Response.json({
      message: 'Booking Successful',
      booking,
    })

  } catch (error) {

    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }
}