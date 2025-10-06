import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="grid md:grid-cols-2 gap-12"
    >
      {/* Education Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-l-4 border-designColor pl-3">
          Education
        </h2>
        <div className="flex flex-col gap-8">
          <ResumeCard
            title="Introduction to Computer Science"
            subTitle="Great Learning (2006 - 2010)"
            result="5.0/5"
            des="Gained foundational understanding of computational logic, algorithms, and programming principles."
          />
          <ResumeCard
            title="Frontend Developer Course"
            subTitle="Cholatrek Institute (2022)"
            result="5.0/5"
            des="Developed expertise in HTML, CSS, JavaScript, and React. Built professional-grade UI components and apps."
          />
          <ResumeCard
            title="Pharmacy"
            subTitle="Federal University Oye Ekiti (2022 - Present)"
            result="In Progress"
            des="Studying pharmaceutical sciences, focusing on drug formulation, biopharmaceutics, and patient care."
          />
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-l-4 border-designColor pl-3">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          <ResumeCard
            title="Frontend Developer Intern"
            subTitle="Cholatrek Institute (2022 - 2023)"
            result="Nigeria"
            des="Built scalable UI components and ensured responsive design across devices using React and Tailwind."
          />
          <ResumeCard
            title="Frontend Developer Intern"
            subTitle="Maximillian Solutions (2024)"
            result="Nigeria"
            des="Collaborated in agile sprints, optimized code performance, and contributed to client-facing applications."
          />
          <ResumeCard
            title="Frontend Developer Tutor"
            subTitle="DevHoda (2024)"
            result="Nigeria"
            des="Mentored beginners in frontend development, simplifying complex topics and guiding hands-on projects."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
