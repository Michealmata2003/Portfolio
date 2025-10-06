import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Preloader from "./Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [showArrow, setShowArrow] = useState(false);

  // 🌙 Handle Theme Toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // ⬆️ Handle Scroll to Top Button
  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (isLoading) {
    return <Preloader setIsLoading={setIsLoading} />;
  }

  return (
    <div className="bg-white dark:bg-bodyColor text-darkText dark:text-lightText transition-colors duration-300">
      {/* 🧭 Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* 📐 Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center">
          <Banner />
        </section>

        {/* Projects Section */}
        <section className="py-28 bg-transparent">
          <Projects />
        </section>

        {/* Resume Section */}
        <section className="py-28 bg-gray-50 dark:bg-[#151515] rounded-3xl shadow-sm">
          <Resume />
        </section>

        {/* Contact Section */}
        <section className="py-28 bg-transparent">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* ⬆️ Scroll-to-Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="fixed bottom-8 right-8 p-3 rounded-full bg-designColor text-white dark:bg-gray-800 dark:text-designColor shadow-lg hover:shadow-designColor/40 transition-all duration-300 transform hover:scale-110"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
