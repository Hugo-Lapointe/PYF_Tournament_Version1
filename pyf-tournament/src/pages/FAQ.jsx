import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Sample FAQ data
const faqs = [
  {
    question: "How do I register my team?",
    answer:
      "All team registrations are done via our Discord. Join the server and follow instructions in the #sign-up channel.",
  },
  {
    question: "Can solo players join?",
    answer:
      "Yes! Solo players can sign up, and we will help place you on a team or match you with other solo players.",
  },
  {
    question: "Are collegiate teams allowed?",
    answer:
      "Absolutely! Collegiate teams are welcome to compete alongside amateur and community teams.",
  },
  {
    question: "What is the match format?",
    answer:
      "Most matches are best-of-3, following standard Valorant competitive rules. Some special events may vary.",
  },
  {
    question: "How can I watch live matches?",
    answer:
      "All live matches are streamed on our official Twitch channel. Check the Live Matches page for links.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <BackgroundVideoLayout>
      <div className="text-white px-6 pt-20">

        {/* HERO */}
        <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/valorant_banner.jpg"
            alt="FAQ Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
              Frequently Asked <span className="text-[#017bbd]">Questions</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              Answers to the most common questions about our league, registration, and live events.
            </p>
          </motion.div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 + index * 0.1 }}
              className="mb-4 bg-slate-800/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-[#017bbd] hover:bg-slate-700 transition"
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-300 text-md border-t border-slate-700">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-20 text-center bg-slate-800/40">
          <h2 className="text-4xl font-extrabold mb-6">
            Still have <span className="text-[#017bbd]">Questions?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Join our Discord server to ask questions, get support, or connect with the community.
          </p>
          <a
            href="https://discord.gg/YOURDISCORDLINK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#017bbd] hover:bg-[#0194e4] transition rounded-xl text-xl font-bold"
          >
            Join Discord
          </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default FAQ;
