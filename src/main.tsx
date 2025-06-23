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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CountryProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="country/:name" element={<CountryDetails />} />
        </Route>
      </Routes>
    </CountryProvider>
  </BrowserRouter>
);
