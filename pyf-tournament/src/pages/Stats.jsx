import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

// Sample data
const topPlayers = [
  { name: "TBD", team: "1", kills: "N/A", deaths: "N/A", kd: "N/A" },
  { name: "TBD", team: "2", kills: "N/A", deaths: "N/A", kd: "N/A" },
  { name: "TBD", team: "3", kills: "N/A", deaths: "N/A", kd: "N/A" },
];

const topTeams = [
  { name: "TBD", wins: "N/A", losses: "N/A", points: "N/A" },
  { name: "TBD", wins: "N/A", losses: "N/A", points: "N/A" },
  { name: "TBD", wins: "N/A", losses: "N/A", points: "N/A" },
];

const recentMatches = [
  { match: "TBD", result: "", score: "N/A" },
  { match: "TBD", result: "", score: "N/A" },
  { match: "TBD", result: "", score: "N/A" },
];

const StatsCentral = () => {
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
              Stats <span className="text-slate-900">Central</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Player stats, team stats, and recent matches — all in one hub.
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
            <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />
        </div>

        {/* TOP PLAYERS */}
        <section className="pb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top <span className="text-slate-900">Players</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topPlayers.map((player, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-2xl mb-2 text-blue-400">{player.name}</h3>
                <p className="text-gray-300 mb-2">Team: {player.team}</p>
                <p className="text-gray-300 mb-1">Kills: {player.kills}</p>
                <p className="text-gray-300 mb-1">Deaths: {player.deaths}</p>
                <p className="text-blue-400">K/D Ratio: {player.kd}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/soon"
              className="inline-block px-8 py-3 bg-blue-400 hover:bg-[#0194e4] rounded-xl text-white transition"
            >
              See All Player Stats
            </a>
          </div>
        </section>

        {/* TOP TEAMS */}
        <section className="py-20 bg-slate-800/40">
          <h2 className="text-4xl text-center mb-12 text-blue-400">
            Top <span className="text-slate-900">Teams</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topTeams.map((team, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-2xl mb-2 text-blue-400">{team.name}</h3>
                <p className="text-gray-300 mb-1">Wins: {team.wins}</p>
                <p className="text-gray-300 mb-1">Losses: {team.losses}</p>
                <p className="text-gray-300">Points: {team.points}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/soon"
              className="inline-block px-8 py-3 bg-blue-400 hover:bg-[#0194e4] rounded-xl text-white transition"
            >
              See All Teams Stats
            </a>
          </div>
        </section>

        {/* RECENT MATCHES */}
        <section className="py-20">
          <h2 className="text-4xl text-center mb-12">
            Recent <span className="text-slate-900">Matches</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentMatches.map((match, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-xl mb-2 text-blue-400">{match.match}</h3>
                <p className="text-gray-300 mb-1">{match.result}</p>
                <p className="text-gray-300">Score: {match.score}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-slate-800/40">
          <h2 className="text-4xl mb-6 text-blue-400">
            Track Your <span className="text-slate-900">Stats</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Sign up and get your team featured in our stats hub, leaderboard, and upcoming match pages.
          </p>
          <a
            href="/signups"
            className="inline-block px-8 py-3 bg-blue-400 hover:bg-[#0194e4] rounded-xl text-white transition"
          >
            Join Now
          </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default StatsCentral;
