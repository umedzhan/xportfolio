import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full">
            <h1 id="contacts" className="text-[32px] whitespace-nowrap">
              <font className="main-color">#</font>
              {t("contacts2")}
            </h1>
            <div className="bg-[#f53003] w-full h-[1px]" />
          </div>
        </div>
        <div className="flex gap-[59px] justify-between">
          <div className="flex flex-col gap-5 mt-[45px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
            {t("freelance_interest")}
          </div>
          <div className="flex flex-col gap-4 mt-[100px] p-4 border-1 border-[#ABB2BF]">
            <h1 className="font-semibold text-[16px]">{t("message_me")}</h1>
            <div className="flex flex-col gap-2 text-[#ABB2BF]">
              <a
                href="https://github.com/umedzhan"
                className="flex gap-[5px] items-center text-[16px]"
              >
                <div className="flex justify-center items-center w-[32px] h-[32px] p-[1px]">
                  <img src="icons/github.svg" />
                </div>
                umedzhan
              </a>
              <a
                href="mailto:karayev.umedjon@gmail.com"
                className="flex gap-[5px] items-center text-[16px]"
              >
                <div className="flex justify-center items-center w-[32px] h-[32px] px-[3px] py-[7px]">
                  <img src="icons/email.svg" />
                </div>
                karayev.umedjon@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full">
            <h1 id="contacts" className="text-[32px] whitespace-nowrap">
              <font className="main-color">#</font>
              {t("contacts2")}
            </h1>
            <div className="bg-[#f53003] w-full h-[1px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] justify-between">
          <div className="flex flex-col gap-5 mt-[16px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
            {t("freelance_interest")}
          </div>
          <div className="flex flex-col gap-4 p-4 border-1 border-[#ABB2BF]">
            <h1 className="font-semibold text-[16px]">{t("message_me")}</h1>
            <div className="flex flex-col gap-2 text-[#ABB2BF]">
              <a
                href="https://github.com/umedzhan"
                className="flex gap-[5px] items-center text-[16px]"
              >
                <div className="flex justify-center items-center w-[32px] h-[32px] p-[1px]">
                  <img src="icons/github.svg" />
                </div>
                umedzhan
              </a>
              <a
                href="mailto:karayev.umedjon@gmail.com"
                className="flex gap-[5px] items-center text-[16px]"
              >
                <div className="flex justify-center items-center w-[32px] h-[32px] px-[3px] py-[7px]">
                  <img src="icons/email.svg" />
                </div>
                ka*****n@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
