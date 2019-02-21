import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      <div className="container">
        <p>&copy; Jarosław Terejko {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
