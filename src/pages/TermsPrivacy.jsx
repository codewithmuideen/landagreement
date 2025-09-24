import React from "react";

const TermsPrivacy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Terms & Privacy Policy
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
          Your privacy and trust matter to us. Please review our terms and
          privacy policy below.
        </p>
      </section>

      {/* Terms Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-indigo-700">Terms of Service</h2>
        <p className="text-gray-600 leading-relaxed">
          By using our platform, you agree to comply with our terms of service.
          You are responsible for ensuring the accuracy of the information you
          provide and for keeping your account secure. Misuse of our services,
          unauthorized access, or fraudulent activities are strictly prohibited.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Use the platform lawfully and responsibly.</li>
          <li>Respect intellectual property rights.</li>
          <li>Avoid fraudulent or harmful activities.</li>
          <li>We may suspend or terminate accounts that violate these terms.</li>
        </ul>
      </section>

      {/* Privacy Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-8 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-indigo-700">Privacy Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          We are committed to protecting your personal data. This policy
          explains how we collect, use, and safeguard your information:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Data Collection:</strong> We may collect names, contact
            details, and usage data to improve our services.
          </li>
          <li>
            <strong>Data Usage:</strong> Information is used for verification,
            support, and service improvements.
          </li>
          <li>
            <strong>Data Sharing:</strong> We do not sell your data. It may only
            be shared with authorized third parties (e.g., government
            authorities, service providers) where required.
          </li>
          <li>
            <strong>Security:</strong> We use industry-standard measures to
            protect your data from unauthorized access.
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed">
          By using our platform, you consent to our privacy practices as
          outlined here.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-xl font-bold text-indigo-700 mb-4">
          Questions or Concerns?
        </h2>
        <p className="text-gray-600">
          Please reach out to us at{" "}
          <a
            href="mailto:support@landbridge.ng"
            className="text-indigo-600 hover:underline"
          >
            support@landbridge.ng
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsPrivacy;
