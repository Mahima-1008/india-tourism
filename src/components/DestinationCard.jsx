import Link from 'next/link'

export default function DestinationCard({ destination }) {

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] overflow-hidden shadow-2xl hover:scale-105 transition duration-500">

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-6 text-white">

        <h1 className="text-4xl font-bold mb-4 text-orange-400">

          {destination.name}

        </h1>

        <p className="text-gray-300 text-lg mb-6">

          {destination.description}

        </p>

        <p className="text-3xl font-bold mb-6 text-orange-500">

          ₹{destination.price}

        </p>

        <Link href={`/destination/${destination.id}`}>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-lg font-semibold transition">

            Explore

          </button>

        </Link>

      </div>

    </div>
  )
}