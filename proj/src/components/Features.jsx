import "../styles/FeedbackFeatures.css";
import { BarChart, KeyRound, Link, SmileIcon } from "lucide-react";

const features = [
  {
    icon: <SmileIcon size={20} strokeWidth={1.8} />,
    title: "Automated Sentiment Analysis",
    description:
      "Instantly gauge customer emotion and sentiment from any text-based feedback.",
  },
  {
    icon: <KeyRound size={20} strokeWidth={1.8} />,
    title: "Topic & Keyword Extraction",
    description:
      "Automatically identify recurring themes and important keywords in your feedback data.",
  },
  {
    icon: <Link size={20} strokeWidth={1.8} />,
    title: "Data Source Integration",
    description:
      "Easily connect with popular platforms to import feedback from multiple channels.",
  },
  {
    icon: <BarChart size={20} strokeWidth={1.8} />,
    title: "Insightful Dashboards",
    description:
      "Visualize trends and insights with our clear, interactive, and customizable dashboards.",
  },
];

const FeedbackFeatures = () => {
  return (
    <section className="feedback-section">
      <h2 className="section-title">Unlock the Power of Your Feedback</h2>
      <p className="section-subtitle">
        Discover the key features that make our analyzer the best tool for
        understanding your customers.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-top">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackFeatures;
