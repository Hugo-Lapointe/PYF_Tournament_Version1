import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

const standingsData = [
  { rank: 1, team: "Coming Soon", wins: 0, losses: 0, points: 0 },
  { rank: 2, team: "Coming Soon", wins: 0, losses: 0, points: 0 },
  { rank: 3, team: "Coming Soon", wins: 0, losses: 0, points: 0 },
  { rank: 4, team: "Coming Soon", wins: 0, losses: 0, points: 0 },
  { rank: 5, team: "Coming Soon", wins: 0, losses: 0, points: 0 },
  { rank: 6, team: "Coming Soon", wins: 0, losses: 0, points: 0 },
];

const getBadgeColor = (rank) => {
  switch (rank) {
    case 1:
      return "bg-yellow-400 text-black"; // Gold
    case 2:
      return "bg-slate-300 text-black"; // Silver
    case 3:
      return "bg-orange-500 text-white"; // Bronze
    default:
      return "bg-slate-800/60 text-gray-300"; // Normal
  }
};

const Standings = () => {
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
              League <span className="text-slate-900">Standings</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Check out the top teams and follow your favorite squads this season.
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
            <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />
        </div>

        {/* TABLE */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto overflow-x-auto rounded-2xl shadow-xl bg-slate-800/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="px-6 py-4 text-left text-lg text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-lg text-gray-300">Team</th>
                  <th className="px-6 py-4 text-center text-lg text-gray-300">Wins</th>
                  <th className="px-6 py-4 text-center text-lg text-gray-300">Losses</th>
                  <th className="px-6 py-4 text-center text-lg text-gray-300">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {standingsData.map((team) => (
                  <motion.tr
                    key={team.rank}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 + team.rank * 0.1 }}
                    className="hover:bg-slate-700/40 transition"
                  >
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full ${getBadgeColor(team.rank)}`}>
                        {team.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-blue-400">{team.team}</td>
                    <td className="px-6 py-4 text-center text-blue-400">{team.wins}</td>
                    <td className="px-6 py-4 text-center text-blue-400">{team.losses}</td>
                    <td className="px-6 py-4 text-center text-blue-400">{team.points}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-slate-800/40">
          <h2 className="text-4xl mb-6 text-blue-400">
            Want to See Your Team <span className="text-slate-900">Here?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Sign up and compete in the next season!
          </p>
          <a
            href="/signups"
            className="inline-block px-8 py-3 bg-blue-400 hover:bg-[#0194e4] rounded-xl text-white transition"
          >
            SIGN-UP!
          </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default Standings;
