import { Route, Routes } from "react-router-dom";
import Home from "/src/pages/home";
import Projects from "/src/pages/projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Router;
