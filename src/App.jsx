import React from "react";
import { Route, Routes } from "react-router-dom";
import FullScreenNav from "./components/navigation/FullScreenNav";
import Navbar from "./components/navigation/Navbar";
import Agence from "./pages/Agence";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <FullScreenNav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </>
  );
}

export default App;
