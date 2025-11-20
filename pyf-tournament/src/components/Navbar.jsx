import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsub();
  }, []);

  // Close menu on route change
  useEffect(() => closeMenu(), [location]);

  // ===== DROPDOWN MENU STRUCTURE =====
  const NAV_GROUPS = [
    {
      name: "About",
      links: [
        { label: "About", to: "/about" },
        { label: "Meet the Team", to: "/meettheteam" },
        { label: "Rules", to: "/rules" },
        { label: "FAQ", to: "/faq" },
        { label: "Contact / Discord", to: "/contact" },
      ],
    },
    {
      name: "League",
      links: [
        { label: "League Overview", to: "/overview" },
        { label: "Roadmap", to: "/roadmap" },
        { label: "Standings", to: "/standings" },
        { label: "Live Matches", to: "/live" },
        { label: "Stats Central", to: "/stats" },
      ],
    },
    {
      name: "Sign-Ups",
      links: [{ label: "Team Registration", to: "/signups" }],
    },
  ];

  // ===== DESKTOP DROPDOWN COMPONENT =====
  const DesktopDropdown = ({ group }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        className="relative group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="hover:text-[#017bbd] transition-colors">
          {group.name}
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-30"
            >
              {group.links.map((item, i) => (
                <Link key={i} to={item.to} onClick={() => setOpen(false)}>
                  <li className="px-4 py-3 hover:bg-slate-800 cursor-pointer">
                    {item.label}
                  </li>
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-[60] bg-slate-900 shadow-lg">
      <div className="flex justify-between items-center text-white px-6 sm:px-12 h-16">
        
        {/* ==== LOGO ==== */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/Logo_full_transp.png"
            alt="PYF Logo"
            className="h-16 w-auto hover:scale-105 transition-transform"
          />
        </Link>

        {/* ==== DESKTOP MENU ==== */}
        <div className="hidden lg:flex items-center gap-10 text-[18px]">

          <Link to="/" className="hover:text-[#017bbd] transition-colors">
            Home
          </Link>

          {NAV_GROUPS.map((group, index) => (
            <DesktopDropdown key={index} group={group} />
          ))}
        </div>

        {/* ==== MOBILE MENU BUTTON ==== */}
        <button className="block lg:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <CiMenuFries size={28} />}
        </button>
      </div>

      {/* ==== MOBILE MENU ==== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-900 border-t border-slate-700"
          >
            <ul className="p-6 space-y-6 text-lg">

              <Link to="/" onClick={closeMenu}>
                <li className="py-2 hover:text-[#017bbd]">Home</li>
              </Link>

              {/* MOBILE DROPDOWN GROUPS */}
              {NAV_GROUPS.map((group, i) => (
                <li key={i} className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-[#017bbd] mb-2">{group.name}</p>

                  {group.links.map((item, idx) => (
                    <Link key={idx} to={item.to} onClick={closeMenu}>
                      <p className="pl-4 py-2 hover:text-blue-400">{item.label}</p>
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
