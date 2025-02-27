"use client"; // Add this at the top to mark the component as client-side

import React, { useState } from "react";

const UnderConstruction: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Function to hide the notification
  const hideNotification = () => {
    setIsVisible(false); // Hide the notification
  };

  return (
    <div>
      {isVisible && (
        <div className="bg-yellow-400 w-full font-weight: 200 italic flex items-center text-black text-xl justify-center relative">
          {/* Cross button to hide the notification */}
          <button
            onClick={hideNotification}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl font-bold"
          >
            &times; {/* This is the HTML entity for a cross (×) */}
          </button>
          <p className="text-sm sm:text-xl">🚧 Website is under construction. Still needs some updates! 🚧</p>
        </div>
      )}
    </div>
  );
};

export default UnderConstruction;