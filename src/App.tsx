import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";
import IndexPortofolioScreen from "./screens/IndexPortofolioScreen";
import IndexExperienceScreen from "./screens/indexExperienceScreen";
import IndexEducationScreen from "./screens/indexEducationScreen";
import IndexFAQScreen from "./screens/indexFAQScreen";
import LoaderComponent from "./components/LoaderComponent";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // simulate loading delay (optional)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust as needed

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoaderComponent />}
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPortofolioScreen />} />
        <Route path="/experiences" element={<IndexExperienceScreen />} />
        <Route path="/education" element={<IndexEducationScreen />} />
        <Route path="/faq" element={<IndexFAQScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
