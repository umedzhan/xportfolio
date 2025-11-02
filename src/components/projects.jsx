import { Link } from "react-router-dom";
import Live from "./buttons/live";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "zakhme",
      img: "images/zakhme_logo.png",
      tech: ["PHP", "MySQL"],
      title: "Zakhme Bot",
      desc: "Music Telegram Bot",
      url: "https://t.me/zakhme_bot",
    },
    {
      id: "yellow-1",
      img: "images/yellow-portfolio.png",
      tech: ["HTML", "CSS", "JS", "React"],
      title: "Yellow Portfolio",
      desc: "Template for portfolio",
      url: "https://yellow-portfolio-eta.vercel.app/",
    },
    {
      id: "yellow-2",
      img: "images/yellow-portfolio.png",
      tech: ["HTML", "CSS", "JS", "React"],
      title: "Yellow Portfolio",
      desc: "Template for portfolio",
      url: "https://yellow-portfolio-eta.vercel.app/",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full">
            <h1 id="work" className="text-[32px]">
              <span className="main-color">#</span>
              {t("projects")}
            </h1>
            <div className="bg-[#f53003] w-full h-[1px]" />
          </div>
          <div>
            <Link
              to="/projects"
              className="whitespace-nowrap text-[16px] font-medium"
            >
              {t("view_all")} {"~~>"}
            </Link>
          </div>
        </div>

        <div className="mt-12" />
        <div className="flex justify-between gap-4">
          {projects.map((p) => (
            <div key={p.id}>
              <img
                className="border border-[#ABB2BF]"
                src={p.img}
                alt={p.title}
              />
              <div className="border border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
                {p.tech.map((tch) => (
                  <span key={tch}>{tch}</span>
                ))}
              </div>
              <div className="border border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
                <h1>{p.title}</h1>
                <p className="text-[#ABB2BF]">{p.desc}</p>
                <Live url={p.url} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* For Mobile */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-full">
            <h1 id="work" className="text-[32px] text-sm">
              <span className="main-color">#</span>
              {t("projects")}
            </h1>
          </div>
          <div>
            <Link
              to="/projects"
              className="whitespace-nowrap text-[16px] font-medium"
            >
              {"~~>"}
            </Link>
          </div>
        </div>

        <div className="mt-12" />
        <div className="flex flex-col justify-between gap-4">
          {projects.map((p) => (
            <div key={`${p.id}-mobile`}>
              <img
                className="border border-[#ABB2BF]"
                src={p.img}
                alt={p.title}
              />
              <div className="border border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
                {p.tech.map((tch) => (
                  <span key={tch}>{tch}</span>
                ))}
              </div>
              <div className="border border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
                <h1>{p.title}</h1>
                <p className="text-[#ABB2BF]">{p.desc}</p>
                <Live url={p.url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
