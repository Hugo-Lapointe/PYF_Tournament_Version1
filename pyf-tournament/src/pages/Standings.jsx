import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

const standingsData = [
  { rank: 1, team: "Phoenix Squad", wins: 10, losses: 2, points: 30 },
  { rank: 2, team: "Shadow Strike", wins: 9, losses: 3, points: 27 },
  { rank: 3, team: "Valor Vortex", wins: 8, losses: 4, points: 24 },
  { rank: 4, team: "Rapid Fire", wins: 7, losses: 5, points: 21 },
  { rank: 5, team: "Night Owls", wins: 6, losses: 6, points: 18 },
  { rank: 6, team: "Crimson Tide", wins: 5, losses: 7, points: 15 },
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
      <div className="text-white px-6 pt-20">

        {/* HERO */}
        <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/valorant_banner.jpg"
            alt="Standings Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
              League <span className="text-[#017bbd]">Standings</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              Check out the top teams and follow your favorite squads this season.
            </p>
          </motion.div>
        </section>

        {/* TABLE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto overflow-x-auto rounded-2xl shadow-xl bg-slate-800/60 backdrop-blur-md">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-300">Team</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-gray-300">Wins</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-gray-300">Losses</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-gray-300">Points</th>
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
                      <span className={`px-3 py-1 rounded-full font-semibold ${getBadgeColor(team.rank)}`}>
                        {team.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">{team.team}</td>
                    <td className="px-6 py-4 text-center">{team.wins}</td>
                    <td className="px-6 py-4 text-center">{team.losses}</td>
                    <td className="px-6 py-4 text-center">{team.points}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-slate-800/40">
          <h2 className="text-4xl font-extrabold mb-6">
            Want to See Your Team <span className="text-[#017bbd]">Here?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Sign up and compete in the next season to climb the leaderboard and earn badges!
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

export default Standings;
