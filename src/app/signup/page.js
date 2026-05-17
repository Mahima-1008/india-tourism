'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (res.ok) {

      alert('Signup Successful')

      router.push('/login')

    } else {

      alert(data.error)
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-orange-950 flex items-center justify-center px-6">

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] shadow-2xl w-full max-w-md text-white">

        <h1 className="text-5xl font-bold text-center mb-4">
          Create Account
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Join and explore incredible destinations
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full bg-white/10 border border-white/10 p-4 rounded-2xl mb-5 outline-none"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full bg-white/10 border border-white/10 p-4 rounded-2xl mb-5 outline-none"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-white/10 border border-white/10 p-4 rounded-2xl mb-8 outline-none"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Sign Up
          </button>

        </form>

      </div>

    </div>
  )
}