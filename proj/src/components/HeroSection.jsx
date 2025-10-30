const HeroSection = () => {
  return (
    <section className="bg-[#0B0E17] text-white px-8 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Turn Feedback into <br /> Growth
        </h1>
        <p className="text-gray-400 text-lg">
          Our AI automatically analyzes customer reviews, surveys, and support
          tickets to reveal actionable insights.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
          Analyze Feedback for Free
        </button>
      </div>

      {/* Right Section - Background Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div
          className="rounded-lg shadow-lg w-[90%] h-64 md:h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP3FQlrzRfmrXEx8yURmKqY23iFh55_hE-sLhhOcZI8BEO7wEb-APbN5z1oB1xrpmjwUBKNqiPDtLPKb3MwCPSG5D4dbx0PDZrLacVq3BYQnXK37cjxdv7p1dXlcJMJi6pkcfc6hOxrdhug5HazXmAK9LItqGUk118mCvkWGI-dw-UMN7KVK_RCFjDll7qm82Tkzuz6sTAuyQ4Rkkzbr82cDd5v03FWg9ZJFYV24SYlEJjE-DHgMZWmxkGeA96SoQNx-KnRq9j6ug')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
