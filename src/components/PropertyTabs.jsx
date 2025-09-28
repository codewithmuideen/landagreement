import React, { useState } from "react";
import images from "../constants/images";
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
    image: images.prop0,
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
    image: images.prop1,
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
    image: images.prop00,
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
    image: images.prop11,
  },
];

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState("citizens");

  return (
    <section id="forwhom" className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-start gap-8 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-medium transition-all ${
                activeTab === tab.id
                  ? "text-gray-800 border-b-2 border-red-500 pb-2"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Built for everyone in the property chain
            </h2>
            <div className="space-y-8">
              {tabs
                .find((tab) => tab.id === activeTab)
                .content.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Image based on active tab */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={tabs.find((tab) => tab.id === activeTab).image}
                alt={activeTab}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}