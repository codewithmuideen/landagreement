import React from "react";

// Placeholder team images (replace with your own URLs if needed)
const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
          We are committed to transforming land and property verification across
          Nigeria by leveraging technology, ensuring transparency, and building
          trust for individuals, institutions, and governments.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower individuals and institutions with instant access to
            verified land records, reducing disputes and enabling seamless
            property transactions.
          </p>
        </div>
        <div className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become the leading digital property verification platform in
            Africa, fostering trust, innovation, and economic growth through
            transparency.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            A passionate group of innovators, engineers, and leaders dedicated to
            building trust in land transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
