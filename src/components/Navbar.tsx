import { NavLink } from "react-router";

export default function Navbar() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block w-full sm:w-auto text-center px-4 py-2 rounded-md text-base font-semibold transition duration-300 ${
      isActive
        ? "bg-white text-blue-900 shadow"
        : "text-white hover:bg-blue-700"
    }`;

  return (
    <nav className="bg-blue-900 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto py-4 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        <div className="text-center sm:text-left">
          <NavLink to="/" className={navLinkClasses}>
            🌍 Home
          </NavLink>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <NavLink to="/explore" className={navLinkClasses}>
            Explore
          </NavLink>
          <NavLink to="/signup" className={navLinkClasses}>
            Sign Up
          </NavLink>
          <NavLink to="/login" className={navLinkClasses}>
            Login ✈️
          </NavLink>
          <NavLink to="/bucketlist" className={navLinkClasses}>
            Bucket List
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
