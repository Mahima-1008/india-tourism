import Navbar from '@/components/Navbar'

export default function AdminPage() {

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      <Navbar />

      <div className="pt-36 px-8">

        <h1 className="text-7xl font-bold text-orange-500">

          Admin Dashboard

        </h1>

      </div>

    </main>
  )
}