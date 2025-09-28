import React from "react";

const DataResidency = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Data Residency</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
          Transparency and compliance are at the heart of our platform. Learn
          where and how your data is stored, processed, and protected.
        </p>
      </section>

      {/* Data Residency Info */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-green-700">Where Your Data Lives</h2>
        <p className="text-gray-600 leading-relaxed">
          We ensure that all data processed through our platform complies with
          Nigerian regulations and international data protection standards. Our
          infrastructure is designed with both sovereignty and security in mind.
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Nigeria-based storage:</strong> Critical land registry data
            is securely stored in Tier-III certified data centers within Nigeria.
          </li>
          <li>
            <strong>Cloud infrastructure:</strong> We leverage secure,
            region-specific cloud providers to ensure reliability and scalability.
          </li>
          <li>
            <strong>Redundancy:</strong> Data is backed up across multiple
            availability zones to prevent downtime and data loss.
          </li>
          <li>
            <strong>Compliance:</strong> Our policies align with NDPR, GDPR, and
            other global data protection frameworks.
          </li>
        </ul>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-8 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-green-700">Security & Compliance</h2>
        <p className="text-gray-600 leading-relaxed">
          Your data security is our top priority. We employ best-in-class
          practices to ensure that sensitive property and personal information
          remains protected at all times.
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Encryption in transit and at rest.</li>
          <li>Role-based access controls for authorized personnel only.</li>
          <li>Regular third-party security audits and penetration tests.</li>
          <li>
            Immutable audit logs to track every access and transaction event.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-xl font-bold text-green-700 mb-4">
          Questions About Data Residency?
        </h2>
        <p className="text-gray-600">
          Reach out to our compliance team at{" "}
          <a
            href="mailto:compliance@landbridge.ng"
            className="text-green-600 hover:underline"
          >
            compliance@landbridge.ng
          </a>
        </p>
      </section>
    </div>
  );
};

export default DataResidency;
