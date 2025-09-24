import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How accurate is the verification data?",
    answer:
      "We sync directly with state and provincial land registries and maintain an immutable audit log. Conflicts are automatically flagged and reviewed by our compliance team.",
  },
  {
    question: "Is my search private?",
    answer:
      "Yes. All searches are encrypted end-to-end. Only you can access generated reports unless you choose to share them.",
  },
  {
    question: "Can my bank integrate?",
    answer:
      "We provide secure REST APIs and a sandbox environment. Enterprise plans include onboarding assistance and dedicated integration support.",
  },
  {
    question: "Do you cover all states in Nigeria?",
    answer:
      "Yes, we are continuously syncing with all states across Nigeria. Coverage updates are announced in real-time.",
  },
  {
    question: "Can I download or export reports?",
    answer:
      "Absolutely. Reports can be downloaded as PDF or CSV and are designed to be shareable with banks, legal teams, or government agencies.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Registry data is refreshed daily, and in many regions updates are streamed in real-time.",
  },
  {
    question: "What if there’s a dispute in the registry record?",
    answer:
      "Disputes are flagged immediately, logged in our immutable ledger, and escalated to the appropriate registry authority for resolution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#1A202C] py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-300">
          Everything you need to know about Nigeria’s trusted digital land
          registry.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ${
              openIndex === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-md">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-200 text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
