'use client'

import { useState } from 'react'
import destinations from '@/data/destinations'
import DestinationCard from './DestinationCard'
import SearchFilter from './SearchFilter'

export default function PopularDestinations() {

  const [search, setSearch] = useState('')

  const [selectedRegion, setSelectedRegion] =
    useState('all')

  const [sortOrder, setSortOrder] =
    useState('default')

  const [selectedCategory, setSelectedCategory] =
    useState('All')

  const allPlaces =
    Object.values(destinations).flat()

  const suggestions =
    allPlaces.filter((destination) =>
      destination.name
        .toLowerCase()
        .includes(search.toLowerCase())
    ).slice(0, 5)

  const filteredRegions =
    selectedRegion === 'all'
      ? Object.entries(destinations)
      : Object.entries(destinations).filter(
          ([region]) =>
            region === selectedRegion
        )

  return (

    <section
      id="destinations"
      className="bg-white dark:bg-black text-black dark:text-white py-24 px-8 transition-all duration-500"
    >

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold text-center text-orange-500 mb-20">

          Explore India

        </h1>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          suggestions={suggestions}
        />

        {filteredRegions.map(
          ([region, places]) => {

            let filteredPlaces =
              places.filter((destination) =>
                destination.name
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  )
              )

            // CATEGORY FILTER

            if (
              selectedCategory !== 'All'
            ) {

              filteredPlaces =
                filteredPlaces.filter(
                  (destination) =>
                    destination.category ===
                    selectedCategory
                )
            }

            // SORTING

            if (
              sortOrder === 'lowToHigh'
            ) {

              filteredPlaces.sort(
                (a, b) =>
                  a.price - b.price
              )
            }

            if (
              sortOrder === 'highToLow'
            ) {

              filteredPlaces.sort(
                (a, b) =>
                  b.price - a.price
              )
            }

            if (
              sortOrder === 'popular'
            ) {

              filteredPlaces.sort(
                (a, b) =>
                  b.popularity -
                  a.popularity
              )
            }

            if (
              filteredPlaces.length === 0
            ) {

              return null
            }

            return (

              <div
                key={region}
                className="mb-24"
              >

                <h2 className="text-5xl font-bold mb-12 capitalize">

                  {region.replace(
                    'India',
                    ' India'
                  )}

                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                  {filteredPlaces.map(
                    (destination) => (

                      <DestinationCard
                        key={destination.id}
                        destination={
                          destination
                        }
                      />

                    )
                  )}

                </div>

              </div>
            )
          }
        )}

      </div>

    </section>
  )
}