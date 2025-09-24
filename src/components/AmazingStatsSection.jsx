import React from "react";
import {
  FaBoxOpen,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaChartLine,
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
  <div className="relative p-6 rounded-2xl shadow-lg backdrop-blur-xl bg-white/10 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/40">
    {/* Glow overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-10 rounded-2xl pointer-events-none"></div>
    
    <div className="flex flex-col items-center justify-center text-center space-y-3 relative z-10">
      <div className="p-4 bg-white/20 rounded-full shadow-md">{icon}</div>
      <h3
        className="text-4xl font-extrabold text-white drop-shadow-lg"
        style={{ textShadow: "0px 0px 12px rgba(255,255,255,0.6)" }}
      >
        {value}
      </h3>
      <p className="text-sm text-gray-300 uppercase tracking-wider font-medium">
        {label}
      </p>
    </div>
  </div>
);

const AmazingStatsSection = () => {
  return (
    <section
      id="amazing-stats"
      className="py-20 flex items-center justify-center px-6"
      style={{
        background: "#1A202C", // brand dark background
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14 drop-shadow-xl"
          style={{ textShadow: "2px 2px 10px rgba(255,255,255,0.2)" }}
        >
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <GlassmorphismCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazingStatsSection;
