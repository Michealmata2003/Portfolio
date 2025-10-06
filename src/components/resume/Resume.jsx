import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Professional Skills" },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b border-gray-300 dark:border-gray-800">
      <div className="flex justify-center text-center mb-10">
        <Title title="My Resume" des="2+ Years of Experience" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <ul className="flex gap-6 border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 rounded-t-md ${
                activeTab === tab.id
                  ? "text-designColor border-b-2 border-designColor"
                  : "text-gray-500 hover:text-designColor"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto ">
        {activeTab === "education" && <Education />}
        {activeTab === "skills" && <Skills />}
      </div>
    </section>
  );
};

export default Resume;
