import React from "react";
import images from "../constants/images"; // Make sure all images are properly exported here

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-lg text-gray-600">
          We collaborate with top organizations across Nigeria
        </p>
      </div>

      {/* Scrolling container with animation */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scrolling space-x-16">
          {/* Loop images twice for seamless effect */}
          {[images.ogun, images.lagos, images.blue, images.gtb, images.abuja, images.nnpc, images.stanbic, images.uba, images.accessbank,
            images.ogun, images.lagos, images.blue, images.gtb, images.abuja, images.nnpc, images.stanbic, images.uba, images.accessbank].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-auto h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={logo}
                alt={`partner-${idx}`}
                className="max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Duplicate for seamless looping */}
      <div className="flex animate-scrolling space-x-16 mt-4">
        {[images.ogun, images.lagos, images.blue, images.gtb, images.abuja, images.nnpc, images.stanbic, images.uba, images.accessbank,
          images.ogun, images.lagos, images.blue, images.gtb, images.abuja, images.nnpc, images.stanbic, images.uba, images.accessbank].map((logo, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex-shrink-0 w-auto h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo}
              alt={`partner-${idx}`}
              className="max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;