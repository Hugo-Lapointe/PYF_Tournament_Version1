import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";
import { FaDiscord, FaEnvelope, FaGlobe } from "react-icons/fa";

const Contact = () => {
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
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
              Contact <span className="text-slate-900">Us</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Have questions or need support? Feel free to reach out to us on Discord or by email.            
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="pb-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-xl text-center hover:scale-[1.03] transition"
          >
            <FaDiscord className="text-6xl text-[#7289da] mx-auto mb-4" />
            <h3 className="text-2xl text-[#7289da] mb-2">Discord</h3>
            <p className="text-gray-300 mb-4">Join our community server for sign-ups, support, and live chat.</p>
            <a
              href="https://discord.gg/Kzr9sBMC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#7289da] hover:bg-[#5b6eae] rounded-xl text-white transition"
            >
              Join Discord
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-xl text-center hover:scale-[1.03] transition"
          >
            <FaEnvelope className="text-6xl text-[#017bbd] mx-auto mb-4" />
            <h3 className="text-2xl text-[#017bbd] mb-2">Email</h3>
            <p className="text-gray-300 mb-4">Contact us directly for support or inquiries.</p>
            <a
              href="mailto:pyfesports@gmail.com"
              className="inline-block px-8 py-3 bg-[#017bbd] hover:bg-[#0194e4] rounded-xl text-white transition"
            >
              Send Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-xl text-center hover:scale-[1.03] transition"
          >
            <FaGlobe className="text-6xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl text-blue-400 mb-2">Website</h3>
            <p className="text-gray-300 mb-4">Find schedules, stats, and all league information on our site.</p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-blue-400 hover:bg-[#0194e4] rounded-xl text-white transition"
            >
              Visit Site
            </a>
          </motion.div>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default Contact;
