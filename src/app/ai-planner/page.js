'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function AIPlannerPage() {

  const [destination, setDestination] = useState('')
  const [plan, setPlan] = useState('')

  const generatePlan = () => {

    setPlan(
      `✨ Your AI Travel Plan for ${destination}

Day 1:
- Local sightseeing
- Famous food exploration

Day 2:
- Adventure activities
- Cultural attractions

Day 3:
- Shopping
- Sunset points
- Relaxation`
    )
  }

  return (

    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

      <Navbar />

      <div className="pt-36 px-8 max-w-5xl mx-auto">

        <h1 className="text-6xl font-bold text-orange-500 mb-10">

          AI Travel Planner

        </h1>

        <div className="bg-gray-100 dark:bg-white/10 p-10 rounded-[40px]">

          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
            className="w-full p-5 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 outline-none mb-6"
          />

          <button
            onClick={generatePlan}
            className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full text-white text-xl"
          >

            Generate AI Plan

          </button>

          {plan && (

            <div className="mt-10 whitespace-pre-line text-xl leading-relaxed">

              {plan}

            </div>
          )}

        </div>

      </div>

    </main>
  )
}