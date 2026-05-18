'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function ProfilePage() {

  const [user, setUser] = useState({
    name: 'Mahima Kumari',
    email: 'mahima@gmail.com',
    bio: 'Travel lover exploring Incredible India ✈️',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  })

  useEffect(() => {

    const savedUser =
      JSON.parse(localStorage.getItem('userProfile'))

    if (savedUser) {

      setUser(savedUser)
    }

  }, [])

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const saveProfile = () => {

    localStorage.setItem(
      'userProfile',
      JSON.stringify(user)
    )

    alert('Profile Updated Successfully ✨')
  }

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-8 max-w-7xl mx-auto">

        <div className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[40px] p-10 shadow-2xl">

          <div className="flex flex-col md:flex-row gap-12 items-center">

            <img
              src={user.image}
              alt="profile"
              className="w-60 h-60 rounded-full object-cover border-4 border-orange-500"
            />

            <div className="flex-1">

              <h1 className="text-6xl font-bold text-orange-500 mb-4">

                My Profile

              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">

                Manage your travel profile and preferences.

              </p>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="p-5 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-5 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 outline-none"
                />

                <input
                  type="text"
                  name="image"
                  value={user.image}
                  onChange={handleChange}
                  placeholder="Profile Image URL"
                  className="p-5 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 outline-none md:col-span-2"
                />

                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  placeholder="Your Bio"
                  className="p-5 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 outline-none h-40 md:col-span-2"
                />

              </div>

              <button
                onClick={saveProfile}
                className="mt-8 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full text-white text-xl font-semibold transition"
              >

                Save Profile

              </button>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-gray-100 dark:bg-white/10 p-8 rounded-[35px] shadow-xl">

            <h2 className="text-3xl mb-4">

              Trips Completed

            </h2>

            <p className="text-6xl font-bold text-orange-500">

              12

            </p>

          </div>

          <div className="bg-gray-100 dark:bg-white/10 p-8 rounded-[35px] shadow-xl">

            <h2 className="text-3xl mb-4">

              Wishlist Places

            </h2>

            <p className="text-6xl font-bold text-orange-500">

              8

            </p>

          </div>

          <div className="bg-gray-100 dark:bg-white/10 p-8 rounded-[35px] shadow-xl">

            <h2 className="text-3xl mb-4">

              Reviews Given

            </h2>

            <p className="text-6xl font-bold text-orange-500">

              15

            </p>

          </div>

        </div>

      </div>

    </main>
  )
}