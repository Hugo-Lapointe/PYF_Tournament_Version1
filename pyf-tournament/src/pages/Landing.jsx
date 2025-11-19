import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlowingBalls from "../components/GlowingBalls";

export default function Landing() {
  return (
    <>
      <GlowingBalls />

      <div className="relative min-h-screen">
        {/* Video Background */}
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

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center min-h-screen px-6 pt-32 pb-20 text-white z-20"
        >
          {/* =============================== */}
          {/*           HERO SECTION          */}
          {/* =============================== */}
          <div className="flex flex-col items-center text-center max-w-4xl w-full mb-24">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-[#1E6091]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Welcome to the <span className="text-slate-900">PYF Valorant League</span>
            </motion.h1>

            <motion.p
              className="max-w-2xl mb-10 text-lg md:text-xl text-[#1E6091]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              A competitive space for collegiate and community teams to clash, compete, and dominate.
            </motion.p>

            <Link
              to="/signups"
              className="bg-slate-800 hover:bg-[#016aa3] transition px-10 py-4 rounded text-lg shadow-lg"
            >
              Register Your Team
            </Link>
          </div>

          <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />

          {/* =============================== */}
          {/*        ABOUT MINI SECTION       */}
          {/* =============================== */}
          <div className="max-w-5xl text-center mb-24 px-4">
            <h2 className="text-3xl text-[#1E6091] mb-4">What Is The PYF League?</h2>
            <p className="text-[#1E6091] text-lg">
              A competitive Valorant league run by dedicated admins and community members.
              Open to collegiate teams, friends, and players hungry for competitive experience.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-block bg-slate-800 hover:bg-[#016aa3] px-6 py-3 rounded shadow"
            >
              Learn More
            </Link>
          </div>

          {/* =============================== */}
          {/*       UPCOMING MATCHES PREVIEW  */}
          {/* =============================== */}
          <section className="w-full max-w-6xl mb-24 px-4">
            <h2 className="text-3xl text-center text-[#1E6091] mb-12">Upcoming Matches</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card Example — Replace with dynamic data later */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-slate-900/70 backdrop-blur-md border border-blue-900 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="font-bold text-xl text-white mb-2">Team A vs Team B</h3>
                  <p className="text-[#1E6091]">Friday — 8:00 PM EST</p>
                  <Link
                    to="/matches"
                    className="inline-block mt-4 text-blue-400 hover:text-blue-300 underline"
                  >
                    View Match
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link
                to="/matches"
                className="bg-slate-800 hover:bg-[#016aa3] px-8 py-3 rounded shadow"
              >
                View All Matches
              </Link>
            </div>
          </section>

          {/* =============================== */}
          {/*        STANDINGS PREVIEW        */}
          {/* =============================== */}
          <section className="w-full max-w-5xl mb-24 px-4">
            <h2 className="text-3xl text-center text-[#1E6091] mb-8">Current Standings</h2>

            <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <ul className="space-y-3">
                <li className="flex justify-between text-[#1E6091]">
                  <span>1. Team Alpha</span>
                  <span>12 - 2</span>
                </li>
                <li className="flex justify-between text-[#1E6091]">
                  <span>2. Team Blaze</span>
                  <span>11 - 3</span>
                </li>
                <li className="flex justify-between text-[#1E6091]">
                  <span>3. Team Frost</span>
                  <span>9 - 5</span>
                </li>
              </ul>

              <div className="text-center mt-6">
                <Link
                  to="/standings"
                  className="bg-slate-800 hover:bg-[#016aa3] px-6 py-3 rounded shadow"
                >
                  Full Standings
                </Link>
              </div>
            </div>
          </section>

          {/* =============================== */}
          {/*       STATS CENTRAL PREVIEW     */}
          {/* =============================== */}
          <section className="w-full max-w-6xl mb-24 px-4">
            <h2 className="text-3xl text-center text-[#1E6091] mb-10">Stats Central</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Top Fragger", "Highest ACS", "Most Wins"].map((title, index) => (
                <div
                  key={index}
                  className="bg-slate-900/70 backdrop-blur-md border border-blue-900 p-6 rounded-xl shadow-lg text-center"
                >
                  <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                  <p className="text-[#1E6091]">Player XYZ</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link
                to="/stats"
                className="bg-slate-800 hover:bg-[#016aa3] px-8 py-3 rounded shadow"
              >
                View Full Stats
              </Link>
            </div>
          </section>

          {/* =============================== */}
          {/*         MINi ROADMAP            */}
          {/* =============================== */}
          <section className="w-full max-w-4xl mb-24 px-4 text-center">
            <h2 className="text-3xl text-[#1E6091] mb-6">Season Progress</h2>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-700" style={{ width: "40%" }}></div>
            </div>

            <p className="text-[#1E6091] mt-4">Currently in: Week 3 — Regular Season</p>

            <Link
              to="/roadmap"
              className="inline-block mt-6 bg-slate-800 hover:bg-[#016aa3] px-6 py-3 rounded shadow"
            >
              View Full Roadmap
            </Link>
          </section>

          {/* =============================== */}
          {/*          RULES TEASER           */}
          {/* =============================== */}
          <section className="w-full max-w-5xl mb-24 text-center px-4">
            <h2 className="text-3xl text-[#1E6091] mb-4">League Rules</h2>
            <p className="text-[#1E6091] mb-6">
              Standard competitive ruleset, map pool, match format, and team requirements.
            </p>

            <Link
              to="/rules"
              className="bg-slate-800 hover:bg-[#016aa3] px-6 py-3 rounded shadow"
            >
              View Full Rules
            </Link>
          </section>

          {/* =============================== */}
          {/*      MEET THE TEAM PREVIEW      */}
          {/* =============================== */}
          <section className="w-full max-w-6xl mb-24 px-4">
            <h2 className="text-3xl text-center text-[#1E6091] mb-12">Meet The Admins</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Hugo", "Admin 2", "Admin 3"].map((name, i) => (
                <div
                  key={i}
                  className="bg-slate-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg text-center"
                >
                  <img
                    src="/images/default_pfp.png"
                    alt="staff"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border border-blue-800"
                  />
                  <h3 className="text-white font-bold text-xl">{name}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/team"
                className="bg-slate-800 hover:bg-[#016aa3] px-6 py-3 rounded shadow"
              >
                Full Staff Page
              </Link>
            </div>
          </section>

          {/* =============================== */}
          {/*     CONTACT / DISCORD SECTION   */}
          {/* =============================== */}
          <section className="w-full max-w-4xl text-center px-4 mb-32">
            <h2 className="text-3xl text-[#1E6091] mb-4">Join the Community</h2>
            <p className="text-[#1E6091] mb-6">Stay updated, scrim, talk matches, and get support.</p>

            <a
              href="https://discord.gg/"
              target="_blank"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded text-white font-semibold shadow-md"
            >
              Join the Discord
            </a>
          </section>
        </motion.div>
      </div>
    </>
  );
}
