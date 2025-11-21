"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Top Docs UK Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="hidden sm:inline">Top Docs UK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#services" className="text-zinc-800 hover:text-teal-600 transition-colors">
            Services
          </Link>
          <Link href="/#about" className="text-zinc-800 hover:text-teal-600 transition-colors">
            About Us
          </Link>
          <Link href="/#news" className="text-zinc-800 hover:text-teal-600 transition-colors">
            News
          </Link>
          <Link href="/#order" className="text-zinc-800 hover:text-teal-600 transition-colors">
            Order Now
          </Link>
          <Link href="/#contact" className="text-zinc-800 hover:text-teal-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-800 hover:text-teal-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-200 bg-white overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              <Link
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-800 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-800 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/#news"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-800 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
              >
                News
              </Link>
              <Link
                href="/#order"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-800 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
              >
                Order Now
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-800 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
