import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

// Sample live matches data
const liveMatches = [
  {
    id: 1,
    teamA: "Phoenix Squad",
    teamB: "Shadow Strike",
    score: "7 - 5",
    status: "Live",
    stream: "https://www.twitch.tv/pyfesports",
  },
  {
    id: 2,
    teamA: "Valor Vortex",
    teamB: "Rapid Fire",
    score: "9 - 6",
    status: "Live",
    stream: "https://www.twitch.tv/pyfesports",
  },
  {
    id: 3,
    teamA: "Night Owls",
    teamB: "Crimson Tide",
    score: "0 - 0",
    status: "Upcoming",
    stream: "",
  },
];

const Live = () => {
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
              Live <span className="text-slate-900">Matches</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Watch live matches, track scores in real time, and follow the action as it happens.            
            </p>
          </motion.div>
        </section>

        {/* LIVE MATCH CARDS */}
        <section className="pb-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {liveMatches.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + i * 0.1 }}
              className={`relative bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition border-2 ${
                match.status === "Live" ? "border-red-500" : "border-slate-700"
              }`}
            >
              {match.status === "Live" && (
                <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                  LIVE
                </span>
              )}
              <h3 className="text-2xl text-blue-400 mb-4 text-center">
                {match.teamA}<br /> vs<br /> {match.teamB}
              </h3>
              <p className="text-gray-300 text-center text-lg mb-4">
                Score: {match.score}
              </p>
              {match.stream ? (
                <a
                  href={match.stream}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#9146FF] hover:bg-[#7a39d5] transition text-white px-6 py-3 rounded-xl shadow-md"
                >
                  Watch Stream
                </a>
              ) : (
                <p className="text-gray-400 text-center">No stream yet</p>
              )}
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-slate-800/40">
          <h2 className="text-4xl mb-6 text-blue-400">
            Do Not Miss Out<span className="text-slate-900"> On The Action</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Stay tuned for upcoming matches and catch all the live streams directly on our Twitch channel.
          </p>
          <a
            href="https://www.twitch.tv/pyfesports"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#9146FF] hover:bg-[#7a39d5] rounded-xl text-white transition"
          >
            Watch All Live
          </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default Live;
