'use client'

import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import destinations from '@/data/destinations'
import Reviews from '@/components/Reviews'

export default function DestinationPage() {

  const params = useParams()

  const allDestinations = Object.values(destinations).flat()

  const destination = allDestinations.find(
    (item) => item.id == params.id
  )

  if (!destination) {

    return (

      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

        <Navbar />

        <div className="pt-40 text-center text-5xl font-bold">

          Destination Not Found

        </div>

      </main>
    )
  }

  const handleBooking = () => {

    const existingBookings =
      JSON.parse(localStorage.getItem('bookings')) || []

    existingBookings.push(destination)

    localStorage.setItem(
      'bookings',
      JSON.stringify(existingBookings)
    )

    alert('Booking Successful ✨')
  }

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-8">

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-[500px] object-cover rounded-[40px]"
        />

        <div className="mt-10">

          <h1 className="text-7xl font-bold text-orange-500 mb-6">

            {destination.name}

          </h1>

          <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">

            {destination.description}

          </p>

          <p className="text-5xl font-bold text-orange-500 mb-10">

            ₹{destination.price}

          </p>

          <button
            onClick={handleBooking}
            className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full text-white text-2xl font-semibold transition"
          >

            Book Now

          </button>

        </div>

        <Reviews destinationId={destination.id} />

      </div>

    </main>
  )
}