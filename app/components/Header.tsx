// components/Navbar.js
"use client"
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-700 hover:text-gray-400 duration-1000 text-3xl pt-6 font-bold">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-gray-400 duration-1000 text-3xl pt-6">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-400 duration-1000 text-3xl pt-6">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-400 duration-1000 text-3xl pt-6">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black p-4 space-y-2">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-400 duration-1000 text-3xl pt-6 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-400 duration-1000 text-3xl pt-6 block"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-400 duration-1000 text-3xl pt-6 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
