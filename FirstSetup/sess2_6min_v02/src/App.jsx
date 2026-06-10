import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
