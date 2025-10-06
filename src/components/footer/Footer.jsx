import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleResumeDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <footer className="w-full bg-gradient-to-t from-gray-100 to-white dark:from-[#0d0d0d] dark:to-black py-16 px-6 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo / Name */}
        <h2 className="text-3xl font-bold text-black dark:text-white tracking-wide font-logoFont">
          MATA<span className="text-designColor">.</span>
        </h2>

        {/* Resume Link */}
        <p className="text-gray-600 dark:text-gray-400">
          View my{" "}
          <span
            onClick={handleResumeDownload}
            className="text-designColor cursor-pointer font-medium hover:underline hover:text-designColor/80 transition-all"
          >
            Resume
          </span>
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-2">
          <a
            href="https://github.com/michealmata"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-designColor hover:text-white transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/akintelure-michael-127836235/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-designColor hover:text-white transition-all duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://x.com/Michealmata03"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-designColor hover:text-white transition-all duration-300"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://www.instagram.com/michealmata03/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-designColor hover:text-white transition-all duration-300"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-16 h-[1px] bg-gray-400 dark:bg-gray-700 my-4"></div>

        {/* Copyright */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Micheal Mata. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
