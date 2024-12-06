// Imports
import { useState, useEffect } from "react";

import { FooterContent } from "./FooterContent";

export const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (e) => {
    console.log(e.currentTarget.nextElementSibling);
    if (
      e.currentTarget.toggle === false ||
      e.currentTarget.toggle === undefined
    ) {
      e.currentTarget.toggle = true;
      e.currentTarget.children[1].classList.add("arrow-change");
      setShowMenu(!showMenu);
    } else {
      e.currentTarget.toggle = false;
      e.currentTarget.children[1].classList.remove("arrow-change");
      setShowMenu(!showMenu);
    }
  };
  return (
    <>
      {showMenu && <FooterContent />}
      <footer>
        <div className="copyright">
          <div>
            &copy; 2000 - {new Date().getFullYear()} -{" "}
            {process.env.REACT_APP_SITE_NAME}
            {/* </div>
          <div> */}
            &nbsp; created by &nbsp;
            <a
              className="scorpio"
              href="https://scorpiocoding.com"
              rel="noreferre"
              target="_blank"
            >
              ScorpioCoding.com
            </a>
          </div>
        </div>
        <button
          className="show-btn"
          onClick={(e) => {
            toggleMenu(e);
          }}
        >
          <span></span>
          <span className="show-arrow"></span>
        </button>
      </footer>
    </>
  );
};
