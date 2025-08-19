import { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtForms from "./pages/ArtForms";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artforms" element={<ArtForms />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
