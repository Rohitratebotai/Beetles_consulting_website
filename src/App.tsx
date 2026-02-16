import "./App.css";
import Footer from "./components/commonComponents/Footer";
import Navbar from "./components/commonComponents/Navbar";
import Consultants from "./components/pages/consultant/Consultant";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Projects from "./components/pages/projects/Projects";
import Services from "./components/pages/services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
