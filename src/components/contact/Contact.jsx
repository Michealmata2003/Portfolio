import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const emailValidation = (email) =>
    String(email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSend = (e) => {
    e.preventDefault();
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username || !phoneNumber || !email || !subject || !message)
      return setStatus({ type: "error", message: "All fields are required." });
    if (!emailValidation(email))
      return setStatus({ type: "error", message: "Please enter a valid email." });

    emailjs
      .send(
        "Micheal_Mata",
        "Portfolio_Contact",
        formData,
        "RkJFDpANlwpiJltV7"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: `Thank you ${username}, your message has been sent successfully!`,
          });
          setFormData({
            username: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        () => setStatus({ type: "error", message: "Failed to send message." })
      );
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-black/10">
      <div className="flex justify-center mb-10">
        <Title title="Let's Connect" des="Get in Touch" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <ContactLeft />

        <div className="dark:bg-[#1a1a1a]/60 bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSend} className="flex flex-col gap-6">
            {status.message && (
              <div
                className={`text-center py-3 rounded-md ${
                  status.type === "error"
                    ? "bg-red-100 text-red-600 dark:bg-red-900/40"
                    : "bg-green-100 text-green-600 dark:bg-green-900/40"
                }`}
              >
                {status.message}
              </div>
            )}

            {["username", "phoneNumber", "email", "subject"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phoneNumber"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-6 pb-2 rounded-md bg-transparent border border-gray-400/40 focus:border-designColor dark:focus:border-designColor outline-none text-gray-900 dark:text-gray-200 placeholder-transparent transition-all duration-300"
                  placeholder={field}
                />
                <label
                  htmlFor={field}
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-designColor"
                >
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message"
                className="peer w-full px-4 pt-6 pb-2 rounded-md bg-transparent border border-gray-400/40 focus:border-designColor dark:focus:border-designColor outline-none text-gray-900 dark:text-gray-200 placeholder-transparent transition-all duration-300"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-designColor"
              >
                Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-md bg-gradient-to-r from-designColor to-pink-500 text-white font-medium tracking-wider uppercase shadow-md hover:shadow-lg transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
