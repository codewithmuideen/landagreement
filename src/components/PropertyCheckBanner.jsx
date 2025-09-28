import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";

const PropertyCheckBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${images.landsale2})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 flex justify-start">
        {/* Left Card Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-lg">
          <p className="text-sm text-green-600 font-semibold mb-2">
            Protect your money. Reduce disputes.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Run a property check in seconds
          </h2>
          <p className="text-gray-600 mb-6">
            Boost government IGR with trust.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
           <a
  href="#verify"
  className="bg-red-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 shadow-md inline-block text-center"
>
  Verify a Property
</a>

            <Link to="/contact">
              <button className="bg-transparent border border-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                Talk to Sales
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCheckBanner;
