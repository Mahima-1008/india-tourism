import destinations from '@/data/destinations'
import DestinationCard from './DestinationCard'

export default function PopularDestinations() {

  return (

    <div className="bg-black text-white py-20 px-8">

      <Section
        title="Explore The Beauty Of North India"
        places={destinations.northIndia}
      />

      <Section
        title="Explore The Beauty Of South India"
        places={destinations.southIndia}
      />

      <Section
        title="Explore The Beauty Of West India"
        places={destinations.westIndia}
      />

      <Section
        title="Explore The Beauty Of East India"
        places={destinations.eastIndia}
      />

    </div>
  )
}

function Section({ title, places }) {

  return (

    <section className="mb-28">

      <h1 className="text-5xl font-bold mb-14 text-orange-400 text-center">
        {title}
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {places.map((destination) => (

          <DestinationCard
            key={destination.id}
            destination={destination}
          />

        ))}

      </div>

    </section>
  )
}