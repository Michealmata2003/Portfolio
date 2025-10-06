import React, { useState, useEffect } from "react";
import Typing from 'react-typing-effect';  // Import the typing effect component

const Preloader = ({ setIsLoading }) => {
  const name = "Micheal Mata";  // Your name to be typed

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop the preloader after the typing effect completes
    }, 3000); // Adjust the time according to how long you want the typing to last

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [setIsLoading]);

  return (
    <div className="fixed inset-0 bg-white dark:bg-bodyColor flex items-center justify-center z-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-designColor dark:text-lightText">
          {/* Use the Typing component to animate the name */}
          <Typing
            text={name}
            speed={100} // Speed of typing effect
            eraseDelay={1000}  // Delay before it starts erasing
            typingDelay={500}  // Delay before starting typing
          />
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
