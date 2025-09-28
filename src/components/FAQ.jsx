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
    <section id="faq" className="w-full bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Question</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 focus:outline-none"
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-300 text-black">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}