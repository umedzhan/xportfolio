import { SmallProjectsBlock } from "./elements/block-project";
import { useTranslation } from "react-i18next";

export const SmallProjects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:flex flex-col gap-12">
        <div className="text-[32px] font-bold">
          <font className="main-color">#</font>
          {t("small-projects")}
        </div>
        <div className="flex gap-4">
          <SmallProjectsBlock />
          <SmallProjectsBlock />
          <SmallProjectsBlock />
        </div>
        <div className="flex gap-4">
          <SmallProjectsBlock />
          <SmallProjectsBlock />
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden flex flex-col gap-12">
        <div className="text-[32px] font-bold">
          <font className="main-color">#</font>
          {t("small-projects")}
        </div>
        <div className="flex flex-col gap-4">
          <SmallProjectsBlock />
          <SmallProjectsBlock />
          <SmallProjectsBlock />
          <SmallProjectsBlock />
          <SmallProjectsBlock />
        </div>
      </div>
    </>
  );
};

export default SmallProjects;
