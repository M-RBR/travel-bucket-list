import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import App from "./App.tsx"; // <Layout />
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import CountryDetails from "./pages/CountryDetails.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="country/:name" element={<CountryDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
