import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";
import IndexPortofolio from "./screens/IndexPortofolio";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPortofolio />} />
        <Route
          path="/projects"
          element={<div className="p-8">Projects Page</div>}
        />
        <Route path="/about" element={<div className="p-8">About Page</div>} />
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
