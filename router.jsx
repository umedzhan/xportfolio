import { Route, Routes } from "react-router-dom";
import Home from "/src/pages/home";
import Projects from "/src/pages/projects";
import AboutMe from "./src/pages/about-me";
import Contacts from "./src/pages/contacts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default Router;
