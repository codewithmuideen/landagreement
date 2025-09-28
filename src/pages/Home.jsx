import React from "react";
import Hero from "../components/Hero.jsx";
import AmazingStatsSection from "../components/AmazingStatsSection.jsx";
import AmazingFeaturesSection from "../components/AmazingFeaturesSection.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import PropertyTabs from "../components/PropertyTabs.jsx";
import Pricing from "../components/Pricing.jsx";
import Partners from "../components/Partners.jsx";
import FAQ from "../components/FAQ.jsx";
import PropertyCheckBanner from "../components/PropertyCheckBanner.jsx";
import Materials from "../components/Materials.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Materials />
      <AmazingStatsSection />
      <AmazingFeaturesSection />
      <HowItWorks />
      <PropertyTabs />
      <Pricing />
      <Partners />
      <FAQ />
      <PropertyCheckBanner />
    </>
  );
};

export default Home;
