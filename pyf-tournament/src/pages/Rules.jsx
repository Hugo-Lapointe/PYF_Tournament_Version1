import React from "react";
import { motion } from "framer-motion";

export default function Rules() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative min-h-screen"
    >

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

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pb-12 text-[#1E6091]">
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl mb-4 tracking-wide">
              Tournament <span className="text-slate-900">Rules</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              All official guidelines, procedures, and competitive regulations for the PYF Valorant League.
            </p>
          </motion.div>
        </section>

        <div className="w-full max-w-3xl space-y-8">

          <Section title="General Conduct">
            <List
              items={[
                "Be cool. Respect players and staff.",
                "Trash talk is fine, but keep it fun — no racism, harassment, or hate speech.",
                "No cheating, exploiting, or using anything sketchy. Play fair or get DQ’d.",
              ]}
            />
          </Section>

          <Section title="Participation Rules">
            <List
              items={[
                "Show up on time for your matches — late = forfeit.",
                "Follow all instructions from staff and referees.",
                "All tournament details (format, points, map bans) are in #tournament-info.",
              ]}
            />
          </Section>

          <Section title="Penalties">
            <List
              items={[
                "Late to match: Forfeit the round or match.",
                "Toxic behavior or harassment: Warning → DQ if it keeps up.",
                "Cheating or exploiting: Immediate DQ and removal from the tournament.",
              ]}
            />
          </Section>

          <Section title="Tournament Overview">
            <p className="text-gray-300 mb-4">
              Format: Round Robin → Single-Elimination Playoffs
            </p>

            <p className="text-gray-300 mb-2">Point System:</p>
            <List
              items={[
                "Win (any kind) = 2 points",
                "Loss in Overtime = 1 point",
                "Loss in Regulation = 0 points",
              ]}
            />

            <p className="text-gray-300 mb-2 mt-6">Tiebreakers (in order):</p>
            <List
              items={[
                "Round Differential (Rounds Won – Rounds Lost)",
                "Rounds Won (Most rounds won overall)",
                "Rounds Lost (Fewest rounds lost overall)",
                "Tiebreaker Match (if still tied)",
              ]}
            />

            <p className="text-gray-300 mt-6">
              Advancement to Playoffs:
              <br />
              1st Place vs 4th Place
              <br />
              2nd Place vs 3rd Place
              <br />
              Winners face off in the Grand Final: Single-elimination match to determine the champion.
            </p>
          </Section>

          <Section title="Map Pool & Selection">
            <p className="mb-4 text-gray-300">All current Valorant maps are in play.</p>

            <p className="mb-2 text-gray-300">Map Selection Process:</p>
            <List
              items={[
                "Teams alternate bans until 1 map remains.",
                "The team that didn’t make the final ban picks starting side.",
                "Map bans occur between captains and the spectator in the match lobby.",
              ]}
            />
          </Section>

          <Section title="Match Procedures">
            <p className="text-gray-300 mb-2">Check-In:</p>
            <List
              items={[
                "Captains must check in 15 min before match.",
                "Failure to check in may result in forfeit.",
              ]}
            />

            <p className="text-gray-300 mb-2 mt-6">Lobby Setup:</p>
            <List
              items={[
                "A custom lobby will be created for each match.",
                "Captains are invited first, then they invite teammates.",
                "Teams must be ready to start within 10 minutes.",
              ]}
            />

            <p className="text-gray-300 mb-2 mt-6">Disconnects / Tech Issues:</p>
            <List
              items={[
                "If a player disconnects, the round must play out.",
                "Teams may request a pause (max 10 minutes).",
                "If issues can’t be resolved, the match is forfeited.",
              ]}
            />
          </Section>

        </div>
      </div>

    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <section className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
      <h2 className="text-2xl mb-4 text-blue-400">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
