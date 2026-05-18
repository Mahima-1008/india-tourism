import destinations from '@/data/destinations'
import DestinationCard from './DestinationCard'

export default function PopularDestinations() {

  return (

    <section
      id="destinations"
      className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-all duration-500"
    >

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold text-center text-orange-500 mb-20">

          Explore India

        </h1>

        {Object.entries(destinations).map(
          ([region, places]) => (

            <div key={region} className="mb-24">

              <h2 className="text-5xl font-bold mb-12 capitalize">

                {region.replace('India', ' India')}

              </h2>

              <div className="grid md:grid-cols-3 gap-10">

                {places.map((destination) => (

                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />

                ))}

              </div>

            </div>
          )
        )}

      </div>

    </section>
  )
}