'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/login')
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-5xl font-bold mb-5">
          Welcome to Dashboard 🎉
        </h1>

        <p className="text-lg text-gray-600">
          Your tourism account is protected using JWT authentication.
        </p>

      </div>
    </div>
  )
}