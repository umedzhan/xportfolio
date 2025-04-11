import { Link } from "react-router-dom";
import Media from "../components/media";
import { Header, MobileHeader } from "../components/header";
import Footer from "../components/footer";
import CompleteApps from "../components/complete-apps";
import SmallProjects from "../components/small-projects";

export const Projects = () => {
  return (
    <>
      <div className="hidden md:block text-[#fff] bg-[#21201c]">
        <div className="mx-[171px]">
          <Media />
          <Header />
          <div className="mt-[53px]">
            <div className="flex flex-col gap-[14px]">
              <div className="font-semibold text-[32px]">
                <font className="main-color">/</font>projects
              </div>
              <div>List of my projects</div>
            </div>
          </div>
          <div className="mt-[68px]" />
          <CompleteApps />
          <div className="mt-[81px]" />
          <div className="flex flex-col gap-12">
            <SmallProjects />
          </div>
          <div className="mt-[185px]" />
          <Footer />
        </div>
      </div>
      {/* For Mobile */}
      <div className="md:hidden text-[#fff] bg-[#21201c]">
        <div className="mx-[8px]">
          <MobileHeader />
          <div className="mt-[53px]">
            <div className="flex flex-col gap-[14px]">
              <div className="font-semibold text-[32px]">
                <font className="main-color">/</font>projects
              </div>
              <div>List of my projects</div>
            </div>
          </div>
          <div className="mt-[68px]" />
          <CompleteApps />
          <div className="mt-[81px]" />
          <div className="flex flex-col gap-12">
            <SmallProjects />
          </div>
          <div className="mt-[185px]" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Projects;
