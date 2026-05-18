'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {

  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {

    setMounted(true)

  }, [])

  if (!mounted) {

    return null
  }

  return (

    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 px-8 py-5 flex justify-between items-center transition-all duration-500">

      <Link
        href="/"
        className="text-4xl font-bold text-orange-500"
      >
        India Tourism
      </Link>

      <div className="flex items-center gap-10 text-lg font-semibold text-black dark:text-white">

        <Link href="/">Home</Link>

        <Link href="/dashboard">Dashboard</Link>

        <Link href="/bookings">Bookings</Link>

        <Link href="/wishlist">Wishlist</Link>

        <Link href="/profile">Profile</Link>

        <Link href="/admin">Admin</Link>

        <Link href="/ai-planner">AI Planner</Link>

        <button
          onClick={() =>
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-white transition"
        >

          {theme === 'dark'
            ? '☀ Light'
            : '🌙 Dark'}

        </button>

      </div>

    </nav>
  )
}