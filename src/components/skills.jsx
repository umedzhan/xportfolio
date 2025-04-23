import { useTranslation } from "react-i18next";

const BlockSkills = ({ What, Skill }) => {
  return (
    <div>
      <div className="border-1 border-[#ABB2BF] p-2">{What}</div>
      <div className="flex gap-2 border-1 border-t-0 border-[#ABB2BF] p-2 flex-wrap">
        {Skill.map((skill, index) => {
          return (
            <div key={index} className="flex gap-4">
              <div>{skill}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full">
            <h1 className="text-[32px]">
              <font className="main-color">#</font>
              {t("skills")}
            </h1>
            <div className="bg-[#f53003] w-full h-[1px]" />
          </div>
        </div>
        <div className="flex gap-[59px] justify-between">
          <img className="ml-[32px] w-[349px]" src="images/skills.svg" />
          <div className="flex gap-4 mt-[31px]">
            <div>
              <BlockSkills
                What={t("languages")}
                Skill={["PHP", "JavaScript", "Python", "C++", "Python", "C#"]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <BlockSkills
                What={t("databases")}
                Skill={["MySQL", "PostgreSQL", "SQLite"]}
              />
              <BlockSkills What={t("other")} Skill={["HTML", "CSS"]} />
            </div>
            <div className="flex flex-col gap-4">
              <BlockSkills
                What={t("tools")}
                Skill={["Git", "GitHub", "Linux", "VSCode"]}
              />
              <BlockSkills
                What={t("frameworks")}
                Skill={["React", "Laravel"]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center w-full">
            <h1 className="text-[32px]">
              <font className="main-color">#</font>
              {t("skills")}
            </h1>
            <div className="bg-[#f53003] w-full h-[1px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[59px] justify-between">
          <img className="max-w-full w-full" src="images/skills.svg" />
          <div className="flex gap-4 mt-[31px] flex-col">
            <div>
              <BlockSkills
                What={t("languages")}
                Skill={["PHP", "JavaScript", "Python", "C++", "Python", "C#"]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <BlockSkills
                What={t("databases")}
                Skill={["MySQL", "PostgreSQL", "SQLite"]}
              />
              <BlockSkills What={t("other")} Skill={["HTML", "CSS"]} />
            </div>
            <div className="flex flex-col gap-4">
              <BlockSkills
                What={t("tools")}
                Skill={["Git", "GitHub", "Linux", "VSCode"]}
              />
              <BlockSkills
                What={t("frameworks")}
                Skill={["React", "Laravel"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Skills2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:flex flex-col gap-12">
        <div>
          <div className="flex gap-4 items-center w-full">
            <h1 className="text-[32px] font-medium">
              <font className="main-color">#</font>
              {t("skills")}
            </h1>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <BlockSkills
            What={t("languages")}
            Skill={["PHP", "JavaScript", "Python", "C++", "Python", "C#"]}
          />

          <BlockSkills
            What={t("databases")}
            Skill={["MySQL", "PostgreSQL", "SQLite"]}
          />
          <BlockSkills What={t("other")} Skill={["HTML", "CSS", "Tailwind"]} />

          <BlockSkills
            What={t("tools")}
            Skill={["Git", "GitHub", "Linux", "VSCode"]}
          />
          <BlockSkills What={t("frameworks")} Skill={["React", "Laravel"]} />
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden flex flex-col gap-12">
        <div>
          <div className="flex gap-4 items-center w-full">
            <h1 className="text-[32px] font-medium">
              <font className="main-color">#</font>skills
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <BlockSkills
            What={"Languages"}
            Skill={["PHP", "JavaScript", "Python", "C++", "Python", "C#"]}
          />

          <BlockSkills
            What="Databases"
            Skill={["MySQL", "PostgreSQL", "SQLite"]}
          />
          <BlockSkills What="Other" Skill={["HTML", "CSS", "Tailwind"]} />

          <BlockSkills
            What={"Tools"}
            Skill={["Git", "GitHub", "Linux", "VSCode"]}
          />
          <BlockSkills What="Frameworks" Skill={["React", "Laravel"]} />
        </div>
      </div>
    </>
  );
};
