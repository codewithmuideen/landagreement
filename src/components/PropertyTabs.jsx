import React, { useState } from "react";
import {
  FaUsers,
  FaGavel,
  FaUniversity,
  FaLandmark,
  FaCheckCircle,
  FaQrcode,
  FaBell,
  FaReceipt,
  FaFileAlt,
  FaBalanceScale,
  FaSearch,
  FaShieldAlt,
  FaCubes,
  FaProjectDiagram,
  FaDatabase,
  FaMoneyBillWave,
  FaHandshake,
} from "react-icons/fa";

const tabs = [
  {
    id: "citizens",
    title: "Citizens & Buyers",
    icon: <FaUsers className="text-blue-500 text-2xl" />,
    content: [
      { icon: <FaCheckCircle />, text: "Verify before you pay" },
      { icon: <FaQrcode />, text: "Scan QR on e-C of O" },
      { icon: <FaBell />, text: "Get alerts on disputes" },
      { icon: <FaReceipt />, text: "Keep receipts in one place" },
    ],
  },
  {
    id: "lawyers",
    title: "Lawyers & Conveyancers",
    icon: <FaGavel className="text-purple-500 text-2xl" />,
    content: [
      { icon: <FaFileAlt />, text: "Due-diligence packs" },
      { icon: <FaBalanceScale />, text: "Document chain of custody" },
      { icon: <FaShieldAlt />, text: "Court-ready audit trail" },
      { icon: <FaSearch />, text: "Bulk searches" },
    ],
  },
  {
    id: "banks",
    title: "Banks & Developers",
    icon: <FaUniversity className="text-green-500 text-2xl" />,
    content: [
      { icon: <FaHandshake />, text: "KYC/AML alignment" },
      { icon: <FaProjectDiagram />, text: "Portfolio risk checks" },
      { icon: <FaCubes />, text: "API & sandbox" },
      { icon: <FaMoneyBillWave />, text: "Bulk verification pricing" },
    ],
  },
  {
    id: "government",
    title: "State & LGAs",
    icon: <FaLandmark className="text-red-500 text-2xl" />,
    content: [
      { icon: <FaDatabase />, text: "Digitize legacy archives" },
      { icon: <FaMoneyBillWave />, text: "Boost IGR via e-payments" },
      { icon: <FaBell />, text: "Reduce disputes backlog" },
      { icon: <FaUsers />, text: "Citizen self-service portal" },
    ],
  },
];

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState("citizens");

  return (
    <section id="forwhom" className="w-full bg-gradient-to-br from-blue-100 via-white to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          Built for everyone in the property chain
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl shadow-md backdrop-blur-md transition-all
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-white/40 text-gray-800 hover:bg-white/60"
                }`}
            >
              {tab.icon}
              <span className="font-semibold">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/30 backdrop-blur-xl shadow-2xl rounded-3xl p-8 grid sm:grid-cols-2 gap-6">
          {tabs
            .find((tab) => tab.id === activeTab)
            .content.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 text-xl">{item.icon}</div>
                <p className="text-gray-800 font-medium">{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
