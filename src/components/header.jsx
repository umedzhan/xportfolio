import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import SelectLang from "./elements/select-language";

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const changeLanguage = (e) => {
    const selectledLang = e.target.value;
    i18n.changeLanguage(selectledLang);
    localStorage.setItem("i18nextLng", selectledLang);
  };

  return (
    <div className="flex justify-between pt-[32px] pb-[8px]">
      <Link to="/" className="flex gap-2 items-center">
        <img src="icons/logo.png" />
        <span className="text-[16px] font-bold">{t("Karayev Umedjon")}</span>
      </Link>
      <div className="flex gap-[32px] items-center">
        <Link
          to={"/"}
          className={
            location.pathname === "/" ? "text-white" : "text-[#ABB2BF]"
          }
        >
          <span className="main-color">#</span>
          {t("home")}
        </Link>
        <Link
          to={"/projects"}
          className={
            location.pathname === "/projects" ? "text-white" : "text-[#ABB2BF]"
          }
        >
          <span className="main-color">#</span>
          {t("work")}
        </Link>
        <Link
          to={"/about-me"}
          className={
            location.pathname === "/about-me" ? "text-white" : "text-[#ABB2BF]"
          }
        >
          <span className="main-color">#</span>
          {t("about-me")}
        </Link>
        <Link
          to={"/contacts"}
          className={
            location.pathname === "/contacts" ? "text-white" : "text-[#ABB2BF]"
          }
        >
          <span className="main-color">#</span>
          {t("contacts")}
        </Link>
        <SelectLang Value={i18n.language} onChange={changeLanguage} />
      </div>
    </div>
  );
};



