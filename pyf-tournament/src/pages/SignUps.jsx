import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

const SignUps = () => {
  return (
    <BackgroundVideoLayout>
      <div className="text-white px-6 pt-20">

        {/* HERO */}
        <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/valorant_banner.jpg"
            alt="Sign Up Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
              Sign <span className="text-[#017bbd]">Up</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              Join the PYF Valorant League! Register your team or squad via Discord.
            </p>
          </motion.div>
        </section>

        {/* INFO + CTA */}
        <section className="py-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            How to <span className="text-[#017bbd]">Register</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Our league sign-ups are managed through Discord. This ensures quick communication and easy team registration. 
            Make sure you have a Discord account before joining.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <a
              href="https://discord.gg/YOURDISCORDLINK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#017bbd] hover:bg-[#0194e4] rounded-xl text-xl font-bold shadow-lg transition"
            >
              Join Discord
            </a>
            <a
              href="/rules"
              className="px-10 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-xl font-bold shadow-lg transition"
            >
              Read the Rules
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-20 text-gray-400 text-lg"
          >
            <p>Once in the Discord, follow the instructions in <span className="text-[#017bbd] font-semibold">#sign-up</span> channel to register your team.</p>
          </motion.div>
        </section>

        {/* INFO CARDS */}
        <section className="py-20 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#017bbd]">Teams & Players</h3>
            <p className="text-gray-300">Collegiate squads, amateur rosters, and solo players can all register through Discord.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#017bbd]">Fast Registration</h3>
            <p className="text-gray-300">Complete your team registration in minutes and get added to the next season.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#017bbd]">Support & Guidance</h3>
            <p className="text-gray-300">Our admins and community managers will help you through the registration process.</p>
          </motion.div>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default SignUps;
