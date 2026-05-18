import Navbar from '@/components/Navbar'

export default function DashboardPage() {

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-10">

        <h1 className="text-7xl font-bold mb-4">

          Travel Dashboard

        </h1>

        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-14">

          Manage your bookings and explore India.

        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 p-10 rounded-[35px]">

            <h2 className="text-3xl mb-6">

              Total Trips

            </h2>

            <p className="text-7xl font-bold text-orange-500">

              12

            </p>

          </div>

          <div className="bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 p-10 rounded-[35px]">

            <h2 className="text-3xl mb-6">

              Upcoming Tours

            </h2>

            <p className="text-7xl font-bold text-orange-500">

              3

            </p>

          </div>

          <div className="bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 p-10 rounded-[35px]">

            <h2 className="text-3xl mb-6">

              Wishlist

            </h2>

            <p className="text-7xl font-bold text-orange-500">

              7

            </p>

          </div>

        </div>

      </div>

    </main>
  )
}