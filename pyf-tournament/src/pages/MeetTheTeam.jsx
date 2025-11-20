import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

// Sample team data
const teamMembers = [
  {
    name: "Hugo Lapointe",
    role: "League Founder",
    img: "/images/team/maxence.jpg",
    discord: "https://discordapp.com/users/maxence",
    twitch: "https://www.twitch.tv/maxence",
  },
  {
    name: "Alex Smith",
    role: "Admin & Match Organizer",
    img: "/images/team/alex.jpg",
    discord: "https://discordapp.com/users/alex",
    twitch: "",
  },
  {
    name: "Sophie Chen",
    role: "Caster & Content Creator",
    img: "/images/team/sophie.jpg",
    discord: "https://discordapp.com/users/sophie",
    twitch: "https://www.twitch.tv/sophie",
  },
  {
    name: "Jordan Lee",
    role: "Community Manager",
    img: "/images/team/jordan.jpg",
    discord: "https://discordapp.com/users/jordan",
    twitch: "",
  },
];

const MeetTheTeam = () => {
  return (
    <BackgroundVideoLayout>
      <div className="text-white px-6 pt-20">

        {/* HERO */}
        <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/valorant_banner.jpg"
            alt="Meet the Team Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
              Meet the <span className="text-[#017bbd]">Team</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              The organizers, admins, casters, and community managers who make PYF Valorant League possible.
            </p>
          </motion.div>
        </section>

        {/* TEAM CARDS */}
        <section className="py-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-2xl font-semibold text-[#017bbd] mb-2">{member.name}</h3>
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
          <h2 className="text-4xl font-extrabold mb-6">
            Want to <span className="text-[#017bbd]">Join the Team?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
            We’re always looking for casters, admins, and community managers to help grow the league. Join our Discord to get involved!
          </p>
          <a
            href="https://discord.gg/YOURDISCORDLINK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#017bbd] hover:bg-[#0194e4] transition rounded-xl text-xl font-bold"
          >
            Join Discord
          </a>
        </section>

      </div>
    </BackgroundVideoLayout>
  );
};

export default MeetTheTeam;
