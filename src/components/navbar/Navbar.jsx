import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { navLinksdata } from "../../constants";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-6 justify-center m-auto  h-20 px-[2rem] sticky top-0 bg-white dark:bg-bodyColor shadow-sm z-50 mx-auto flex justify-between items-center font-titleFont dark:shadow-shadowOne shadow-shadowTwo">
      <div>
        <h2 className="text-black dark:text-white text-[1.5rem] font-bold font-bodyFont">
          MATA
        </h2>
      </div>
      <div className="items-center">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-semibold text-gray-600 dark:text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="text-gray-800 dark:text-gray-200 p-2 ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {/* Dynamically render the icon based on isDarkMode */}
          {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-full h-screen overflow-scroll absolute top-0 left-0 bg-white dark:bg-bodyColor shadow-md scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 px-4 relative">
              <div>
                <div>
                  <h2 className="text-black dark:text-white text-[1.5rem] font-bold font-bodyFont">
                    MATA
                  </h2>
                </div>
                <p className="text-sm text-gray-400 mt-2 pt-2">
                  Passionate frontend developer with a knack for creating
                  user-friendly and visually appealing web experiences.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me on
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
