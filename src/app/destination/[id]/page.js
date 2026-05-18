import destinations from '@/data/destinations'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'

export default async function DestinationPage({ params }) {

  const resolvedParams = await params

  const destination = Object.values(destinations)
    .flat()
    .find(
      (item) => item.id == resolvedParams.id
    )

  if (!destination) {

    return (

      <div className="min-h-screen flex items-center justify-center text-4xl font-bold">

        Destination Not Found

      </div>
    )
  }

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-10 max-w-7xl mx-auto">

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
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

          <button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full text-white text-xl font-semibold transition">

            Book Now

          </button>

        </div>

        <Reviews destinationId={destination.id} />

      </div>

    </main>
  )
}