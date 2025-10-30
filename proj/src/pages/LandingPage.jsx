import React from "react";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeedbackFeatures from "../components/Features";
import Footer from "../components/Footer";
import HowItWorks from "../components/Working";

export default function LandingPage() {
  const features = [
    {
      icon: "sentiment_satisfied",
      title: "Automated Sentiment Analysis",
      desc: "Instantly gauge customer emotion and sentiment from any text-based feedback.",
    },
    {
      icon: "sell",
      title: "Topic & Keyword Extraction",
      desc: "Automatically identify recurring themes and important keywords in your feedback data.",
    },
    {
      icon: "link",
      title: "Data Source Integration",
      desc: "Easily connect with popular platforms to import feedback from multiple channels.",
    },
    {
      icon: "bar_chart",
      title: "Insightful Dashboards",
      desc: "Visualize trends and insights with our clear, interactive, and customizable dashboards.",
    },
  ];

  const howItWorks = [
    {
      step: "Step 1",
      icon: "wifi_channel",
      title: "Connect Your Feedback Channels",
    },
    {
      step: "Step 2",
      icon: "model_training",
      title: "Let AI Do the Heavy Lifting",
    },
    {
      step: "Step 3",
      icon: "insights",
      title: "Visualize Actionable Insights",
    },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "API Docs"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ];

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
