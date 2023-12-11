import React from "react";

const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <p className="text-center fixed bottom-2 w-full">
        Copyright {yearSpan.textContent}
      </p>
    </div>
  );
};

export default Footer;
