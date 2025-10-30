import { Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E17] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* PRODUCT */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-400">PRODUCT</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-400">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-400">
            RESOURCES
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API Docs
              </a>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-400">LEGAL</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6">
        <p className="text-sm text-gray-500">
          © 2024 AI Feedback Analyzer. All rights reserved.
        </p>

        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
