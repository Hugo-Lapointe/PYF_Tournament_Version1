import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-7xl md:text-8xl font-extrabold mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl mb-6">
          Page <span className="text-slate-900">Not Found</span>
        </h2>

        <p className="text-lg max-w-xl mx-auto mb-10">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white font-bold"
          >
            Home
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 transition rounded-xl text-white font-bold"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
