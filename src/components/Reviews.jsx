'use client'

import { useEffect, useState } from 'react'

export default function Reviews({ destinationId }) {

  const [reviews, setReviews] = useState([])

  const [name, setName] = useState('')

  const [comment, setComment] = useState('')

  const [rating, setRating] = useState(5)

  useEffect(() => {

    const savedReviews =
      JSON.parse(localStorage.getItem(`reviews-${destinationId}`)) || []

    setReviews(savedReviews)

  }, [destinationId])

  const handleSubmit = (e) => {

    e.preventDefault()

    const newReview = {
      name,
      comment,
      rating,
    }

    const updatedReviews = [
      ...reviews,
      newReview,
    ]

    setReviews(updatedReviews)

    localStorage.setItem(
      `reviews-${destinationId}`,
      JSON.stringify(updatedReviews)
    )

    setName('')
    setComment('')
    setRating(5)
  }

  return (

    <div className="mt-20">

      <h2 className="text-5xl font-bold mb-10 text-orange-500">

        Reviews & Ratings

      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-white/10 p-8 rounded-[35px] mb-12"
      >

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 mb-5 outline-none"
          required
        />

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 mb-5 outline-none h-40"
          required
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-4 rounded-2xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 mb-6 outline-none"
        >

          <option value="5">⭐⭐⭐⭐⭐</option>

          <option value="4">⭐⭐⭐⭐</option>

          <option value="3">⭐⭐⭐</option>

          <option value="2">⭐⭐</option>

          <option value="1">⭐</option>

        </select>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
        >

          Submit Review

        </button>

      </form>

      <div className="space-y-8">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-gray-100 dark:bg-white/10 p-8 rounded-[35px]"
          >

            <h3 className="text-3xl font-bold text-orange-500 mb-2">

              {review.name}

            </h3>

            <p className="text-2xl mb-4">

              {'⭐'.repeat(review.rating)}

            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">

              {review.comment}

            </p>

          </div>
        ))}

      </div>

    </div>
  )
}