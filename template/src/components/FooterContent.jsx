// Imports
import { NavLink, Link } from "react-router";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const FooterContent = ({ setShowMenu }) => {
  const { t } = useTranslation();
  const lang = (code) => {
    i18next.changeLanguage(code);
  };

  //
  return (
    <>
      <div className="footer-menu">
        <div className="links">
          <span className="link">
            <NavLink to="/" onClick={() => setShowMenu(false)}>
              {t("nav.home")}
            </NavLink>
          </span>
          <span className="link">
            <NavLink to="/about" onClick={() => setShowMenu(false)}>
              {t("nav.about")}
            </NavLink>
          </span>
          <span className="link">
            <NavLink to="/gallery" onClick={() => setShowMenu(false)}>
              {t("nav.gallery")}
            </NavLink>
          </span>
          <span className="link">
            <NavLink to="/activity" onClick={() => setShowMenu(false)}>
              {t("nav.activities")}
            </NavLink>
          </span>
          <span className="link">
            <NavLink to="/contact" onClick={() => setShowMenu(false)}>
              {t("nav.contact")}
            </NavLink>
          </span>
          <span className="link">
            <NavLink to="/privacy" onClick={() => setShowMenu(false)}>
              {t("nav.privacy")}
            </NavLink>
          </span>
          <span className="link">
            <NavLink to="/rules" onClick={() => setShowMenu(false)}>
              {t("nav.rules")}
            </NavLink>
          </span>
          <span className="link">
            <NavLink to="/terms" onClick={() => setShowMenu(false)}>
              {t("nav.terms")}
            </NavLink>
          </span>
        </div>
        <div className="links">
          <span className="link">
            <Link
              onClick={() => {
                lang("en");
              }}
            >
              en
            </Link>
          </span>
          <span className="link">
            <Link
              onClick={() => {
                lang("nl");
              }}
            >
              nl
            </Link>
          </span>
          <span className="link">
            <Link
              onClick={() => {
                lang("fr");
              }}
            >
              fr
            </Link>
          </span>
          <span className="link">
            <Link
              onClick={() => {
                lang("de");
              }}
            >
              de
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
