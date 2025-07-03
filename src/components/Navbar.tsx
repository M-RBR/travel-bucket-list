import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `
    block w-full sm:w-auto text-center px-4 py-2 rounded-md text-base font-semibold transition duration-300
    outline outline-1 outline-blue-300 sm:outline-2 sm:outline-blue-400
    ${
      isActive
        ? "bg-white text-blue-900 shadow-sm sm:shadow"
        : "text-white hover:bg-blue-700"
    }
  `;

  return (
    <nav className="bg-gradient-to-b from-blue-950 to-blue-900 text-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto py-4 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        <div className="text-center sm:text-left">
          <NavLink to="/" className={navLinkClasses}>
            🌍 Home ✈️
          </NavLink>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <NavLink to="/explore" className={navLinkClasses}>
            Explore
          </NavLink>
          <NavLink to="/signup" className={navLinkClasses}>
            Sign Up
          </NavLink>
          {!user && (
            <NavLink to="/login" className={navLinkClasses}>
              Login
            </NavLink>
          )}
          {user && (
            <button
              onClick={logout}
              className={navLinkClasses({ isActive: false })}
            >
              Logout
            </button>
          )}
          {user && (
            <NavLink to="/bucketlist" className={navLinkClasses}>
              My Bucket List
            </NavLink>
          )}
          {user && (
            <NavLink to="/chatrooms" className={navLinkClasses}>
              Chatrooms
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
