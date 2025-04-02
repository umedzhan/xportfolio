import { Route, Routes } from "react-router-dom";
import Home from "/src/pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
