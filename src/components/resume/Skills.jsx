import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "95%" },
  { name: "JavaScript", level: "85%" },
  { name: "React", level: "90%" },
  { name: "Next.js", level: "75%" },
  { name: "TypeScript", level: "60%" },
  { name: "Tailwind CSS", level: "95%" },
  { name: "SASS", level: "70%" },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="grid md:grid-cols-2 gap-10"
    >
      {skills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>
            <span className="text-sm text-gray-500">{skill.level}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-2 rounded-full bg-gradient-to-r from-designColor to-blue-500"
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
