import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { logoutMessage, setLogoutMessage } = useAuth();
  // console.log(import.meta.env.VITE_FB_API_KEY);
  // console.log("Env key:", import.meta.env.VITE_FB_API_KEY);
  // console.log("All env vars:", import.meta.env);

  return (
    <div className="min-h-screen w-full text-white">
      {logoutMessage && (
        <div className="text-center bg-green-600 text-white py-2">
          {logoutMessage}
          <button
            onClick={() => setLogoutMessage("")}
            className="ml-4 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
