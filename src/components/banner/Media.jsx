import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between text-black dark:text-white">
      <div>
        {/* <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2> */}
        <div className="flex gap-4 text-black dark:text-white">
          <a
            href="https://www.instagram.com/michealmata03/profilecard/?igsh=NzU0d3NtMWk5bG0x"
            className="bannerIcon text-black dark:text-white"
          >
            <AiFillInstagram />
          </a>

          <a
            href="https://x.com/Michealmata03?t=c9qNEmqWagUYpm3Sgk1-VA&s=09"
            className="bannerIcon text-black dark:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/akintelure-michael-127836235/"
            className="bannerIcon text-black dark:text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Michealmata2003/"
            className="bannerIcon text-black dark:text-white"
          >
            <BsGithub />
          </a>
        </div>
      </div>
      {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
    </div>
  );
};

export default Media;
