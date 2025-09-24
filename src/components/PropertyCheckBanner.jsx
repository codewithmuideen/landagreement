import React from 'react';
import { Link } from 'react-router-dom';
const PropertyCheckBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-500 via-green-600 to-indigo-700 text-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Subtle background overlay for depth */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative text-center md:text-left mb-10 md:mb-0 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Run a property check in seconds
        </h2>
        <p className="text-lg sm:text-xl font-light opacity-90">
          Protect your money. Reduce disputes. Boost government IGR with trust.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="bg-white/90 text-indigo-700 font-semibold py-3 px-10 rounded-full shadow-lg backdrop-blur-md border border-white/30 hover:bg-white hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          Verify a Property
        </button>
       <Link to="/contact">
        <button className="bg-transparent border border-white/70 text-white font-semibold py-3 px-10 rounded-full shadow-lg backdrop-blur-md hover:bg-white hover:text-indigo-700 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          Talk to Sales
        </button>
       </Link>
      </div>
    </section>
  );
};

export default PropertyCheckBanner;
