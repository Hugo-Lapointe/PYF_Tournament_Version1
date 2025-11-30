import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

// Sample team data
const teamMembers = [
  {
    name: "TWYL",
    role: "League Founder",
    img: "/images/phoques/TWYL.png",
    discord: "https://discordapp.com/users/maxence",
    twitch: "https://www.twitch.tv/maxence",
  },
  {
    name: "Rapid",
    role: "Admin & Match Organizer",
    img: "/images/phoques/Rapid.png",
    discord: "https://discordapp.com/users/alex",
    twitch: "",
  },
  {
    name: "Lupipi",
    role: "Caster & Content Creator",
    img: "/images/phoques/Lupipi.png",
    discord: "https://discordapp.com/users/sophie",
    twitch: "https://www.twitch.tv/sophie",
  },
  {
    name: "MiniPeak",
    role: "Community Manager",
    img: "/images/phoques/MiniPeak.png",
    discord: "https://discordapp.com/users/jordan",
    twitch: "",
  },
];

const MeetTheTeam = () => {
  return (
    <BackgroundVideoLayout>
      <div className="text-[#1E6091]">

        {/* HERO */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl mb-4 tracking-wide">
              Meet the <span className="text-slate-900">Team</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#1E6091]">
              The organizers, admins, casters, and community managers who make PYF Valorant League possible.
            </p>
          </motion.div>
        </section>

        {/* TEAM CARDS */}
        <section className="pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + i * 0.1 }}
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl text-blue-400 mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  {member.discord && (
                    <a
                      href={member.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#7289da] transition"
                      title="Discord"
                    >
                      <i className="fa-brands fa-discord text-2xl"></i>
                    </a>
                  )}
                  {member.twitch && (
                    <a
                      href={member.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#9146FF] transition"
                      title="Twitch"
                    >
                      <i className="fa-brands fa-twitch text-2xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-slate-800/40">
          <h2 className="text-4xl text-blue-400 mb-6">
            Want to <span className="text-slate-900">Join the Team?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            We’re always looking for casters, admins, and community managers to help grow the league. Join our Discord to get involved!
          </p>
          <a
            href="https://discord.gg/YOURDISCORDLINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#7289da] hover:bg-[#5b6eae] rounded-xl text-white transition"
          >
            Join Discord
          </a>
        </section>
      </div>
    </BackgroundVideoLayout>
  );
};

export default MeetTheTeam;
