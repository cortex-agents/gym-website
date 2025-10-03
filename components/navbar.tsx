"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Classes", path: "/classes" },
  { name: "Trainers", path: "/trainer" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-widest text-red-500">
          Fit<span className="text-white">Zone</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="relative text-gray-300 font-medium hover:text-neonGreen transition group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/join"
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white font-semibold transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className="text-gray-300 hover:text-red-500 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/join"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
