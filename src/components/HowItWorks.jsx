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
      icon: <FaSearch className="text-green-600 text-lg" />,
    },
    {
      id: "02",
      title: "Validate on Ledger",
      desc: "We cross-check state registry log for conflicts.",
      icon: <FaDatabase className="text-green-600 text-lg" />,
    },
    {
      id: "03",
      title: "Get Report",
      desc: "Download a signed verification report and share with banks.",
      icon: (
        <div className="flex items-center space-x-1">
          <FaFileDownload className="text-green-600 text-lg" />
          <FaShare className="text-green-600 text-lg" />
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-green-700 uppercase mb-2">
          How Does It Work?
        </h2>
        <h3 className="text-4xl font-bold text-green-700 uppercase mb-16">
          3 Step Process
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-32">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Dotted Line (visible on lg) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block w-32 h-[2px] border-b-2 border-dotted border-gray-300 absolute top-[60px] left-[calc(50%+4rem)] transform translate-x-1/2"></div>
              )}

              {/* Step Label */}
              <p className="text-sm font-semibold text-gray-900 mt-8">
                {step.id}. {step.title.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;