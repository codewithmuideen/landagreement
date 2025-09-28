import React from "react";
import {
  FaBoxOpen,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    value: "1.2M+",
    label: "Parcels digitized",
    icon: <FaBoxOpen className="text-3xl text-blue-400" />,
  },
  {
    value: "8",
    label: "States integrated",
    icon: <FaMapMarkerAlt className="text-3xl text-green-400" />,
  },
  {
    value: "23k",
    label: "Fraud flags prevented",
    icon: <FaShieldAlt className="text-3xl text-red-400" />,
  },
  {
    value: "99.9%",
    label: "Uptime SLA",
    icon: <FaChartLine className="text-3xl text-purple-400" />,
  },
];

const GlassmorphismCard = ({ value, label, icon }) => (
  <div className="p-6 bg-white hover:shadow-lg  duration-300">
    <div className="flex items-center space-x-4 mb-4">
      {icon}
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
    <p className="text-gray-900 font-semibold text-lg mb-2">{value}</p>
    <div className="flex space-x-1">
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
    </div>
  </div>
);

const AmazingStatsSection = () => {
  return (
    <section id="amazing-stats" className="px-[8%] py-20 bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Impact in Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
          {stats.map((stat, index) => (
            <GlassmorphismCard key={index} {...stat} />
          ))}
        </div>

        {/* Navigation Buttons */}
      </div>
    </section>
  );
};

export default AmazingStatsSection;