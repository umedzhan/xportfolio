import Live from "./buttons/live";
import BlockProject from "./elements/block-project";
import { useTranslation } from "react-i18next";

export const CompleteApps = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:flex flex-col gap-12">
        <div className="text-[32px] font-bold">
          <font className="main-color">#</font>
          {t("complete-apps")}
        </div>
        <div className="flex gap-4">
          <BlockProject />
          <BlockProject />
          <BlockProject />
        </div>
        <div className="flex gap-4">
          <BlockProject />
          <BlockProject />
        </div>
      </div>
      {/* For Mobile */}
      <div className="md:hidden flex flex-col gap-12">
        <div className="text-[32px] text-sm font-bold">
          <font className="main-color">#</font>
          {t("complete-apps")}
        </div>
        <div className="flex flex-col gap-4">
          <BlockProject />
          <BlockProject />
          <BlockProject />
          <BlockProject />
          <BlockProject />
        </div>
      </div>
    </>
  );
};

export default CompleteApps;
