import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./comps/Contact";
import About from "./comps/About";
import Nvbar from "./comps/Nvbar";
import Footer from "./comps/Footer";
import Home from "./comps/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nvbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
