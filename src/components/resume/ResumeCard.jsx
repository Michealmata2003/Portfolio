import React from "react";
import { motion } from "framer-motion";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-white dark:bg-[#1e1e21] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-4 top-6 w-3 h-3 rounded-full bg-designColor"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subTitle}</p>
        </div>
        <span className="text-xs font-semibold text-designColor bg-designColor/10 px-3 py-1 rounded-full">
          {result}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{des}</p>
    </motion.div>
  );
};

export default ResumeCard;
