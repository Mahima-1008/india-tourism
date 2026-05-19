'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function AIPlannerPage() {

  const [prompt, setPrompt] = useState('')

  const [loading, setLoading] =
    useState(false)

  const [trip, setTrip] = useState('')

  const generateTrip = async () => {

    if (!prompt) {

      alert('Please enter your trip idea')

      return
    }

    setLoading(true)

    setTrip('')

    setTimeout(() => {

      let generatedTrip = ''

      // GOA

      if (
        prompt.toLowerCase().includes('goa')
      ) {

        generatedTrip = `
🌴 Goa Trip Plan

Day 1:
• Arrive in Goa
• Relax at Baga Beach
• Nightlife at Tito’s Lane

Day 2:
• Water sports
• Fort Aguada
• Sunset cruise

Day 3:
• Visit Old Goa Churches
• Cafe hopping
• Shopping at flea market
`
      }

      // KASHMIR

      else if (
        prompt
          .toLowerCase()
          .includes('kashmir')
      ) {

        generatedTrip = `
❄ Kashmir Trip Plan

Day 1:
• Srinagar houseboat stay
• Dal Lake shikara ride

Day 2:
• Gulmarg gondola ride
• Snow activities

Day 3:
• Pahalgam sightseeing
• Local Kashmiri food
`
      }

      // LADAKH

      else if (
        prompt
          .toLowerCase()
          .includes('ladakh')
      ) {

        generatedTrip = `
🏔 Ladakh Adventure Plan

Day 1:
• Leh market exploration
• Monastery visit

Day 2:
• Nubra Valley road trip
• Camel safari

Day 3:
• Pangong Lake
• Mountain camping
`
      }

      // DEFAULT

      else {

        generatedTrip = `
✨ AI Travel Plan

Day 1:
• Arrival and local sightseeing

Day 2:
• Explore famous attractions

Day 3:
• Food, shopping, and relaxation

Day 4:
• Adventure activities and departure
`
      }

      setTrip(generatedTrip)

      setLoading(false)

    }, 2000)
  }

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-8 max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <h1 className="text-7xl font-bold text-orange-500 mb-6">

            AI Travel Planner

          </h1>

          <p className="text-2xl text-gray-600 dark:text-gray-400">

            Generate smart AI travel itineraries for your dream destinations.

          </p>

        </div>

        {/* Input Box */}

        <div className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[40px] p-10 shadow-2xl mb-12">

          <textarea
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
            placeholder="Example: Plan a 3 day Goa trip with beaches and nightlife..."
            className="w-full h-52 bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-3xl p-6 outline-none text-xl"
          />

          <button
            onClick={generateTrip}
            className="mt-8 bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full text-white text-2xl font-semibold transition"
          >

            {loading
              ? 'Generating Plan...'
              : 'Generate AI Trip'}

          </button>

        </div>

        {/* Result */}

        {trip && (

          <div className="bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-[40px] p-10 shadow-2xl whitespace-pre-line">

            <h2 className="text-5xl font-bold text-orange-500 mb-8">

              Your AI Itinerary

            </h2>

            <div className="text-2xl leading-relaxed text-gray-700 dark:text-gray-300">

              {trip}

            </div>

          </div>

        )}

      </div>

    </main>
  )
}