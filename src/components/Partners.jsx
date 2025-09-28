import React from "react";
import images from "../constants/images"; // Ensure all images are properly exported here

const Partners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
          — Our Partners
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          We collaborate with top organizations across Nigeria
        </p>

        {/* ✅ 8 logos in one row (on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img
              src={images.gtb}
              alt="GTBank"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={images.lagos}
              alt="Lagos State"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={images.abuja}
              alt="Abuja"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={images.nnpc}
              alt="NNPC"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={images.uba}
              alt="UBA"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          {/* ✅ 3 new partner logos */}
          <div className="flex items-center justify-center">
            <img
              src={images.accessbank} // replace with actual image
              alt="Access Bank"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={images.blue} // replace with actual image
              alt="Fidelity Bank"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={images.ogun} // replace with actual image
              alt="First Bank"
              className="max-h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
