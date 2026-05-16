import destinations from '@/data/destinations'
import DestinationCard from './DestinationCard'

export default function PopularDestinations() {

  return (
<section
  id="destinations"
  className="py-20 px-10 bg-gray-100"
>

      <h1 className="text-5xl font-bold text-center mb-16">
        Popular Destinations
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {destinations.map((destination) => (

          <DestinationCard
            key={destination.id}
            destination={destination}
          />

        ))}

      </div>

    </section>
  )
}