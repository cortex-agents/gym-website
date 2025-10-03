"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-3">FitZone</h2>
          <p className="text-gray-400">
            Your ultimate fitness destination. Train harder, get stronger, live better.
            Join our community and reach your fitness goals with our expert trainers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-red-500 transition-colors">About</a>
            </li>
            <li>
              <a href="/classes" className="hover:text-red-500 transition-colors">Classes</a>
            </li>
            <li>
              <a href="/trainer" className="hover:text-red-500 transition-colors">Trainers</a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-red-500 transition-colors">Pricing</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: <a href="mailto:contact@fitzone.com" className="hover:text-red-500 transition-colors">contact@fitzone.com</a></p>
          <p>Phone: <a href="tel:+923001234567" className="hover:text-red-500 transition-colors">+92 300 1234567</a></p>
          <p>Address: 123 Fitness St, Karachi, Pakistan</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FitZone. All rights reserved. Created by <b>CORTEXAGENTS</b>
      </div>
    </footer>
  );
}
