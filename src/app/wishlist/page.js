'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function WishlistPage() {

  const [wishlist, setWishlist] = useState([])

  useEffect(() => {

    const savedWishlist =
      JSON.parse(localStorage.getItem('wishlist')) || []

    setWishlist(savedWishlist)

  }, [])

  const removeFromWishlist = (id) => {

    const updatedWishlist =
      wishlist.filter((item) => item.id !== id)

    setWishlist(updatedWishlist)

    localStorage.setItem(
      'wishlist',
      JSON.stringify(updatedWishlist)
    )
  }

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-10">

        <h1 className="text-6xl font-bold mb-12 text-orange-500">

          My Wishlist

        </h1>

        {wishlist.length === 0 ? (

          <p className="text-2xl text-gray-500">

            No destinations added yet.

          </p>

        ) : (

          <div className="grid md:grid-cols-3 gap-10">

            {wishlist.map((place) => (

              <div
                key={place.id}
                className="bg-gray-100 dark:bg-white/10 rounded-[35px] overflow-hidden shadow-2xl"
              >

                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-4xl font-bold text-orange-500 mb-4">

                    {place.name}

                  </h2>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">

                    {place.description}

                  </p>

                  <button
                    onClick={() =>
                      removeFromWishlist(place.id)
                    }
                    className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-white font-semibold transition"
                  >

                    Remove

                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  )
}