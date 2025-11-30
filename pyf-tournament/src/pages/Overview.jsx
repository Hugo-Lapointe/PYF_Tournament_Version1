import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

const LeagueOverview = () => {
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
              League <span className="text-slate-900">Overview</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Everything you need to know — format, rules, divisions, playoffs, and match flow.
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
            <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />
        </div>

        {/* DIVISIONS SECTION */}
        <section className="pb-25 px-6 md:px-16 lg:px-32">
          <h2 className="text-4xl text-center mb-14">
            League <span className="text-slate-900">Divisions</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Collegiate Division", desc: "University & college teams competing in structured seasonal play." },
              { title: "Open Division", desc: "Amateur squads, community teams, and mixed-skill rosters." },
              { title: "Premier Division", desc: "High-performance teams competing at a semi-pro level." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-2xl mb-3 text-blue-400">
                  {card.title}
                </h3>
                <p className="text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MATCH STRUCTURE */}
        <section className="py-20 px-6 md:px-16 lg:px-32 bg-slate-800/40">
          <h2 className="text-4xl text-center mb-12 text-blue-400">
            Match <span className="text-slate-900">Format</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-10 text-gray-300 text-lg">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl mb-3 text-blue-400">Regular Season</h3>
              <p>Teams play weekly scheduled matches with standings updated live.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl mb-3 text-blue-400">Playoff Bracket</h3>
              <p>Top teams qualify for a seeded elimination bracket leading to finals weekend.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl mb-3 text-blue-400">Broadcasted Games</h3>
              <p>Featured matches are casted live with highlights and match analysis.</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <h2 className="text-4xl mb-6">
            Join the <span className="text-slate-900">Competition</span>
          </h2>
          <p className="mb-8 text-lg max-w-xl mx-auto">
            Whether you're a collegiate roster or a community squad — there's a division for you.
          </p>

          <a
              href="/signups"
              className="inline-block px-8 py-3 bg-slate-900 hover:bg-[#0194e4] rounded-xl text-white transition"
            >
              Sign Up
            </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default LeagueOverview;
