import React from "react";
import ProjectButtons from "./ProjectButtons";

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  return (
    <div className="w-full bg-white dark:bg-[#1c1e22] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-designColor transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
            {des}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-5">
          <ProjectButtons githubLink={githubLink} liveLink={liveLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
