import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

const About = () => {
  return (
    <BackgroundVideoLayout>
        <div className="text-white">

        {/* HERO SECTION */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
            >
            <h1 className="text-[#1E6091] text-5xl md:text-6xl mb-6 tracking-wide">
                About <span className="text-slate-900">Our League</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#1E6091]">
                A competitive Valorant league built by players, for players — connecting collegiate teams,
                amateur squads, and rising talent across North America.
            </p>
            </motion.div>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
            <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />
        </div>

        {/* SECTION 1 — OUR STORY */}
        <section className="py-20 px-6 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl mb-6 text-[#1E6091]">
                Our <span className="text-slate-900">Story</span>
                </h2>
                <p className="text-[#1E6091] leading-relaxed mb-4">
                What started as a small community of friends hosting custom games has evolved into a
                full-scale competitive league. After running multiple successful seasons, we decided to
                build a bigger, more organized, and more professional league experience.
                </p>
                <p className="text-[#1E6091] leading-relaxed">
                Our mission is simple — create an inclusive, well-structured, and hype Valorant league
                where teams can compete, grow, and showcase their talent.
                </p>
            </motion.div>

            {/* Image */}
            <motion.img
                src="/images/about_story.png"
                alt="League Story"
                className="rounded-xl shadow-xl object-cover w-full h-[350px]"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            />
            </div>
        </section>

        {/* SECTION 2 — WHAT MAKES US DIFFERENT */}
        <section className="py-20 px-6 md:px-16 lg:px-32 bg-slate-800/40">
            <h2 className="text-4xl text-center mb-14 text-blue-400">
            Why Teams <span className="text-slate-900">Choose Us</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
            >
                <h3 className="text-2xl mb-3 text-blue-400">Competitive Integrity</h3>
                <p className="text-gray-300">
                Clear rules, fair play, and structured standings ensure every match matters.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
            >
                <h3 className="text-2xl mb-3 text-blue-400">Stats & Match Hub</h3>
                <p className="text-gray-300">
                Live updates, team pages, player stats, match results, and leaderboards.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
            >
                <h3 className="text-2xl mb-3 text-blue-400">Collegiate + Open</h3>
                <p className="text-gray-300">
                University teams, amateur squads, and community rosters all compete together.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
            >
                <h3 className="text-2xl mb-3 text-blue-400">Broadcast Ready</h3>
                <p className="text-gray-300">
                Live match streams, highlight reels, and social-media-ready content.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
            >
                <h3 className="text-2xl mb-3 text-blue-400">Professional Branding</h3>
                <p className="text-gray-300">
                A clean website, organized standings, and stylish graphics elevate your team.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-[1.03] transition"
            >
                <h3 className="text-2xl mb-3 text-blue-400">Community First</h3>
                <p className="text-gray-300">
                We listen, adapt, and improve — this league is built for the players.
                </p>
            </motion.div>

            </div>
        </section>

        {/* SECTION 3 — TEAM PHOTO / VISUAL */}
        <section className="py-20 px-6 md:px-16 lg:px-32">
            <div className="text-center mb-10">
            <h2 className="text-4xl text-[#1E6091]">
                Behind the <span className="text-slate-900">League</span>
            </h2>
            <p className="text-[#1E6091] mt-3 max-w-2xl mx-auto">
                Meet the organizers, admins, casters, and staff who keep everything running smoothly.
            </p>
            </div>

            <motion.img
            src="/images/about_story.png"
            alt="League Staff"
            className="rounded-2xl shadow-2xl w-full max-h-[450px] object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            />
        </section>

        {/* CTA SECTION */}
        <section className="py-24 text-center bg-slate-800/40">
            <h2 className="text-4xl font-extrabold mb-6 text-blue-400">
            Ready to Join the <span className="text-slate-900">Fight?</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            Whether you're a collegiate team, an organized roster, or a squad of friends —
            there's a place for you in our league.
            </p>

            <a
            href="/signups"
            className="px-10 py-4 bg-slate-800 hover:bg-[#016aa3] transition rounded-xl text-xl font-bold"
            >
            Sign Up Now
            </a>
        </section>

        </div>
    </BackgroundVideoLayout>
  );
};

export default About;
