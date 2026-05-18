'use client'

import { motion } from 'framer-motion'

export default function Hero() {

  return (

    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
    >

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/india-hero.png')",
        }}
      ></div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}

      <div className="relative z-10 text-center px-6 max-w-5xl">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl"
        >

          Explore Incredible India

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 mb-10 leading-relaxed"
        >

          Discover mountains, beaches, culture,
          wildlife, heritage, spirituality,
          festivals, and unforgettable adventures.

        </motion.p>

        <motion.a
          href="#destinations"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl"
        >

          Start Exploring

        </motion.a>

      </div>

    </section>
  )
}