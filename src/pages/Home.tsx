import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CoreValues from "../components/CoreValues";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CoreValues />
      <Testimonials />
    </div>
  );
}

export default Home;
