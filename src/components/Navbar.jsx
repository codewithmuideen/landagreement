import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import images from "../constants/images";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { name: "Verify", href: "/#verify" },
  { name: "Features", href: "/#features" },
  { name: "How it Works", href: "/#how-it-works" },
  { name: "For Whom", href: "/#forwhom" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
       <Link to="/" className="flex items-center gap-2">
  <img src={images.logo} alt="LandBridge NG" className="h-10 w-auto" />
  <span className="text-xl font-bold text-gray-900">LandBridge NG</span>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-green-600 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/login"
            className="text-gray-700 hover:text-green-600 transition font-medium"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Create Account
          </a>
        </div>

        {/* Mobile Menu Button (only here) */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide Menu */}
            <motion.div
              className="fixed top-0 left-0 w-3/4 h-screen bg-white shadow-lg flex flex-col gap-6 px-6 py-8 z-50"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-800 text-2xl"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Nav Links */}
              <div className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-green-600 transition text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#login"
                  className="text-gray-700 hover:text-green-600 transition text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="#signup"
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition text-lg inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Create Account
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
