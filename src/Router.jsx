import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import AboutMe from "./pages/about-me";
import Contacts from "./pages/contacts";
import NotFound from "./pages/404";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
