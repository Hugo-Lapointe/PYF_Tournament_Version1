import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";


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
              Rules built to create a fair, competitive, and respectful league environment.            
            </p>
          </motion.div>
        </section>

        <div className="w-full max-w-3xl space-y-8">

          <Section title="League Overview">
            <p className="text-gray-300 mb-4">
              The PYF Cup is a competitive Valorant league designed to provide players with a
              structured, professional-style league experience.
            </p>

            <List
              items={[
                "The league prioritizes competitive integrity, fairness, respect, and smooth operations.",
                "The PYF Cup is operated and administered by PYF staff.",
                "PYF staff are responsible for scheduling, enforcement, and competitive oversight.",
              ]}
            />
          </Section>


          <Section title="Eligibility">
            <List
              items={[
                "Players must compete on their primary Valorant account.",
                "Smurfing and alternate accounts are not permitted.",
                "Players must accurately report their Riot ID and current rank.",
                "Eligible ranks range from Iron 1 to Ascendant 3.",
                "Ascendant 3 is the maximum eligible rank.",
                "Players who reach Immortal during the season may continue competing.",
                "Rank eligibility is evaluated at roster lock.",
                "PYF staff may allow exceptions when deemed necessary.",
              ]}
            />
          </Section>


          <Section title="Player Behaviour & Conduct">
            <List
              items={[
                "All participants must uphold respect, fairness, and sportsmanship.",
                "Unsportsmanlike conduct, excessive toxicity, or personal attacks are not tolerated.",
                "Light competitive banter is allowed when respectful.",
                "Discriminatory, threatening, or humiliating behaviour is prohibited.",
              ]}
            />

            <div className="mt-8 bg-red-900/20 border-l-4 border-red-500 rounded-lg p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaExclamationTriangle className="text-red-400 text-xl" />
                <h3 className="text-xl font-semibold text-red-400">
                  Zero-Tolerance Behaviour
                </h3>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Harassment or targeted abuse</li>
                <li>Discrimination or slurs of any kind</li>
                <li>Threats, intimidation, or hate speech</li>
                <li>Sexual comments or suggestive behaviour</li>
                <li>Encouraging harassment or coordinated abuse</li>
              </ul>
            </div>


            <p className="text-gray-300 mt-6">
              Players must bring disputes privately to PYF staff and must not publicly argue
              or undermine league operations.
            </p>
          </Section>


          <Section title="Match Format">
            <p className="text-gray-300 mb-2 font-semibold">Regular Season</p>

            <List
              items={[
                "Matches are Best of 1.",
                "Teams play one scheduled match per week.",
                "Standard competitive settings and tournament mode are used.",
                "Failure to field a full roster may result in a forfeit.",
              ]}
            />

            <p className="text-gray-300 mt-6 mb-2 font-semibold">Playoffs</p>

            <List
              items={[
                "Playoffs determine the PYF Cup Champion.",
                "Format, seeding, and match types are finalized at roster lock.",
                "Playoff matches may be Best of 1 or Best of 3.",
              ]}
            />
          </Section>


          <Section title="Match Procedures">
            <List
              items={[
                "Players must be ready 10 minutes before match start.",
                "Matches are played in Valorant Custom Games (Tournament Mode).",
                "Only technical pauses are allowed.",
                "One tactical timeout per half per team.",
                "All-chat and party chat are prohibited.",
                "Only team voice or approved Discord voice may be used.",
                "No substitutes allowed once the match starts.",
                "Disconnects do not warrant restarts unless approved by PYF staff.",
              ]}
            />
          </Section>


          <Section title="Standings & Results">
            <List
              items={[
                "Regulation Win: 3 points",
                "Overtime Win: 2 points",
                "Overtime Loss: 1 point",
                "Regulation Loss: 0 points",
              ]}
            />

            <p className="text-gray-300 mt-6 mb-2 font-semibold">Tie-Breakers</p>

            <List
              items={[
                "Head-to-head record",
                "Regulation wins",
                "Round differential",
                "Overtime wins",
                "Map differential",
              ]}
            />
          </Section>

          <Section title="Penalties & Enforcement">
            <List
              items={[
                "PYF staff enforce all rules at their discretion.",
                "Ignorance of the rules is not an acceptable defense.",
                "Penalties may apply to players, captains, coaches, or teams.",
              ]}
            />

            <p className="text-gray-300 mt-6 mb-2 font-semibold">Possible Penalties</p>

            <List
              items={[
                "Warnings or suspensions",
                "Point deductions or match forfeits",
                "Player or team removal",
                "Permanent bans for severe violations",
              ]}
            />

            <p className="text-gray-300 mt-6">
              Appeals may be submitted through official PYF channels.  
              All decisions by PYF staff are final.
            </p>
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
