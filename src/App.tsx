import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
