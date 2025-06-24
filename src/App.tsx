import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function App() {
  // console.log(import.meta.env.VITE_FB_API_KEY);
  // console.log("Env key:", import.meta.env.VITE_FB_API_KEY);
  // console.log("All env vars:", import.meta.env);

  return (
    <div className="min-h-screen w-full text-white">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
