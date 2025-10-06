import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 dark:text-white">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I'm <span className="text-designColor capitalize">Micheal Mata</span>
        </h1>
        <h3 className="text-xl font-bold text-gray-700 dark:text-white ">Frontend Developer</h3>
        
        <p className="text-sm font-bodyFont font-[300] text-gray-500 dark:text-white ">
        I bring designs to life and add depth to digital experiences. I create interfaces that are functional, intuitive, and captivating. My work isn’t just about building the web—it’s about crafting journeys users remember and solving problems.
        </p>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner