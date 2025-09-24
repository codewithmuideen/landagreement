import React from 'react';
import {
  FaSearch,
  FaCertificate,
  FaExclamationTriangle,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaLock,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaSearch className="text-blue-400 text-4xl drop-shadow-lg" />,
    title: 'Instant Verification',
    description: 'Check ownership, liens, and encumbrances with one search.',
  },
  {
    icon: <FaCertificate className="text-green-400 text-4xl drop-shadow-lg" />,
    title: 'e-Certificate of Occupancy',
    description: 'Digital C of O with QR for on-site validation.',
  },
  {
    icon: <FaExclamationTriangle className="text-red-400 text-4xl drop-shadow-lg" />,
    title: 'Fraud Detection',
    description: 'AI signals duplicate filings, forged surveys, and tampering.',
  },
  {
    icon: <FaMoneyBillWave className="text-purple-400 text-4xl drop-shadow-lg" />,
    title: 'Payments & Taxes',
    description: 'Pay land use charge and transfer fees with e-receipts.',
  },
  {
    icon: <FaMapMarkedAlt className="text-yellow-400 text-4xl drop-shadow-lg" />,
    title: 'GIS Mapping',
    description: 'View boundaries, zoning, and survey overlays (WGS84).',
  },
  {
    icon: <FaLock className="text-indigo-400 text-4xl drop-shadow-lg" />,
    title: 'Immutable Ledger',
    description: 'Append-only audit trail stored on a permissioned chain.',
  },
];

const AmazingFeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#00f260,_transparent_40%),_radial-gradient(circle_at_bottom_right,_#0575e6,_transparent_40%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-green-300 text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/20">
            Core Features
          </span>
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 mb-4 leading-tight drop-shadow-md">
            A single source of truth for property
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Verification, certificates, fraud detection, payments, and GIS in one secure platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazingFeaturesSection;
