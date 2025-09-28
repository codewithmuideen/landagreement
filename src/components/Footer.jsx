import React from "react";
import images from "../constants/images";
import { FaLock, FaDatabase, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b border-gray-300">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              {images.logo ? (
                <img
                  src={images.logo}
                  alt="LandBridge NG Logo"
                  className="h-10 w-auto mr-2"
                />
              ) : (
                <div className="bg-gray-200 text-gray-900 font-bold h-10 w-10 flex items-center justify-center mr-2 rounded-full">
                  L
                </div>
              )}
              <h3 className="text-xl font-semibold">LandBridge NG</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xs">
              A secure land registry and verification platform for Nigeria
              connecting citizens, lawyers, banks, and government in one place.
            </p>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2">
              <li><a href="#verify" className="text-gray-600 hover:text-black transition">Verify</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-black transition">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-black transition">Pricing</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-black transition">FAQ</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-black transition">About</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-black transition">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-black transition">Press</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition">Contact</Link></li>
            </ul>
          </div>

          {/* Compliance Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Compliance</h4>
            <ul className="space-y-2">
              <li><Link to="/ndpr" className="text-gray-600 hover:text-black transition">NDPR</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-black transition">Security</Link></li>
              <li><a href="#status" className="text-gray-600 hover:text-black transition">Status</a></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-black transition">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} LandBridge NG. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <Link to="/contact" className="flex items-center text-gray-500 hover:text-black transition">
              <FaLock className="mr-2" /> SOC2-in-progress
            </Link>
            <Link to="/data" className="flex items-center text-gray-500 hover:text-black transition">
              <FaDatabase className="mr-2" /> Data Residency
            </Link>
            <Link to="/support" className="flex items-center text-gray-500 hover:text-black transition">
              <FaHeadset className="mr-2" /> Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;