import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc, getDoc, updateDoc, addDoc } from "firebase/firestore";

export default function AdminResults() {
  const [results, setResults] = useState([]);
  const [teams, setTeams] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    team1: "",
    team2: "",
    score1: "",
    score2: "",
    map: "",
    date: "",
  });

  // Fetch all teams for dropdown
  const fetchTeams = async () => {
    const snapshot = await getDocs(collection(db, "teams"));
    const teamsList = snapshot.docs.map(docSnap => ({ id: docSnap.id, name: docSnap.data().name }));
    setTeams(teamsList);
  };

  // Fetch results
  const fetchResults = async () => {
    const snapshot = await getDocs(collection(db, "matches"));
    const resultsData = await Promise.all(
      snapshot.docs.map(async (docSnap) => {
        const data = docSnap.data();
        let team1Name = data.team1;
        let team2Name = data.team2;

        if (data.team1) {
          const team1Snap = await getDoc(doc(db, "teams", data.team1));
          if (team1Snap.exists()) team1Name = team1Snap.data().name;
        }

        if (data.team2) {
          const team2Snap = await getDoc(doc(db, "teams", data.team2));
          if (team2Snap.exists()) team2Name = team2Snap.data().name;
        }

        return {
          id: docSnap.id,
          ...data,
          team1Name,
          team2Name,
        };
      })
    );

    resultsData.sort((a, b) => b.date?.toDate() - a.date?.toDate());
    setResults(resultsData);
  };

  useEffect(() => {
    fetchTeams();
    fetchResults();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this match?")) {
      await deleteDoc(doc(db, "matches", id));
      fetchResults();
    }
  };

  const handleEdit = (result) => {
    setEditingId(result.id);
    setFormData({
      title: result.title || "",
      team1: result.team1,
      team2: result.team2,
      score1: result.score1,
      score2: result.score2,
      map: result.map,
      date: new Date(result.date?.seconds * 1000).toISOString().slice(0,16) || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateDoc(doc(db, "matches", editingId), {
        ...formData,
        score1: Number(formData.score1),
        score2: Number(formData.score2),
        date: new Date(formData.date),
      });
      setEditingId(null);
    } else {
      await addDoc(collection(db, "matches"), {
        ...formData,
        score1: Number(formData.score1),
        score2: Number(formData.score2),
        date: new Date(formData.date),
      });
    }

    setFormData({
      title: "",
      team1: "",
      team2: "",
      score1: "",
      score2: "",
      map: "",
      date: "",
    });
    fetchResults();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Manage Match Results</h1>

      {/* Add / Edit form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2">{editingId ? "Edit Match" : "Add New Match"}</h2>

        <input
          type="text"
          placeholder="Match Title"
          className="w-full p-2 rounded bg-slate-700"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <div className="flex gap-4">
          <select
            className="flex-1 p-2 rounded bg-slate-700"
            value={formData.team1}
            onChange={(e) => setFormData({ ...formData, team1: e.target.value })}
            required
          >
            <option value="">Select Team 1</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>

          <select
            className="flex-1 p-2 rounded bg-slate-700"
            value={formData.team2}
            onChange={(e) => setFormData({ ...formData, team2: e.target.value })}
            required
          >
            <option value="">Select Team 2</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Score Team 1"
            className="flex-1 p-2 rounded bg-slate-700"
            value={formData.score1}
            onChange={(e) => setFormData({...formData, score1: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Score Team 2"
            className="flex-1 p-2 rounded bg-slate-700"
            value={formData.score2}
            onChange={(e) => setFormData({...formData, score2: e.target.value})}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Map"
          className="w-full p-2 rounded bg-slate-700"
          value={formData.map}
          onChange={(e) => setFormData({...formData, map: e.target.value})}
        />

        <input
          type="datetime-local"
          className="w-full p-2 rounded bg-slate-700"
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
          required
        />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded text-white font-semibold">
          {editingId ? "Update Match" : "Add Match"}
        </button>
      </form>

      {/* Results list */}
      <div className="flex flex-col gap-4">
        {results.map(result => (
          <div key={result.id} className="flex justify-between items-center bg-slate-800 p-4 rounded-lg text-white">
            <div>
              <strong>{result.title}</strong> | {result.team1Name} vs {result.team2Name} | {result.score1}-{result.score2} | {result.map} | {new Date(result.date?.seconds * 1000).toLocaleString()}
            </div>
            <div className="flex gap-2">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
                onClick={() => handleEdit(result)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                onClick={() => handleDelete(result.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
