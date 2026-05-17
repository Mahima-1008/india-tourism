'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {

  const router = useRouter()

  const logout = () => {

    localStorage.removeItem('token')

    router.push('/login')
  }

  return (

    <nav className="flex items-center justify-between px-10 py-5 bg-black text-white">

      <Link href="/" className="text-3xl font-bold">
        Incredible India
      </Link>

      <div className="flex gap-6 items-center">

        <Link href="/">
          Home
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/bookings">
          My Bookings
        </Link>

        <Link href="/profile">
          Profile
        </Link>

        <button
          onClick={logout}
          className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full"
        >
          Logout
        </button>

      </div>

    </nav>
  )
}