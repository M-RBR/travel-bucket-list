import { useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `
    w-full sm:w-auto max-w-[250px] sm:max-w-none text-center px-4 py-2 rounded-md text-base font-semibold transition duration-300
    outline outline-1 outline-blue-300 sm:outline-2 sm:outline-blue-400
    ${
      isActive
        ? "bg-white text-blue-900 shadow-sm sm:shadow"
        : "text-white hover:bg-blue-700"
    }
  `;

  return (
    <nav className="bg-gradient-to-b from-blue-950 to-blue-900 text-white shadow-md w-full">
      <div className="py-4 px-4 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <NavLink to="/" className={navLinkClasses}>
            🌍 Home ✈️
          </NavLink>
        </div>

        <div className="sm:hidden">
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="text-white text-2xl"
            >
              <FiMenu />
            </button>
          )}
        </div>

        <div className="hidden sm:flex gap-6 pr-4">
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
            <>
              <NavLink to="/bucketlist" className={navLinkClasses}>
                My Bucket List
              </NavLink>
              <NavLink to="/forum" className={navLinkClasses}>
                Travel Forum
              </NavLink>
              <button
                onClick={logout}
                className={navLinkClasses({ isActive: false })}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed sm:hidden inset-0 bg-blue-950 z-50 pt-16 px-4 overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-white text-2xl p-2"
          >
            <FiX />
          </button>

          <div className="flex flex-col items-center gap-4 py-4">
            <NavLink
              to="/explore"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Explore
            </NavLink>
            <NavLink
              to="/signup"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </NavLink>
            {!user && (
              <NavLink
                to="/login"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            )}
            {user && (
              <>
                <NavLink
                  to="/bucketlist"
                  className={navLinkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  My Bucket List
                </NavLink>
                <NavLink
                  to="/forum"
                  className={navLinkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  Travel Forum
                </NavLink>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className={navLinkClasses({ isActive: false })}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
