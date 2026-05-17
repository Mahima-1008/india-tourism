'use client'

import Navbar from '@/components/Navbar'

export default function ProfilePage() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white">

      <Navbar />

      <div className="pt-32 px-6">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] shadow-2xl max-w-3xl mx-auto text-center">

          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-36 h-36 rounded-full mx-auto mb-8 border-4 border-orange-400"
          />

          <h1 className="text-5xl font-bold mb-10">
            User Profile
          </h1>

          <div className="space-y-6 text-2xl text-gray-300">

            <p>
              Name: Mahima
            </p>

            <p>
              Email: mahima@gmail.com
            </p>

            <p>
              Membership: Premium Traveler
            </p>

            <p>
              Favorite Destination: Goa
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}