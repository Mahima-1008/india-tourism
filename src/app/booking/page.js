'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function BookingPage() {

  const searchParams = useSearchParams()

  const destination = searchParams.get('destination')

  const price = searchParams.get('price')

  const [email, setEmail] = useState('')

  const handleBooking = async () => {

    const res = await fetch('/api/bookings/create', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        destinationName: destination,
        price,
        userEmail: email,
      }),
    })

    const data = await res.json()

    alert(data.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[500px]">

        <h1 className="text-4xl font-bold mb-8">
          Book Your Trip
        </h1>

        <div className="mb-5">

          <p className="text-xl mb-2">
            Destination:
          </p>

          <h2 className="text-3xl font-bold">
            {destination}
          </h2>

        </div>

        <div className="mb-5">

          <p className="text-xl mb-2">
            Price:
          </p>

          <h2 className="text-3xl font-bold text-orange-500">
            ₹{price}
          </h2>

        </div>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg mb-6"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
        >
          Confirm Booking
        </button>

      </div>

    </div>
  )
}