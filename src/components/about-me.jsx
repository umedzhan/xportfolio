import { t } from "i18next";
import ReadMore from "./buttons/buttons";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full">
            <h1 id="about-me" className="text-[32px] whitespace-nowrap">
              <font className="main-color">#</font>
              {t("about-me2")}
            </h1>
            <div className="bg-[#f53003] w-full h-[1px]" />
          </div>
        </div>
        <div className="flex gap-[59px] justify-between">
          <div className="flex flex-col gap-5 mt-[23px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
            <span>{t("hello_im")}</span>
            <span>{t("about-me-intro")}</span>
            <span>{t("about-me-intro-2")}</span>
            <ReadMore />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img className="h-[508px]" src="images/iam2.png" />
              <img className="absolute top-[59px]" src="icons/Dots.svg" />
              <img
                className="absolute bottom-[172px] right-[16px]"
                src="icons/Dots.svg"
              />
            </div>
            <div className="h-[1px] w-[271px] bg-[#f53003]" />
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full">
            <h1 id="about-me" className="text-[32px] whitespace-nowrap">
              <font className="main-color">#</font>
              {t("about-me2")}
            </h1>
            <div className="bg-[#f53003] w-full h-[1px]" />
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-between">
          <div className="flex flex-col gap-5 mt-[23px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
            <span>{t("hello_im")}</span>
            <span>{t("about-me-intro")}</span>
            <span>{t("about-me-intro-2")}</span>
            <ReadMore />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img className="" src="images/iam2.png" />
              <img className="absolute top-[59px]" src="icons/Dots.svg" />
              <img
                className="absolute bottom-[172px] right-[16px]"
                src="icons/Dots.svg"
              />
            </div>
            <div className="h-[1px] w-[271px] bg-[#f53003]" />
          </div>
        </div>
      </div>
    </>
  );
};

export const AboutMe2 = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full"></div>
        </div>
        <div className="flex gap-[59px] justify-between">
          <div className="flex flex-col gap-5 mt-[23px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
            <span>{t("hello_im")}</span>
            <span>{t("about-me-intro")}</span>
            <span>{t("about-me-intro-2")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img className="h-[508px]" src="images/iam2.png" />
              <img className="absolute top-[59px]" src="icons/Dots.svg" />
              <img
                className="absolute bottom-[172px] right-[16px]"
                src="icons/Dots.svg"
              />
            </div>
            <div className="h-[1px] w-[271px] bg-[#f53003]" />
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full"></div>
        </div>
        <div className="flex flex-col gap-[59px] justify-between">
          <div className="flex flex-col gap-5 mt-[23px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
            <span>{t("hello_im")}</span>
            <span>{t("about-me-intro")}</span>
            <span>{t("about-me-intro-2")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src="images/iam2.png" />
              <img className="absolute top-[59px]" src="icons/Dots.svg" />
              <img
                className="absolute bottom-[172px] right-[16px]"
                src="icons/Dots.svg"
              />
            </div>
            <div className="h-[1px] w-[271px] bg-[#f53003]" />
          </div>
        </div>
      </div>
    </>
  );
};
