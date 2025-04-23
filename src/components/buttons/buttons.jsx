import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ReadMore = () => {
  const { t } = useTranslation();
  return (
    <Link
      to="/about-me"
      className="flex border-1 border-[#f53003] transition-all px-4 py-2 max-w-[148px] max-h-[37px] items-center justify-center text-[16px] hover:bg-[#483234] whitespace-nowrap text-white"
    >
      {t("read_more")} {"->"}
    </Link>
  );
};

export default ReadMore;
