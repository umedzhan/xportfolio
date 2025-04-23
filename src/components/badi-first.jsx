import { useTranslation } from "react-i18next";

export const BadiFirst = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="relative border-1 p-[32px] text-[24px] font-medium w-fit">
          {t("quote")}
          <img
            className="absolute top-[-14px] left-[11px] bg-[#21201c] px-2 py-1"
            src="icons/“.svg"
          />
          <img
            className="absolute bottom-[-14px] right-[11px] bg-[#21201c] px-2 py-1"
            src="icons/“.svg"
          />
        </div>
        <div className="flex justify-end">
          <div className="p-4 border-1 border-t-0">- Dr. Who</div>
        </div>
      </div>
    </div>
  );
};

export default BadiFirst;
