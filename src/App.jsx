import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Router from "../router";
import { useTranslation } from "react-i18next";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
