// Imports
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import logo from "../assets/img/scorpiocoding-banner.png";

export const Home = () => {
  const { t } = useTranslation();

  //
  return (
    <>
      <div className="container-center">
        <h3>{t("home.title")}</h3>
      </div>
    </>
  );
};
