import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Logo & Name */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <h1 className="text-3xl font-bold">Marathon Pro</h1>
          </div>
          <p className="text-lg opacity-80">Location - Savar, Dhaka</p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-6"></div>

        {/* Links & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <a href="#" className="hover:underline hover:opacity-100 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline hover:opacity-100 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:underline hover:opacity-100 transition">
              Contact Us
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={32} className="hover:text-[#1877F2] transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={32} className="hover:text-[#1DA1F2] transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={32} className="hover:text-[#0A66C2] transition" />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-6 text-center text-sm opacity-75">
          © {new Date().getFullYear()} Marathon Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
