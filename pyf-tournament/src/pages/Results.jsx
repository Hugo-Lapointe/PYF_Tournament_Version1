import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

export default function Results() {
  const [results, setResults] = useState([]);
  const [teamsMap, setTeamsMap] = useState({});

  useEffect(() => {
    const fetchTeams = async () => {
      const snapshot = await getDocs(collection(db, "teams"));
      const map = {};
      snapshot.docs.forEach(docSnap => {
        const data = docSnap.data();
        map[docSnap.id] = {
          name: data.name,
          logoFilename: data.logoFilename || "",
        };
      });
      setTeamsMap(map);
    };

    const fetchResults = async () => {
      const q = query(collection(db, "matches"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
      data.sort((a, b) => b.date?.toDate() - a.date?.toDate());
      setResults(data);
    };

    fetchTeams();
    fetchResults();
  }, []);

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

      {/* Overlay to make content readable */}
      <div className="fixed inset-0 w-full h-full z-10"></div>

      {/* Main content */}
      <motion.div
        className="relative z-20 flex flex-col items-center px-6 py-16 gap-6 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-[#1E6091] drop-shadow-lg mb-12">
          Latest Results
        </h1>

        {results.length === 0 ? (
          <p className="text-white text-center text-lg">No results available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
            {results.map(result => {
              const team1 = teamsMap[result.team1] || { name: "Unknown", logoFilename: "" };
              const team2 = teamsMap[result.team2] || { name: "Unknown", logoFilename: "" };

              return (
                <div key={result.id} className="flex flex-col gap-2">
                  {/* Match Title */}
                  {result.title && (
                    <h2 className="text-2xl font-bold text-center drop-shadow-md text-slate-900">
                      {result.title}
                    </h2>
                  )}

                  {/* Match Card */}
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Team 1 */}
                    <div className="flex flex-col items-center gap-2 md:flex-1 text-center">
                      {team1.logoFilename ? (
                        <img
                          src={`/images/team-logos/${team1.logoFilename}`}
                          alt={team1.name}
                          className="w-24 h-24 object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-gray-600 flex items-center justify-center rounded-lg text-white">
                          No Logo
                        </div>
                      )}
                      <span className="text-lg font-medium text-slate-900">{team1.name}</span>
                    </div>

                    {/* Score + Map + Date */}
                    <div className="flex flex-col items-center md:flex-1 text-center text-[#1E6091]">
                      <span className="font-semibold text-2xl mb-1">
                        {result.score1} - {result.score2}
                      </span>
                      <span className="text-sm">{result.map}</span>
                      <span className="text-sm">{result.date?.toDate().toLocaleString()}</span>
                    </div>

                    {/* Team 2 */}
                    <div className="flex flex-col items-center gap-2 md:flex-1 text-center">
                      {team2.logoFilename ? (
                        <img
                          src={`/images/team-logos/${team2.logoFilename}`}
                          alt={team2.name}
                          className="w-24 h-24 object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-gray-600 flex items-center justify-center rounded-lg text-white">
                          No Logo
                        </div>
                      )}
                      <span className="text-lg font-medium text-slate-900">{team2.name}</span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}
