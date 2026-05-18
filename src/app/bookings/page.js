'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function BookingsPage() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {

    const savedBookings =
      JSON.parse(localStorage.getItem('bookings')) || []

    setBookings(savedBookings)

  }, [])

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-8 max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold text-orange-500 mb-12">

          My Bookings

        </h1>

        {bookings.length === 0 ? (

          <div className="bg-gray-100 dark:bg-white/10 p-10 rounded-[35px]">

            <p className="text-2xl text-gray-600 dark:text-gray-300">

              No bookings yet.

            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-10">

            {bookings.map((booking, index) => (

              <div
                key={index}
                className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[35px] overflow-hidden shadow-2xl"
              >

                <img
                  src={booking.image}
                  alt={booking.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-4xl font-bold text-orange-500 mb-4">

                    {booking.name}

                  </h2>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">

                    {booking.description}

                  </p>

                  <p className="text-3xl font-bold text-orange-500">

                    ₹{booking.price}

                  </p>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  )
}