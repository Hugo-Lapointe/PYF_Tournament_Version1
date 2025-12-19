import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-[#1E6091]">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/pyfgif.mp4" type="video/mp4" />
        <source src="/videos/pyfgif.webm" type="video/webm" />
      </video>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          Coming <span className="text-slate-900">Soon</span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10">
          This page is currently under development.  
          We’re working hard to bring you the full PYF Cup experience.
        </p>

        <a
          href="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white font-bold"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}
