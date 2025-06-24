import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { app } from "./firebaseConfig";

export default function App() {
  console.log(app);
  return (
    <div className="min-h-screen w-full text-white">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
