import Layout from "../components/Layout";
import CompleteApps from "../components/complete-apps";
import SmallProjects from "../components/small-projects";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="mt-[53px]">
        <div className="flex flex-col gap-[14px]">
          <div className="font-semibold text-[32px]">
            <font className="main-color">/</font>projects
          </div>
          <div>{t("list-of-my-projects")}</div>
        </div>
      </div>
      <div className="mt-[68px]" />
      <CompleteApps />
      <div className="mt-[81px]" />
      <div className="flex flex-col gap-12">
        <SmallProjects />
      </div>
      <div className="mt-[185px] md:mt-[50px]" />
    </Layout>
  );
};

export default Projects;
