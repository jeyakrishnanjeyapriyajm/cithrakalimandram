import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import OpeningLoader from "./components/layout/OpeningLoader";
import ScrollManager from "./components/layout/ScrollManager";

import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import PerformancesPage from "./pages/PerformancesPage";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <Navbar />

      <div key={location.pathname} className="page-enter">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/performances" element={<PerformancesPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      {loading && <OpeningLoader onComplete={finishLoading} />}

      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
