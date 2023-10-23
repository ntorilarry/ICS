import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GoogleTagManager from "./components/GoogleTag";

function App() {
  return (
    <HelmetProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>International Conglomerate Solution</title>
      <meta
        name="International Conglomerate Solution"
        content="At International Conglomerate Solutions Limited, we aim to leverage the latest digital and technological ideas of invaluable thinkers to create ground-breaking solutions for every industry. We empower the foremost drivers that pioneer the latest technological breakthrough to propel our society towards digital diversity, equality and inclusion"
      />
      <link rel="canonical" href="https://www.ics-gh.org" />
    </Helmet>
    <div className="App">  
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;
