import { Link } from "react-router-dom";
import Live from "./buttons/live";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between gap-[209px]">
          <div className="flex gap-4 items-center w-full">
            <h1 id="work" className="text-[32px]">
              <font className="main-color">#</font>
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
          <div>
            <img
              className="border-1 border-[#ABB2BF]"
              src="images/yellow-portfolio.png"
            />
            <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>React</span>
            </div>
            <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
              <h1>Yellow Portfolio</h1>
              <p className="text-[#ABB2BF]">Template for portfolio</p>
              <Live url="https://yellow-portfolio-eta.vercel.app/" />
            </div>
          </div>
          <div>
            <img
              className="border-1 border-[#ABB2BF]"
              src="images/yellow-portfolio.png"
            />
            <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>React</span>
            </div>
            <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
              <h1>Yellow Portfolio</h1>
              <p className="text-[#ABB2BF]">Template for portfolio</p>
              <Live url="https://yellow-portfolio-eta.vercel.app/" />
            </div>
          </div>
          <div>
            <img
              className="border-1 border-[#ABB2BF]"
              src="images/yellow-portfolio.png"
            />
            <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>React</span>
            </div>
            <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
              <h1>Yellow Portfolio</h1>
              <p className="text-[#ABB2BF]">Template for portfolio</p>
              <Live url="https://yellow-portfolio-eta.vercel.app/" />
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-full">
            <h1 id="work" className="text-[32px] text-sm">
              <font className="main-color">#</font>
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
          <div>
            <img
              className="border-1 border-[#ABB2BF]"
              src="images/yellow-portfolio.png"
            />
            <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>React</span>
            </div>
            <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
              <h1>Yellow Portfolio</h1>
              <p className="text-[#ABB2BF]">Template for portfolio</p>
              <Live url="https://yellow-portfolio-eta.vercel.app/" />
            </div>
          </div>
          <div>
            <img
              className="border-1 border-[#ABB2BF]"
              src="images/yellow-portfolio.png"
            />
            <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>React</span>
            </div>
            <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
              <h1>Yellow Portfolio</h1>
              <p className="text-[#ABB2BF]">Template for portfolio</p>
              <Live url="https://yellow-portfolio-eta.vercel.app/" />
            </div>
          </div>
          <div>
            <img
              className="border-1 border-[#ABB2BF]"
              src="images/yellow-portfolio.png"
            />
            <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>React</span>
            </div>
            <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
              <h1>Yellow Portfolio</h1>
              <p className="text-[#ABB2BF]">Template for portfolio</p>
              <Live url="https://yellow-portfolio-eta.vercel.app/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
