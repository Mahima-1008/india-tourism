'use client'

export default function SearchFilter({
  search,
  setSearch,
  selectedRegion,
  setSelectedRegion,
  sortOrder,
  setSortOrder,
  selectedCategory,
  setSelectedCategory,
  suggestions,
}) {

  const categories = [
    'All',
    'Mountains',
    'Beaches',
    'Spiritual',
    'Wildlife',
    'Luxury',
  ]

  return (

    <div className="mb-16">

      {/* Search + Filters */}

      <div className="flex flex-col lg:flex-row gap-6 mb-8">

        {/* Search */}

        <div className="flex-1 relative">

          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full p-5 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 outline-none text-black dark:text-white text-lg"
          />

          {/* Suggestions */}

          {search && suggestions.length > 0 && (

            <div className="absolute top-20 left-0 w-full bg-white dark:bg-black border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">

              {suggestions.map(
                (item, index) => (

                  <div
                    key={index}
                    onClick={() =>
                      setSearch(item.name)
                    }
                    className="p-4 hover:bg-orange-500 hover:text-white cursor-pointer transition"
                  >

                    {item.name}

                  </div>
                )
              )}

            </div>
          )}

        </div>

        {/* Region */}

        <select
          value={selectedRegion}
          onChange={(e) =>
            setSelectedRegion(e.target.value)
          }
          className="p-5 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 outline-none text-black dark:text-white text-lg"
        >

          <option value="all">
            All Regions
          </option>

          <option value="northIndia">
            North India
          </option>

          <option value="southIndia">
            South India
          </option>

          <option value="westIndia">
            West India
          </option>

          <option value="eastIndia">
            East India
          </option>

        </select>

        {/* Sort */}

        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value)
          }
          className="p-5 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 outline-none text-black dark:text-white text-lg"
        >

          <option value="default">
            Sort By
          </option>

          <option value="lowToHigh">
            Price: Low to High
          </option>

          <option value="highToLow">
            Price: High to Low
          </option>

          <option value="popular">
            Most Popular
          </option>

        </select>

      </div>

      {/* Category Chips */}

      <div className="flex flex-wrap gap-4">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`px-6 py-3 rounded-full text-lg transition font-semibold ${
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 dark:bg-white/10 text-black dark:text-white'
            }`}
          >

            {category}

          </button>

        ))}

      </div>

    </div>
  )
}