import Link from 'next/link'
import destinations from '@/data/destinations'

export default async function DestinationPage({ params }) {

  const { id } = await params

  const destination = destinations.find(
    (item) => item.id == id
  )

  if (!destination) {
    return (
      <h1 className="text-5xl p-10">
        Destination Not Found
      </h1>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-[500px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-5xl font-bold mb-5">
            {destination.name}
          </h1>

          <p className="text-lg text-gray-600 mb-5">
            {destination.description}
          </p>

          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            ₹{destination.price}
          </h2>

         <Link
  href={`/booking?destination=${destination.name}&price=${destination.price}`}
>

  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg">

    Book Now

  </button>

</Link>
        </div>

      </div>

    </div>
  )
}