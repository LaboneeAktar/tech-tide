import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="text-gray-400 mx-10" />
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-gray-600 p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            TechTide
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
