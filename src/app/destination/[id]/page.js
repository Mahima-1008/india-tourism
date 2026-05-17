import destinations from '@/data/destinations'

export default async function DestinationPage({ params }) {

  const { id } = await params

  const allDestinations = [
    ...destinations.northIndia,
    ...destinations.southIndia,
    ...destinations.westIndia,
    ...destinations.eastIndia,
  ]

  const destination = allDestinations.find(
    (item) => item.id == id
  )

  if (!destination) {
    return <h1 className="text-white p-10">Destination Not Found</h1>
  }

  return (

    <div className="min-h-screen bg-black text-white">

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-[500px] object-cover"
      />

      <div className="p-10">

        <h1 className="text-6xl font-bold text-orange-400 mb-6">
          {destination.name}
        </h1>

        <p className="text-2xl text-gray-300 mb-6 max-w-4xl">
          {destination.description}
        </p>

        <p className="text-4xl font-bold text-orange-500 mb-8">
          ₹{destination.price}
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full text-xl font-semibold transition">
          Book Now
        </button>

      </div>

    </div>
  )
}