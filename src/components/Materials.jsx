import images from "../constants/images";

const Materials = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-white p-8 lg:p-16 justify-center items-center relative">
      {/* Left Section */}
      <div className="lg:w-1/2 p-4 max-w-xl z-20">
        <p className="text-green-600 font-semibold mb-2 uppercase text-sm">
          Digital Registry
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
          The Future of Digital Land Registry in Nigeria
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          LandBridge NG ensures trusted property records by digitizing land
          titles, making them secure, transparent, and accessible. No more
          disputes—just verified ownership that empowers citizens, businesses,
          and government alike.
        </p>
        <a
          href="#verify"
          className="flex items-center text-green-600 font-semibold hover:underline"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>

      {/* Right Section - Bigger Images */}
      <div className="lg:w-1/2 p-4 relative flex flex-wrap justify-center items-center gap-8 mt-10 lg:mt-0">
        {/* Top Left */}
        <div className="w-56 sm:w-64 lg:w-72 h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={images.prop0}
            alt="Land document verification"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right */}
        <div className="w-56 sm:w-64 lg:w-72 h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-14">
          <img
            src={images.prop00}
            alt="Secure land registry system"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left */}
        <div className="w-56 sm:w-64 lg:w-72 h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl -mt-8 lg:-mt-14">
          <img
            src={images.prop11}
            alt="Digital land ownership verification"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right */}
        <div className="w-56 sm:w-64 lg:w-72 h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={images.prop1}
            alt="Smart land title record"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Materials;
