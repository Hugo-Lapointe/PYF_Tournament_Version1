import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

const Roadmap = () => {
  return (
    <BackgroundVideoLayout>
      <div className="text-[#017bbd]">

        {/* HERO SECTION */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl mb-4 tracking-wide">
              League <span className="text-slate-900">Roadmap</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Our vision for upcoming seasons, features, and competitive improvements.
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
            <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />
        </div>

        {/* TIMELINE */}
        <section className="pb-20 px-6 md:px-16 lg:px-32">
          <h2 className="text-4xl text-center mb-16">
            Development <span className="text-[#017bbd]">Timeline</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">

            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#017bbd]/40 rounded-full" />

            {/* Timeline Items */}
            {[
              {
                title: "Phase 1 — Website Rework",
                date: "Current",
                desc: "Full redesign, modern UI, animated sections, team pages, and live match hub.",
              },
              {
                title: "Phase 2 — Live Stats & API Integration",
                date: "Coming Soon",
                desc: "Match tracking, team stats, standings automation, and player profiles.",
              },
              {
                title: "Phase 3 — Tournament Tools",
                date: "Scheduled",
                desc: "Bracket generator, admin panel, ref tools, and real-time moderation systems.",
              },
              {
                title: "Phase 4 — Weekly Broadcast System",
                date: "Planned",
                desc: "Official streams, casters, highlights, video content, and media packages.",
              },
              {
                title: "Phase 5 — Collegiate Expansion",
                date: "Future",
                desc: "Invite-only collegiate conferences, varsity partnerships, and larger events.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative mb-20 flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className="bg-slate-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-[90%] md:w-[45%]"
                >
                  <h3 className="text-2xl text-blue-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 mb-3">{item.date}</p>
                  <p className="text-gray-300">{item.desc}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#017bbd] rounded-full shadow-lg border-4 border-slate-900" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-slate-800/40">
          <h2 className="text-4xl mb-6 text-blue-400">
            Be Part of the <span className="text-slate-900">Future</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Join now and grow with us as we build the next generation of Valorant competition.
          </p>

          <a
            href="/signups"
            className="inline-block px-8 py-3 bg-blue-400 hover:bg-[#0194e4] rounded-xl text-white transition"
          >
            Sign Up
          </a>
        </section>
      </div>
    </BackgroundVideoLayout>
  );
};

export default Roadmap;
