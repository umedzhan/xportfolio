import { useTranslation } from "react-i18next";

const BlockFacts = ({ Text }) => {
  return <span className="border-1 border-[#ABB2BF] p-2">{Text}</span>;
};

export const MyFunFacts = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[26px]">
      <h1 className="text-[32px] font-medium">
        <font className="main-color">#</font>
        {t("my-fun-facts")}
      </h1>
      <div className="flex flex-col justify-between gap-[156px]">
        <div className="flex flex-wrap gap-3">
          <BlockFacts Text={t("fun_facts.fact_1")} />
          <BlockFacts Text={t("fun_facts.fact_2")} />
          <BlockFacts Text={t("fun_facts.fact_3")} />
          <BlockFacts Text={t("fun_facts.fact_4")} />
          <BlockFacts Text={t("fun_facts.fact_5")} />
          <BlockFacts Text={t("fun_facts.fact_6")} />
          <BlockFacts Text={t("fun_facts.fact_8")} />
          <BlockFacts Text={t("fun_facts.fact_9")} />
        </div>
      </div>
    </div>
  );
};
