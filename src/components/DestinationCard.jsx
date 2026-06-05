'use client'

import Link from 'next/link'

export default function DestinationCard({ destination }) {

  const addToWishlist = () => {

    const existingWishlist =
      JSON.parse(localStorage.getItem('wishlist')) || []

    const alreadyExists =
      existingWishlist.find(
        (item) => item.id === destination.id
      )

    if (alreadyExists) {

      alert('Already added to wishlist')

      return
    }

    const updatedWishlist = [
      ...existingWishlist,
      destination,
    ]

    localStorage.setItem(
      'wishlist',
      JSON.stringify(updatedWishlist)
    )

    alert('Added to wishlist ❤️')
  }

  return (

    <div className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[35px] overflow-hidden shadow-2xl hover:scale-105 transition duration-500">

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-[500px] object-cover object-center"
      />

      <div className="p-8 text-black dark:text-white">

        <h1 className="text-4xl font-bold mb-4 text-orange-500">

          {destination.name}

        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">

          {destination.description}

        </p>

        <p className="text-3xl font-bold mb-8 text-orange-500">

          ₹{destination.price}

        </p>

        <div className="flex gap-4">

          <Link href={`/destination/${destination.id}`}>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition">

              Explore

            </button>

          </Link>

          <button
            onClick={addToWishlist}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >

            ❤️

          </button>

        </div>

      </div>

    </div>
  )
}