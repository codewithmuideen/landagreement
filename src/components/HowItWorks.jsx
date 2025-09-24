import React from "react";
import {
  FaSearch,
  FaDatabase,
  FaFileDownload,
  FaShare,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Search or Scan",
      desc: "Enter parcel ID/address or scan the QR on certificate.",
      icon: <FaSearch className="text-green-600 text-2xl" />,
    },
    {
      id: "02",
      title: "Validate on Ledger",
      desc: "We cross-check state registry log for conflicts.",
      icon: <FaDatabase className="text-green-600 text-2xl" />,
    },
    {
      id: "03",
      title: "Get Report",
      desc: "Download a signed verification report and share with banks.",
      icon: (
        <div className="flex items-center space-x-1">
          <FaFileDownload className="text-green-600 text-lg" />
          <FaShare className="text-green-600 text-sm" />
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          How It Works
        </h2>

        {/* Desktop Line Connector */}
        <div className="hidden lg:block absolute top-[280px] left-1/2 transform -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-green-400 via-green-500 to-green-400 z-0"></div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white p-8 rounded-xl shadow-lg max-w-xs w-full transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 mb-10 lg:mb-0"
            >
              {/* Step number circle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-bold shadow-lg">
                {step.id}
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-6 shadow-md mx-auto">
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
