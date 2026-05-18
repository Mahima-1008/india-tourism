import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PopularDestinations from '@/components/PopularDestinations'

export default function Home() {

  return (

    <main className="bg-white dark:bg-black transition-all duration-500">

      <Navbar />

      <Hero />

      <PopularDestinations />

    </main>
  )
}