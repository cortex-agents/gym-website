"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="h-[40vh] flex justify-center items-center bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white">Contact Us</h1>
      </section>

      {/* Intro Content */}
      <section className="max-w-4xl mx-auto text-center mt-16 px-6">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-4">
          We'd love to hear from you! Whether you have questions about our classes, trainers, or membership,
          our team is here to help. Reach out to us and we'll get back to you as soon as possible.
        </p>
        <p className="text-gray-600 text-lg">
          Fill out the contact form below, or visit us at our gym location. We are committed to providing
          the best fitness experience for all our members.
        </p>
      </section>

      {/* Contact Form */}
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
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows={5}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <Link href="/"><button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition-colors"
          >
            Send Message
          </button></Link>
        </form>
      </section>
    </main>
  );
}
