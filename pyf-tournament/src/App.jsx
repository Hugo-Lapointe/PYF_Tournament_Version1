import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import Apply from "./pages/Apply";
import Teams from "./pages/Teams";
import PlayerDetails from "./pages/PlayerDetails";
import Standings from "./pages/Standings";
import Results from "./pages/Results";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Overview from "./pages/Overview";
import Roadmap from "./pages/Roadmap";
import Stats from "./pages/Stats";
import Signups from "./pages/SignUps";
import Live from "./pages/Live";
import MeetTheTeam from "./pages/MeetTheTeam";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Soon from "./pages/Soon";
import NotFound from "./pages/NotFound";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPlayers from "./pages/admin/AdminPlayers";
import AdminTeams from "./pages/admin/AdminTeams";
import AdminTournaments from "./pages/admin/AdminTournaments";
import AdminMatches from "./pages/admin/AdminMatches";
import AdminResults from "./pages/admin/AdminResults";

import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/apply" element={<Apply />} />
        {/* <Route path="/teams" element={<Teams />} /> */}
        <Route path="/players/:id" element={<PlayerDetails />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/results" element={<Results />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<About />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/signups" element={<Signups />} />
        <Route path="/live" element={<Live />} />
        <Route path="/meettheteam" element={<MeetTheTeam />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/soon" element={<Soon />} />
        <Route path="*" element={<NotFound />} />

        {/* Admin login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminDashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/players"
          element={
            <ProtectedRoutes>
              <AdminPlayers />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/teams"
          element={
            <ProtectedRoutes>
              <AdminTeams />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/tournaments"
          element={
            <ProtectedRoutes>
              <AdminTournaments />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/matches"
          element={
            <ProtectedRoutes>
              <AdminMatches />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/results"
          element={
            <ProtectedRoutes>
              <AdminResults />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
