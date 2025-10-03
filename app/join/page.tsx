"use client";

export default function JoinUs() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="h-[50vh] flex justify-center items-center bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white text-center">
          Join Our Gym Today
        </h1>
      </section>

      {/* Intro Content */}
      <section className="max-w-4xl mx-auto text-center mt-16 px-6">
        <h2 className="text-4xl font-bold mb-4">Become Part of Our Fitness Family</h2>
        <p className="text-gray-600 text-lg mb-4">
          Unlock your full potential with our expert trainers, state-of-the-art equipment, and supportive community. 
          Whether you are a beginner or an athlete, we have a plan that fits your lifestyle.
        </p>
        <p className="text-gray-600 text-lg">
          Joining is easy and flexible. Choose a membership plan that suits you and start your journey toward a healthier, 
          stronger, and more confident version of yourself.
        </p>
      </section>

      {/* Membership Form */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="plan">
              Choose Membership Plan
            </label>
            <select
              id="plan"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Basic - $29/month</option>
              <option>Standard - $49/month</option>
              <option>Premium - $79/month</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition-colors"
          >
            Join Now
          </button>
        </form>
      </section>
    </main>
  );
}
