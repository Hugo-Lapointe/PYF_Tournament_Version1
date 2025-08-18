import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const playerRef = doc(db, "players", id);
      const playerSnap = await getDoc(playerRef);

      if (playerSnap.exists()) {
        const playerData = { id: playerSnap.id, ...playerSnap.data() };
        setPlayer(playerData);

        if (playerData.currentTeam) {
          const teamRef = doc(db, "teams", playerData.currentTeam);
          const teamSnap = await getDoc(teamRef);
          if (teamSnap.exists()) {
            const teamData = { id: teamSnap.id, ...teamSnap.data() };
            setTeam(teamData);
          }
        }
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) {
    return (
      <motion.div
        className="p-6 text-center text-white relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading player details...
      </motion.div>
    );
  }

  const isCaptain = team && String(team.captainId) === String(player.id);

  return (
    <div className="relative min-h-screen">
      {/* Video background */}
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

      {/* Main content */}
      <motion.div
        className="relative p-8 py-16 max-w-3xl mx-auto text-white z-20 space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top area: Back button + Title */}
        <div className="relative mb-8 px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-[#1E6091] drop-shadow-lg">
            Player Details
          </h1>

          <div className="mt-4 sm:hidden">
            <Link
              to="/teams"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              Back to Teams
            </Link>
          </div>

          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden sm:block">
            <Link
              to="/teams"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium z-30"
            >
              Back to Teams
            </Link>
          </div>
        </div>

        {/* Player Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Player Image */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-700 flex-shrink-0 border-4 border-gray-600">
              {player.imageFilename ? (
                <img
                  src={`/images/phoques/${player.imageFilename}`}
                  alt={player.displayName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>

            {/* Player Info */}
            <div className="flex-1 space-y-3 text-left">
              <h2 className="text-4xl font-bold flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-3 text-slate-900 text-center sm:text-left">
                {player.displayName}
                {isCaptain && (
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold text-[#1E6091]">
                    Captain
                  </span>
                )}
              </h2>

              <p className="text-lg text-[#1E6091]">
                <strong>Current Team:</strong>{" "}
                <span className="text-slate-900">{team ? team.name : "N/A"}</span>
              </p>
              <p className="text-lg text-[#1E6091]">
                <strong>In Game Name:</strong>{" "}
                <span className="text-slate-900">{player.gameName || "N/A"}</span>
              </p>
              <p className="text-lg text-[#1E6091]">
                <strong>Current Rank:</strong>{" "}
                <span className="text-slate-900">{player.valorantCurrentRank || "N/A"}</span>
              </p>
              <p className="text-lg text-[#1E6091]">
                <strong>Peak Rank:</strong>{" "}
                <span className="text-slate-900">{player.valorantPeakRank || "N/A"}</span>
              </p>
              {player.age && (
                <p className="text-lg text-[#1E6091]">
                  <strong>Age:</strong> <span className="text-slate-900">{player.age}</span>
                </p>
              )}
            </div>
          </div>

          {/* Player Stats - full width under image/info */}
          <div className="w-full mt-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center text-[#1E6091]">
              Stats
            </h3>
            <div className="flex justify-between bg-white/20 p-4 rounded-xl text-center text-lg text-slate-900">
              <div className="flex-1">
                <p className="font-semibold text-[#1E6091]">KDA</p>
                <p>{player.kda || "N/A"}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#1E6091]">HS%</p>
                <p>{player.hsPercent || "N/A"}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#1E6091]">Knife Kills</p>
                <p>{player.knifeKills || "N/A"}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#1E6091]">ACS</p>
                <p>{player.acs || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
