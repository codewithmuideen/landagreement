import React from "react";
import images from "../constants/images";
import { FaLock, FaDatabase, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

const Footer = () => {
  return (
    <footer className="bg-[#1a202c] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14 border-b border-gray-700 py-14">
          {/* LandBridge NG Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              {images.logo ? (
                <img
                  src={images.logo}
                  alt="LandBridge NG Logo"
                  className="h-10 w-10 mr-2 rounded-full"
                />
              ) : (
                <div className="bg-white text-gray-900 font-bold h-10 w-10 flex items-center justify-center rounded-full mr-2">
                  L
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">
                LandBridge NG
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              A secure land registry and verification platform for Nigeria— 
              connecting citizens, lawyers, banks, and government in one place.
            </p>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#verify" className="hover:text-white transition">Verify</a></li>
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/signup" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Press</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Compliance Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Compliance</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-white transition">NDPR</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Security</Link></li>
              <li><a href="#verify" className="hover:text-white transition">Status</a></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 text-sm text-gray-400 space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} LandBridge NG. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/contact" className="flex items-center hover:text-white transition">
              <FaLock className="mr-2" /> SOC2-in-progress
            </Link>
            <Link to="/data" className="flex items-center hover:text-white transition">
              <FaDatabase className="mr-2" /> Data Residency
            </Link>
            <Link to="/contact" className="flex items-center hover:text-white transition">
              <FaHeadset className="mr-2" /> Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
