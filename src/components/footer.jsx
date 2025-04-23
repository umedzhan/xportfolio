import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:block">
        <div className="h-[1px] bg-[#ABB2BF] mx-[-171px]" />
        <div className="pt-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex gap-[9px] items-center">
                  <img className="w-4 h-4" src="icons/logo.png" />
                  <span className="font-medium">{t("last_name")}</span>
                </div>
                <span className="text-[#ABB2BF]">
                  karayev.umedjon@gmail.com
                </span>
              </div>
              <div>{t("backend_and_frontend_developer")}</div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-medium text-[24px]">{t("media")}</h1>
              <div className="flex gap-2 h-[32px] items-center">
                <a
                  href="https://github.com/umedzhan"
                  target="_blank"
                  className="w-[32px]"
                >
                  <img className="" src="icons/github.svg" />
                </a>
                <a
                  href="https://t.me/umezhon"
                  target="_blank"
                  className="w-[32px]"
                >
                  <img src="icons/telegram.svg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/umedjon-karayev-925009320"
                  target="_blank"
                  className="w-[32px]"
                >
                  <img src="icons/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center text-[#ABB2BF] pb-4">
          {t("copyright")}
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden">
        <div className="h-[1px] bg-[#ABB2BF] mx-[-16px]" />
        <div className="pt-4">
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="flex gap-[9px] items-center">
                  <img className="w-4 h-4" src="icons/logo.png" />
                  <span className="font-medium">{t("last_name")}</span>
                </div>
                <a
                  href="mailto:karayev.umedjon@gmail.com"
                  className="text-[#ABB2BF]"
                >
                  karayev.umedjon@gmail.com
                </a>
              </div>
              <div>{t("backend_and_frontend_developer")}</div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-medium text-[24px]">{t("media")}</h1>
              <div className="flex gap-2 h-[32px] items-center">
                <a
                  href="https://github.com/umedzhan"
                  target="_blank"
                  className="w-[32px]"
                >
                  <img className="" src="icons/github.svg" />
                </a>
                <a
                  href="https://t.me/umezhon"
                  target="_blank"
                  className="w-[32px]"
                >
                  <img src="icons/telegram.svg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/umedjon-karayev-925009320"
                  target="_blank"
                  className="w-[32px]"
                >
                  <img src="icons/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center text-[#ABB2BF] pb-4 text-center">
          {t("copyright")}
        </div>
      </div>
    </>
  );
};

export default Footer;
