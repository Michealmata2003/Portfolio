import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectButtons = ({ githubLink, liveLink }) => {
  return (
    <div className="w-full flex flex-wrap gap-4 mt-5">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-400 text-gray-800 dark:text-gray-200 font-medium text-sm shadow-sm hover:shadow-md hover:border-designColor transition-all duration-300 hover:scale-105"
        >
          <FaGithub className="text-lg group-hover:text-designColor transition-colors duration-300" />
          <span className="group-hover:text-designColor transition-colors duration-300">
            GitHub
          </span>
        </a>
      )}

      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-designColor text-white font-medium text-sm shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
        >
          <FiExternalLink className="text-lg" />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  );
};

export default ProjectButtons;
