import { useState } from "react";
import { NavLink } from "react-router";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "transition hover:text-light-yellow";
  const active = "text-light-yellow font-semibold";

  return (
    <nav className="bg-glass-blue backdrop-blur-lg border-b border-glass-blue shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          aria-label="Home"
          className="flex items-center gap-2 text-lg font-bold text-accent-green"
        >
          <IoCodeSlashOutline className="text-light-yellow text-4xl" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex item-center gap-6">
          <div className="space-x-4 text-sm text-pale-yellow">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/projects"
            >
              PROJECTS
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
        {/* Nav Icons */}
        <div className="md:hidden flex items-center-gap-4">
          <button
            title="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pale-yellow text-xl cursor-pointer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className=" md:hidden bg-glass-blue border-t border-(--border-glass) px-6 py-4 text-right flex flex-col gap-4 pr-8">
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/projects"
            onClick={() => setMenuOpen(false)}
          >
            PROJECTS
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
