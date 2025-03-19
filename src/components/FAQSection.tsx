import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is the format of the hackathon?",
    answer: "This is a virtual hackathon that runs for 48 hours. Teams can participate from anywhere in the world, collaborating through our online platform."
  },
  {
    question: "Who can participate?",
    answer: "The hackathon is open to developers, designers, and innovators of all skill levels. Whether you're a student, professional, or hobbyist, you're welcome to join!"
  },
  {
    question: "How are projects judged?",
    answer: "Projects are evaluated based on innovation, technical complexity, practical applicability, and presentation quality. Our panel of expert judges will review all submissions."
  },
  {
    question: "What are the prize categories?",
    answer: "We have multiple prize categories including Grand Prize, Runner Up, and special category prizes for AI/ML, Web3, Social Impact, Developer Tools, and Community Choice."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative bg-[#0d1424] border border-blue-900/30 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-4' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;