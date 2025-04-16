import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";
import IndexPortofolioScreen from "./screens/IndexPortofolioScreen";
import IndexExperienceScreen from "./screens/indexExperienceScreen";
import IndexEducationScreen from "./screens/indexEducationScreen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPortofolioScreen />} />
        <Route path="/experiences" element={<IndexExperienceScreen />} />
        <Route path="/education" element={<IndexEducationScreen />} />
        <Route
          path="/contact"
          element={<div className="p-8">Contact Page</div>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
