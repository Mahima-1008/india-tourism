'use client'

import Navbar from '@/components/Navbar'

export default function DashboardPage() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-black text-white">

      <Navbar />

      <div className="pt-32 px-10">

        <h1 className="text-6xl font-bold mb-4">
          Travel Dashboard
        </h1>

        <p className="text-gray-400 text-xl mb-12">
          Manage your bookings and explore India.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 border border-white/10 backdrop-blur-lg p-10 rounded-[35px] shadow-2xl">

            <h2 className="text-2xl mb-6 text-gray-300">
              Total Trips
            </h2>

            <p className="text-6xl font-bold text-orange-400">
              12
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-lg p-10 rounded-[35px] shadow-2xl">

            <h2 className="text-2xl mb-6 text-gray-300">
              Upcoming Tours
            </h2>

            <p className="text-6xl font-bold text-orange-400">
              3
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-lg p-10 rounded-[35px] shadow-2xl">

            <h2 className="text-2xl mb-6 text-gray-300">
              Wishlist
            </h2>

            <p className="text-6xl font-bold text-orange-400">
              7
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}