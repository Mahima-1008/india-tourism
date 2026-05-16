export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-5xl font-bold mb-14">What Travelers Say</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="shadow-xl p-8 rounded-3xl">
          <p className="mb-4">
            “Amazing experience exploring Goa through this platform.”
          </p>
          <h3 className="font-bold">— Priya Sharma</h3>
        </div>

        <div className="shadow-xl p-8 rounded-3xl">
          <p className="mb-4">
            “The UI and travel recommendations are beautiful.”
          </p>
          <h3 className="font-bold">— Rahul Verma</h3>
        </div>

        <div className="shadow-xl p-8 rounded-3xl">
          <p className="mb-4">
            “Planning trips became so easy using this website.”
          </p>
          <h3 className="font-bold">— Aditi Singh</h3>
        </div>
      </div>
    </section>
  )
}