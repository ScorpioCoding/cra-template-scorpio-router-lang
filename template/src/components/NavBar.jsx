import { useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const NavBar = () => {
  const { t } = useTranslation();
  const lang = (code) => {
    i18next.changeLanguage(code);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div
        className={menuOpen ? "menu-btn btn-close" : "menu-btn"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <div className={menuOpen ? "open" : "closed"}>
        <div className="menu">
          <div className="menu-branding">
            <h1>ScorpioCoding</h1>
            <h3>{t("branding.slogan")}</h3>
            <h3>
              <i>{t("branding.welcome")}</i>
            </h3>
          </div>
          <ul className="menu-nav">
            <li className="nav-item">
              <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="nav-link">{t("nav.home")}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {t("nav.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {t("nav.contact")}
              </NavLink>
            </li>
            <li className="nav-item">
              <span
                className="nav-lang"
                onClick={() => {
                  lang("en");
                }}
              >
                en
              </span>
              <span
                className="nav-lang"
                onClick={() => {
                  lang("nl");
                }}
              >
                nl
              </span>
              <span
                className="nav-lang"
                onClick={() => {
                  lang("fr");
                }}
              >
                fr
              </span>
              <span
                className="nav-lang"
                onClick={() => {
                  lang("de");
                }}
              >
                de
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
