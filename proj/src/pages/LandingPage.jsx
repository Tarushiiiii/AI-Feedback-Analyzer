import React from "react";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeedbackFeatures from "../components/Features";
import Footer from "../components/Footer";
import HowItWorks from "../components/Working";

export default function LandingPage() {
  return (
    <div className="h-screen w-full bg-[#0B0E17]">
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeedbackFeatures />

      {/* How it Works */}
      <HowItWorks />

      {/* Footer */}
      <Footer />
    </div>
  );
}
