import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            🌍 Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Explore
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Login ✈️
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
