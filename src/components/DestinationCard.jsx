import Link from 'next/link'

export default function DestinationCard({ destination }) {

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

      <img
        src={destination.image}
        alt={destination.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-3xl font-bold mb-3">
          {destination.name}
        </h2>

        <p className="text-gray-600 mb-4">
          {destination.description}
        </p>

        <h3 className="text-2xl font-bold text-orange-500 mb-4">
          ₹{destination.price}
        </h3>

        <Link href={`/destination/${destination.id}`}>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">

            Explore

          </button>

        </Link>

      </div>

    </div>
  )
}