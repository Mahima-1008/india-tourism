'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Incredible India</h1>

      <div className="flex gap-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/">Destinations</Link>
        <Link href="/">Packages</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  )
}