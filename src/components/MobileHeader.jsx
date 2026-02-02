import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import SelectLang from "./elements/select-language";

export const MobileHeader = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const changeLanguage = (e) => {
        const selectledLang = e.target.value;
        i18n.changeLanguage(selectledLang);
        localStorage.setItem("i18nextLng", selectledLang);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <div className="fixed [width:calc(100%-32px)] bg-[#21201c] z-50">
                <div className="flex items-center justify-between pt-4 pb-2 text-white">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="icons/logo.png" width={16} alt="logo" />
                        {t("Karayev Umedjon")}
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <img src="icons/x.svg" alt="close menu" />
                        ) : (
                            <img src="icons/menu.svg" alt="open menu" />
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="fixed top-[48px] pb-[48px] left-0 w-full h-full bg-[#21201c] text-white flex flex-col items-center justify-center gap-6 text-2xl z-10 transition-all duration-700"
                        onClick={handleCloseMenu}
                    >
                        <Link
                            to="/"
                            className={
                                location.pathname !== "/" ? "text-red-500" : "text-[#ABB2BF]"
                            }
                        >
                            #{t("home")}
                        </Link>
                        <Link
                            to="/projects"
                            className={
                                location.pathname !== "/projects"
                                    ? "text-red-500"
                                    : "text-[#ABB2BF]"
                            }
                        >
                            #{t("work")}
                        </Link>
                        <Link
                            to="/about-me"
                            className={
                                location.pathname !== "/about-me"
                                    ? "text-red-500"
                                    : "text-[#ABB2BF]"
                            }
                        >
                            #{t("about-me")}
                        </Link>
                        <Link
                            to="/contacts"
                            className={
                                location.pathname !== "/contacts"
                                    ? "text-red-500"
                                    : "text-[#ABB2BF]"
                            }
                        >
                            #{t("contacts")}
                        </Link>
                        <SelectLang Value={i18n.language} onChange={changeLanguage} />
                    </div>
                )}
            </div>
            <div className="h-[48px] bg-[#21201c]" />
        </>
    );
};

export default MobileHeader;
