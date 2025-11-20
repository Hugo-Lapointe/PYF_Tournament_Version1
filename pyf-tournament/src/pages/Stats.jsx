import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

// Sample data
const topPlayers = [
  { name: "AcePlayer", team: "Phoenix Squad", kills: 250, deaths: 80, kd: 3.13 },
  { name: "ShadowNinja", team: "Shadow Strike", kills: 230, deaths: 90, kd: 2.56 },
  { name: "ValorQueen", team: "Valor Vortex", kills: 210, deaths: 95, kd: 2.21 },
];

const topTeams = [
  { name: "Phoenix Squad", wins: 10, losses: 2, points: 30 },
  { name: "Shadow Strike", wins: 9, losses: 3, points: 27 },
  { name: "Valor Vortex", wins: 8, losses: 4, points: 24 },
];

const recentMatches = [
  { match: "Phoenix Squad vs Shadow Strike", result: "Phoenix Squad Win", score: "13-8" },
  { match: "Valor Vortex vs Rapid Fire", result: "Valor Vortex Win", score: "13-11" },
  { match: "Night Owls vs Crimson Tide", result: "Night Owls Win", score: "13-5" },
];

const StatsCentral = () => {
  return (
    <BackgroundVideoLayout>
      <div className="text-white px-6 pt-20">

        {/* HERO */}
        <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/valorant_banner.jpg"
            alt="Stats Central Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
              Stats <span className="text-[#017bbd]">Central</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              Player stats, team stats, and recent matches — all in one hub.
            </p>
          </motion.div>
        </section>

        {/* TOP PLAYERS */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top <span className="text-[#017bbd]">Players</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topPlayers.map((player, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#017bbd]">{player.name}</h3>
                <p className="text-gray-300 mb-2">Team: {player.team}</p>
                <p className="text-gray-300 mb-1">Kills: {player.kills}</p>
                <p className="text-gray-300 mb-1">Deaths: {player.deaths}</p>
                <p className="text-gray-300 font-semibold">K/D Ratio: {player.kd}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/players"
              className="px-8 py-3 bg-[#017bbd] hover:bg-[#0194e4] transition rounded-xl text-lg font-bold"
            >
              See All Player Stats
            </a>
          </div>
        </section>

        {/* TOP TEAMS */}
        <section className="py-20 bg-slate-800/40">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top <span className="text-[#017bbd]">Teams</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topTeams.map((team, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#017bbd]">{team.name}</h3>
                <p className="text-gray-300 mb-1">Wins: {team.wins}</p>
                <p className="text-gray-300 mb-1">Losses: {team.losses}</p>
                <p className="text-gray-300 font-semibold">Points: {team.points}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/teams"
              className="px-8 py-3 bg-[#017bbd] hover:bg-[#0194e4] transition rounded-xl text-lg font-bold"
            >
              See All Teams Stats
            </a>
          </div>
        </section>

        {/* RECENT MATCHES */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent <span className="text-[#017bbd]">Matches</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recentMatches.map((match, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#017bbd]">{match.match}</h3>
                <p className="text-gray-300 mb-1">{match.result}</p>
                <p className="text-gray-300 font-semibold">Score: {match.score}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-slate-800/40">
          <h2 className="text-4xl font-extrabold mb-6">
            Track Your <span className="text-[#017bbd]">Stats</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Sign up and get your team featured in our stats hub, leaderboard, and upcoming match pages.
          </p>
          <a
            href="/signups"
            className="px-10 py-4 bg-[#017bbd] hover:bg-[#0194e4] transition rounded-xl text-xl font-bold"
          >
            Join Now
          </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default StatsCentral;
