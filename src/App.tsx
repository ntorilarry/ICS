import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
