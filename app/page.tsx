import Image from "next/image";
import FAQs from "@/components/faqs";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Gym Hero Background"
            fill
            className="object-cover brightness-75 contrast-125"
            priority
          />
          {/* Dark overlay for bold effect */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
            Transform Your <span className="text-red-600">Body</span>, Elevate Your <span className="text-green-400">Mind</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Join our community of fitness enthusiasts. Train with certified professionals, use modern equipment, and achieve results faster than ever before.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-10 py-4 rounded-full text-lg font-semibold text-white shadow-xl transition transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-black">Expert Trainers</h3>
            <p className="text-gray-600">Work with world-class certified trainers who guide you at every step.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-black">Modern Equipment</h3>
            <p className="text-gray-600">Train with state-of-the-art equipment designed for peak performance.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-black">Flexible Plans</h3>
            <p className="text-gray-600">Choose from multiple membership options that fit your lifestyle.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-black">Nutrition Support</h3>
            <p className="text-gray-600">Get customized diet & nutrition plans to complement your workouts.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <p className="text-gray-700 italic">"The trainers are amazing and the environment is so motivating. Best gym experience ever!"</p>
            <h4 className="mt-4 font-bold text-black">— Sarah M.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <p className="text-gray-700 italic">"State-of-the-art equipment and excellent support. I achieved my fitness goals faster than expected."</p>
            <h4 className="mt-4 font-bold text-black">— David R.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <p className="text-gray-700 italic">"I love the flexible membership plans and the personalized nutrition advice. Highly recommended!"</p>
            <h4 className="mt-4 font-bold text-black">— Emily J.</h4>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQs />
    </main>
  );
}
