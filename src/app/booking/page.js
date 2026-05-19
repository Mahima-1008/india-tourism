'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function BookingPage() {

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

        <h1 className="text-6xl font-bold text-orange-500 mb-10">

          My Bookings

        </h1>

        {bookings.length === 0 ? (

          <div className="bg-gray-100 dark:bg-white/10 p-10 rounded-[35px] text-center">

            <h2 className="text-3xl mb-4">

              No bookings yet ✈️

            </h2>

            <p className="text-gray-600 dark:text-gray-300">

              Start exploring India and book your dream destination.

            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {bookings.map((item) => (

              <div
                key={item.id}
                className="bg-gray-100 dark:bg-white/10 rounded-[35px] overflow-hidden shadow-xl"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-3xl font-bold text-orange-500 mb-4">

                    {item.name}

                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">

                    {item.description}

                  </p>

                  <p className="text-2xl font-bold">

                    ₹{item.price}

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