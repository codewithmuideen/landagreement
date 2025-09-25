import React from 'react';
import { Link }from 'react-router-dom'
import { 
  FaCheckCircle, 
  FaUpload, 
  FaChartLine, 
  FaShieldAlt, 
  FaEnvelope, 
  FaUserTie, 
  FaFileAlt, 
  FaGlobe 
} from 'react-icons/fa';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Pay per check or integrate via API
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Citizens verify affordably; enterprises can integrate at scale.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300 border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Basic</h3>
            <p className="text-3xl font-bold text-green-600 mb-6">₦15,499/check</p>
            <ul className="text-left space-y-4 mb-6">
              <li className="flex items-center text-gray-700"><FaCheckCircle className="text-green-500 mr-2" /> Single property search</li>
              <li className="flex items-center text-gray-700"><FaFileAlt className="text-green-500 mr-2" /> PDF verification report</li>
              <li className="flex items-center text-gray-700"><FaEnvelope className="text-green-500 mr-2" /> Email support</li>
            </ul>
            <a href="#verify">
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              Verify Now
            </button>
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300 border-l-4 border-green-500 relative">
            <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pro</h3>
            <p className="text-3xl font-bold text-green-600 mb-6">₦289,999/mo</p>
            <ul className="text-left space-y-4 mb-6">
              <li className="flex items-center text-gray-700"><FaCheckCircle className="text-green-500 mr-2" /> Up to 50 checks/mo</li>
              <li className="flex items-center text-gray-700"><FaUpload className="text-green-500 mr-2" /> Bulk uploads</li>
              <li className="flex items-center text-gray-700"><FaUserTie className="text-green-500 mr-2" /> Priority support</li>
              <li className="flex items-center text-gray-700"><FaChartLine className="text-green-500 mr-2" /> Dashboard analytics</li>
            </ul>
           <Link to="/login">
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300">
              Start Trial
            </button>
           </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300 border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-green-600 mb-6">Talk to Sales</p>
            <ul className="text-left space-y-4 mb-6">
              <li className="flex items-center text-gray-700"><FaShieldAlt className="text-green-500 mr-2" /> Custom SLAs</li>
              <li className="flex items-center text-gray-700"><FaGlobe className="text-green-500 mr-2" /> On-prem/data residency</li>
              <li className="flex items-center text-gray-700"><FaUserTie className="text-green-500 mr-2" /> Dedicated access</li>
              <li className="flex items-center text-gray-700"><FaShieldAlt className="text-green-500 mr-2" /> Governance reporting</li>
            </ul>
            <Link to="/contact">
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              Contact Sales
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
