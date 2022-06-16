import React from "react";
import "./index.css";
import PlacestoGo from "./routes/Places-to-Go";
import Things from "./routes/Things";
import Contact from "./routes/Contact";

import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PlacestoGo />} />
        <Route path="/things" element={<Things/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
