import { NavLink } from "react-router";

export default function Navbar() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md text-base font-semibold transition duration-300 ${
      isActive
        ? "bg-white text-blue-900 shadow"
        : "text-white hover:bg-blue-700"
    }`;

  return (
    <nav className="bg-blue-900 shadow-md w-full">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div>
          <NavLink to="/" className={navLinkClasses}>
            🌍 Home
          </NavLink>
        </div>

        <div className="flex gap-10">
          <NavLink to="/explore" className={navLinkClasses}>
            Explore
          </NavLink>
          <NavLink to="/signup" className={navLinkClasses}>
            Sign Up
          </NavLink>
          <NavLink to="/login" className={navLinkClasses}>
            Login ✈️
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
