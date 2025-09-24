import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      console.log("Form submitted:", form);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            Contact <span className="text-blue-400">LandBridge NG</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We’re here to assist you 24/7. Whether it’s land verification,
            registry inquiries, or general support — reach out and our team will
            get back to you promptly.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-blue-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-300">support@landbridge.ng</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-blue-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-300">+234 800 123 4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Address</h4>
                <p className="text-gray-300">
                  15 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="text-blue-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Support Hours</h4>
                <p className="text-gray-300">24/7 — Always available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-center">Send us a message</h3>
          {submitted && (
            <p className="text-green-400 text-center mb-6">
              ✅ Your message has been sent successfully!
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 font-semibold shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
