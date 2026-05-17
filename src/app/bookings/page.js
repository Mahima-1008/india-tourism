'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function BookingsPage() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {

    fetchBookings()

  }, [])

  const fetchBookings = async () => {

    const res = await fetch('/api/bookings/all')

    const data = await res.json()

    setBookings(data)
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white">

      <Navbar />

      <div className="pt-32 px-10">

        <h1 className="text-6xl font-bold mb-12">
          My Bookings
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {bookings.map((booking) => (

            <div
              key={booking._id}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-[35px] shadow-2xl"
            >

              <h2 className="text-4xl font-bold mb-5">
                {booking.destinationName}
              </h2>

              <p className="text-xl text-gray-300 mb-4">
                {booking.userEmail}
              </p>

              <p className="text-3xl font-bold text-orange-400">
                ₹{booking.price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}