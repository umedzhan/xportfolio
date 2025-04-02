import { Link } from "react-router-dom";
import Header from "../components/header";
import First from "../components/first";
import BadiFirst from "../components/badi-first";
import Projects from "../components/projects";
import { Skills } from "../components/skills";
import { AboutMe } from "../components/about-me";

export const Home = () => {
  return (
    <div className="text-[#fff] bg-[#21201c]">
      <div className="mx-[171px]">
        <Header />
        <div className="h-[62px]" />
        <First />
        <div className="h-[112px]" />
        <BadiFirst />
        <div className="h-[74px]" />
        <Projects />
        <div className="h-[106px]" />
        <Skills />
        <div className="h-[112px]" />
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
