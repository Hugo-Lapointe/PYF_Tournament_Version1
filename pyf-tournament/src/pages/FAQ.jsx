import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I sign-up?",
    answer:
      (
        <>
          To join the league, head over to our{" "}
          <a
            href="/signups"
            className="text-blue-400 hover:underline font-medium"
          >
            Sign Up
          </a>{" "}
          page and follow the instructions to register yourself.
        </>
      ),
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
      "Most matches are best-of-1, following standard Valorant competitive rules. Some special events may vary.",
  },
  {
    question: "How can I watch live matches?",
    answer:
      (
        <>
          All live matches are streamed on our official{" "}
          <a
            href="https://www.twitch.tv/pyfesports"
            target="_blank"
            className="text-blue-400 hover:underline font-medium"
          >
            Twitch
          </a>{" "}
          channel. Check the Live Matches page for links.
        </>
      ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <BackgroundVideoLayout>
      <div className="text-[#017bbd]">

        {/* HERO */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl mb-4 tracking-wide">
              Frequently Asked <span className="text-slate-900">Questions</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Answers to the most common questions about our league, registration, and live events.
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />
        </div>

        {/* FAQ Accordion */}
        <section className="pb-24 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 + index * 0.05 }}
                className="mb-4 bg-slate-800/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg text-blue-400 hover:bg-slate-700 transition"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <span>{faq.question}</span>

                  {/* animated chevron */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="ml-4 text-gray-300"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                {/* Animated panel: scaleY anchored at top */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                      style={{ transformOrigin: "top" }}
                      className="px-6 py-4 text-gray-300 text-md border-t border-slate-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="py-20 text-center bg-slate-800/40">
          <h2 className="text-4xl mb-6 text-blue-400">
            Still have <span className="text-slate-900">Questions?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Visit our Contact page to reach us by email or connect with us on Discord.          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded text-white shadow-md"
          >
            Contact Us
          </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default FAQ;
