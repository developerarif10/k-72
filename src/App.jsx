import React from "react";
import { Route, Routes } from "react-router-dom";
import Agence from "./pages/Agence";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/agence" element={<Agence />} />
    </Routes>
  );
}

export default App;
