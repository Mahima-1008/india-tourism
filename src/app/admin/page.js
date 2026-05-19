'use client'

import Navbar from '@/components/Navbar'

export default function AdminPage() {

  const stats = [

    {
      title: 'Total Users',
      value: '12,540',
    },

    {
      title: 'Total Bookings',
      value: '8,320',
    },

    {
      title: 'Revenue',
      value: '₹48L',
    },

    {
      title: 'Destinations',
      value: '24',
    },

  ]

  const topDestinations = [

    {
      name: 'Goa',
      bookings: 1240,
    },

    {
      name: 'Kashmir',
      bookings: 980,
    },

    {
      name: 'Manali',
      bookings: 870,
    },

    {
      name: 'Jaipur',
      bookings: 720,
    },

  ]

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-8 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-16">

          <h1 className="text-7xl font-bold text-orange-500 mb-4">

            Admin Analytics

          </h1>

          <p className="text-2xl text-gray-600 dark:text-gray-400">

            Manage tourism platform statistics and performance.

          </p>

        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-8 mb-16">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 p-10 rounded-[35px] shadow-2xl hover:scale-105 transition duration-500"
            >

              <h2 className="text-2xl mb-6 text-gray-600 dark:text-gray-300">

                {item.title}

              </h2>

              <p className="text-6xl font-bold text-orange-500">

                {item.value}

              </p>

            </div>

          ))}

        </div>

        {/* Revenue Section */}

        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Revenue Chart */}

          <div className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[35px] p-10 shadow-2xl">

            <h2 className="text-4xl font-bold mb-10 text-orange-500">

              Monthly Revenue

            </h2>

            <div className="space-y-6">

              {[70, 90, 50, 100, 80].map(
                (value, index) => (

                  <div key={index}>

                    <div className="flex justify-between mb-2">

                      <span className="text-lg">

                        Month {index + 1}

                      </span>

                      <span className="text-lg">

                        ₹{value}L

                      </span>

                    </div>

                    <div className="w-full bg-gray-300 dark:bg-white/10 rounded-full h-5 overflow-hidden">

                      <div
                        className="bg-orange-500 h-5 rounded-full"
                        style={{
                          width: `${value}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

          {/* Top Destinations */}

          <div className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[35px] p-10 shadow-2xl">

            <h2 className="text-4xl font-bold mb-10 text-orange-500">

              Top Destinations

            </h2>

            <div className="space-y-6">

              {topDestinations.map(
                (place, index) => (

                  <div
                    key={index}
                    className="flex justify-between items-center bg-white dark:bg-black/30 p-6 rounded-2xl"
                  >

                    <div>

                      <h3 className="text-2xl font-bold">

                        {place.name}

                      </h3>

                      <p className="text-gray-600 dark:text-gray-400">

                        Popular Destination

                      </p>

                    </div>

                    <div className="text-orange-500 text-3xl font-bold">

                      {place.bookings}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[35px] p-10 shadow-2xl mb-20">

          <h2 className="text-4xl font-bold mb-10 text-orange-500">

            Recent Activity

          </h2>

          <div className="space-y-6">

            <div className="flex justify-between bg-white dark:bg-black/30 p-6 rounded-2xl">

              <span>
                New booking for Goa package
              </span>

              <span className="text-gray-500">
                2 mins ago
              </span>

            </div>

            <div className="flex justify-between bg-white dark:bg-black/30 p-6 rounded-2xl">

              <span>
                User registered successfully
              </span>

              <span className="text-gray-500">
                10 mins ago
              </span>

            </div>

            <div className="flex justify-between bg-white dark:bg-black/30 p-6 rounded-2xl">

              <span>
                Payment completed for Kashmir
              </span>

              <span className="text-gray-500">
                30 mins ago
              </span>

            </div>

            <div className="flex justify-between bg-white dark:bg-black/30 p-6 rounded-2xl">

              <span>
                Review added for Manali
              </span>

              <span className="text-gray-500">
                1 hour ago
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}