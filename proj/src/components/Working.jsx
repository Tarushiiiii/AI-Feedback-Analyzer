import { Share2, Brain, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-[#0B0E17] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          How It Works in 3 Simple Steps
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-900/30 p-4 rounded-full">
                <Share2 size={28} className="text-blue-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              1. Connect Your Channels
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
              Securely link your customer feedback sources like surveys, app
              stores, and social media in just a few clicks.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-900/30 p-4 rounded-full">
                <Brain size={28} className="text-blue-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              2. AI Does the Heavy Lifting
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
              Our powerful NLP model processes and categorizes your feedback,
              identifying sentiment and key topics automatically.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-900/30 p-4 rounded-full">
                <BarChart3 size={28} className="text-blue-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              3. Visualize Actionable Insights
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
              Explore your data through interactive dashboards, uncover trends,
              and make informed decisions to improve your product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
