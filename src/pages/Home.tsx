import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CoreValues from "../components/CoreValues";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CoreValues />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default Home;
