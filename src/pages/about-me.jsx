import Layout from "../components/Layout";
import { Skills2 } from "../components/skills";
import { AboutMe2 } from "../components/AboutSection";
import { MyFunFacts } from "../components/my-fun-facts";
import { useTranslation } from "react-i18next";

export const AboutMePage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="mt-[53px]">
        <div className="flex flex-col gap-[14px]">
          <div className="font-semibold text-[32px]">
            <font className="main-color">/</font>about-me
          </div>
          <div>{t("who_i_am")}</div>
        </div>
      </div>
      <div className="h-[62px]" />
      <AboutMe2 />
      <div className="h-[112px]" />
      <Skills2 />
      <div className="h-[83px]" />
      <MyFunFacts />
      <div className="h-[162px] md:h-[50px]" />
    </Layout>
  );
};

export default AboutMePage;
