import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import App from "./App";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CountryDetails from "./pages/CountryDetails";
import { CountryProvider } from "./context/CountryContext";
import { AuthProvider } from "./context/AuthContext";
import BucketList from "./pages/BucketList";

console.log("[Main Entry] Env Vars:", import.meta.env);
console.log(
  "[Main Entry] API Key:",
  import.meta.env.VITE_FB_API_KEY || "UNDEFINED"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <CountryProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="country/:name" element={<CountryDetails />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="bucketlist" element={<BucketList />} />
          </Route>
        </Routes>
      </CountryProvider>
    </AuthProvider>
  </BrowserRouter>
);
