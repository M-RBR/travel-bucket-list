import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.tsx"; // If this is your <Layout />
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* Layout wrapper, e.g. with Navbar */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
