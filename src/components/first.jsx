import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const First = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:flex justify-between">
        <div className="max-w-[537px] mt-[74px]">
          <h1
            className="text-[32px] font-semibold"
            dangerouslySetInnerHTML={{ __html: t("first1") }}
          ></h1>
          <p className="text-[#ABB2BF] mt-[32px]">{t("first_intro")}</p>
          <Link to="/contacts">
            <button className="hover:bg-[#483234] transition-all border-1 border-[#f53003] mt-[24px] px-4 py-2 cursor-pointer">
              {t("contact-me-button")}
            </button>
          </Link>
        </div>
        <div className="relative">
          <img
            className="absolute right-4 bottom-[80px] z-20"
            src="icons/Dots.svg"
          />
          <img
            className="max-w-[469px] max-h-[386px] relative z-10"
            src="images/iam.png"
          />
          <img
            className="absolute left-0 top-[84px] z-0"
            src="icons/Logo.svg"
          />
          <div className="flex items-center gap-2 border-1 ml-[31px] mr-[36px] text-[16px] p-2 font-medium">
            <div className="bg-color bg-[#f53003] w-4 h-4" />
            <span dangerouslySetInnerHTML={{ __html: t("working_on") }}></span>
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden flex flex-col gap-3 justify-between">
        <div className="max-w-[537px] mt-[8px]">
          <h1
            className="text-[32px] font-semibold"
            dangerouslySetInnerHTML={{ __html: t("first1") }}
          ></h1>
          <p className="text-[#ABB2BF] mt-[32px]">{t("first_intro")}</p>
          <Link to="/contacts">
            <button className="hover:bg-[#483234] transition-all border-1 border-[#f53003] mt-[24px] px-4 py-2 cursor-pointer">
              {t("contact-me-button")}
            </button>
          </Link>
        </div>
        <div className="relative w-full">
          <img
            className="absolute right-4 bottom-[80px] z-20"
            src="icons/Dots.svg"
          />
          <img
            className="max-w-full max-h-[386px] relative z-10"
            src="images/iam.png"
          />
          <img
            className="absolute left-0 top-[84px] z-0"
            src="icons/Logo.svg"
          />
          <div className="flex items-center gap-2 border-1 text-[16px] p-2 font-medium">
            <div className="bg-color bg-[#f53003] w-4 h-4 min-w-4 max-w-4" />
            <span dangerouslySetInnerHTML={{ __html: t("working_on") }}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
