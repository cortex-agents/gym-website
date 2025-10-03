"use client";
import Link from "next/link";

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
              <Link href="/about" className="hover:text-red-500 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/classes" className="hover:text-red-500 transition-colors">Classes</Link>
            </li>
            <li>
              <Link href="/trainer" className="hover:text-red-500 transition-colors">Trainers</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-red-500 transition-colors">Pricing</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: <Link href="mailto:contact@fitzone.com" className="hover:text-red-500 transition-colors">contact@fitzone.com</Link></p>
          <p>Phone: <Link href="tel:+923001234567" className="hover:text-red-500 transition-colors">+92 300 1234567</Link></p>
          <p>Address: 123 Fitness St, Karachi, Pakistan</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FitZone. All rights reserved. Created by <b>CORTEXAGENTS</b>
      </div>
    </footer>
  );
}
