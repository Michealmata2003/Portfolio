import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { contactImg } from "../../assets";

const ContactLeft = () => (
  <div className="rounded-2xl p-8 dark:bg-[#1a1a1a]/60 bg-white/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg flex flex-col items-center text-center gap-6">
    <img
      src={contactImg}
      alt="Contact"
      className="w-40 h-40 object-cover rounded-full shadow-md"
    />
    <div>
      <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
        Micheal Mata
      </h3>
      <p className="text-sm text-designColor font-medium mt-1">
        Frontend Developer
      </p>
      <p className="text-sm text-gray-500 mt-3 max-w-sm">
        Passionate frontend developer crafting clean, performant, and
        user-centric experiences. Let’s build something impactful together.
      </p>
    </div>
    <div className="text-sm text-gray-400 space-y-1">
      <p>
        📞 <span className="text-gray-300">+234 8144860325</span>
      </p>
      <p>
        📧{" "}
        <a
          href="mailto:michtelure2003@gmail.com"
          className="text-designColor hover:underline"
        >
          michtelure2003@gmail.com
        </a>
      </p>
    </div>
    <div className="flex gap-4 mt-4">
      <a
        href="https://www.instagram.com/michealmata03/profilecard/?igsh=NzU0d3NtMWk5bG0x"
        className="p-3 rounded-full bg-gradient-to-br from-designColor to-pink-500 text-white hover:scale-105 transition"
      >
        <AiFillInstagram size={20} />
      </a>
      <a
        href="https://x.com/Michealmata03"
        className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white hover:scale-105 transition"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/akintelure-michael-127836235/"
        className="p-3 rounded-full bg-gradient-to-br from-blue-700 to-sky-400 text-white hover:scale-105 transition"
      >
        <FaLinkedinIn size={20} />
      </a>
    </div>
  </div>
);

export default ContactLeft;
