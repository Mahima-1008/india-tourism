'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da')",
      }}
    >

      <div className="bg-black/50 p-10 rounded-3xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6"
        >
          Explore Incredible India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-6"
        >
          Discover beaches, mountains, heritage, and culture.
        </motion.p>

        <Link href="#destinations">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-lg font-semibold transition text-white">

            Start Exploring

          </button>

        </Link>

      </div>

    </section>
  )
}