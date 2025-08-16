import React from "react";
import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <div className="relative min-h-screen">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/pyfgif.mp4" type="video/mp4" />
        <source src="/videos/pyfgif.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <motion.div
        className="relative z-20 min-h-screen w-full p-8 py-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold text-center text-[#1E6091] mb-12 drop-shadow-lg">
          Tournament Schedule
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Round Robin */}
          <div className="bg-slate-800/80 rounded-xl shadow-lg p-4 py-6 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold text-white mb-2">Round Robin</h2>
            <img
              src="/images/round_robin.png"
              alt="Round Robin Schedule"
              className="w-full max-w-md rounded-lg border border-gray-600 object-contain"
            />
          </div>

          {/* Playoffs */}
          <div className="bg-slate-800/80 rounded-xl shadow-lg p-4 py-6 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold text-white mb-2">Playoffs</h2>
            <img
              src="/images/playoffs.png"
              alt="Playoffs Schedule"
              className="w-full max-w-md rounded-lg border border-gray-600 object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
