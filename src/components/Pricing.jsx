import React from 'react';
import { Link } from 'react-router-dom';
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
    <section id="pricing" className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Pay per check or integrate via API
        </h2>
        <p className="text-sm text-gray-300 mb-10 text-center">
          Citizens verify affordably; enterprises can integrate at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-blue-800 p-6 rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-3xl font-bold text-green-600 mb-6">₦15,499/check</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300"><FaCheckCircle className="text-green-500 mr-2" /> Single property search</li>
              <li className="flex items-center text-gray-300"><FaFileAlt className="text-green-500 mr-2" /> PDF verification report</li>
              <li className="flex items-center text-gray-300"><FaEnvelope className="text-green-500 mr-2" /> Email support</li>
            </ul>
            <a href="#verify">
              <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition duration-300 flex items-center justify-center">
                Verify Now
              </button>
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-indigo-800 p-6 rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-3xl font-bold text-green-600 mb-6">₦289,999/mo</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300"><FaCheckCircle className="text-green-500 mr-2" /> Up to 50 checks/mo</li>
              <li className="flex items-center text-gray-300"><FaUpload className="text-green-500 mr-2" /> Bulk uploads</li>
              <li className="flex items-center text-gray-300"><FaUserTie className="text-green-500 mr-2" /> Priority support</li>
              <li className="flex items-center text-gray-300"><FaChartLine className="text-green-500 mr-2" /> Dashboard analytics</li>
            </ul>
            <Link to="/login">
              <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition duration-300 flex items-center justify-center">
                Start Trial
              </button>
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-blue-800 p-6 rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold text-green-600 mb-6">Talk to Sales</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300"><FaShieldAlt className="text-green-500 mr-2" /> Custom SLAs</li>
              <li className="flex items-center text-gray-300"><FaGlobe className="text-green-500 mr-2" /> On-prem/data residency</li>
              <li className="flex items-center text-gray-300"><FaUserTie className="text-green-500 mr-2" /> Dedicated access</li>
              <li className="flex items-center text-gray-300"><FaShieldAlt className="text-green-500 mr-2" /> Governance reporting</li>
            </ul>
            <Link to="/contact">
              <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition duration-300 flex items-center justify-center">
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