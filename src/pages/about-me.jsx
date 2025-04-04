import { Link } from "react-router-dom";
import Header from "../components/header";
import { Skills2 } from "../components/skills";
import { AboutMe, AboutMe2 } from "../components/about-me";
import { Contacts } from "../components/contacts";
import { Footer } from "../components/footer";
import { Media } from "../components/media";
import { MyFunFacts } from "../components/my-fun-facts";

export const Home = () => {
  return (
    <div className="text-[#fff] bg-[#21201c]">
      <div className="mx-[171px]">
        <Media />
        <Header />
        <div className="mt-[53px]">
          <div className="flex flex-col gap-[14px]">
            <div className="font-semibold text-[32px]">
              <font className="main-color">/</font>about-me
            </div>
            <div>Who I am</div>
          </div>
        </div>
        <div className="h-[62px]" />
        <AboutMe2 />
        <div className="h-[112px]" />
        <Skills2 />
        <div className="h-[83px]" />
        <MyFunFacts />
        <div className="h-[162px]" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
