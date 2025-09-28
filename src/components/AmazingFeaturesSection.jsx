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
    icon: <FaSearch className="text-green-500 text-2xl" />,
    title: 'Instant Verification',
    description: 'Check ownership, liens, and encumbrances with one search.',
  },
  {
    icon: <FaCertificate className="text-green-500 text-2xl" />,
    title: 'e-Certificate of Occupancy',
    description: 'Digital C of O with QR for on-site validation.',
  },
  {
    icon: <FaExclamationTriangle className="text-green-500 text-2xl" />,
    title: 'Fraud Detection',
    description: 'AI signals duplicate filings, forged surveys, and tampering.',
  },
  {
    icon: <FaMoneyBillWave className="text-green-500 text-2xl" />,
    title: 'Payments & Taxes',
    description: 'Pay land use charge and transfer fees with e-receipts.',
  },
  {
    icon: <FaMapMarkedAlt className="text-green-500 text-2xl" />,
    title: 'GIS Mapping',
    description: 'View boundaries, zoning, and survey overlays (WGS84).',
  },
  {
    icon: <FaLock className="text-green-500 text-2xl" />,
    title: 'Immutable Ledger',
    description: 'Append-only audit trail stored on a permissioned chain.',
  },
];

const AmazingFeaturesSection = () => {
  return (
    <section
      id="features"
      className="px-[8%] py-20 bg-white text-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A single source of truth for property
          </p>
          <p className="text-base text-gray-600 max-w-2xl">
            Verification, certificates, fraud detection, payments, and GIS in one secure platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazingFeaturesSection;