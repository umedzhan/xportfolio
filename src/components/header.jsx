import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between pt-[32px] pb-[8px]">
      <Link to="/" className="flex gap-2 items-center">
        <img src="icons/logo.png" />
        <span className="text-[16px] font-bold">Karayev Umedjon</span>
      </Link>
      <div className="flex gap-[32px]">
        <Link to={"/"} href="#home">
          <span className="main-color">#</span>
          home
        </Link>
        <Link to={"/projects"} href="#work">
          <span className="main-color">#</span>
          work
        </Link>
        <Link to={"/about-me"} href="#about-me">
          <span className="main-color">#</span>
          about-me
        </Link>
        <Link to={"/contacts"} href="#contacts">
          <span className="main-color">#</span>
          contacts
        </Link>
      </div>
    </div>
  );
};

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between pt-4 pb-2 text-white">
        <h1 className="flex items-center gap-2">
          <img src="icons/logo.png" width={16} /> Karayev Umedjon
        </h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src="icons/x.svg" size={28} />
          ) : (
            <img src="icons/menu.svg" size={28} />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed top-15 left-0 w-full h-full bg-[#21201c] text-white flex flex-col items-center justify-center gap-6 text-2xl z-50 transition-all duration-700"
          onClick={handleCloseMenu}
        >
          <Link
            to="/"
            className={
              location.pathname !== "/" ? "text-red-500" : "text=[#ABB2BF]"
            }
          >
            #home
          </Link>
          <Link
            to="/projects"
            className={
              location.pathname !== "/projects"
                ? "text-red-500"
                : "text=[#ABB2BF]"
            }
          >
            #works
          </Link>
          <Link
            to="/about-me"
            className={
              location.pathname !== "/about-me"
                ? "text-red-500"
                : "text=[#ABB2BF]"
            }
          >
            #about-me
          </Link>
          <Link
            to="/contacts"
            className={
              location.pathname !== "/contacts"
                ? "text-red-500"
                : "text=[#ABB2BF]"
            }
          >
            #contacts
          </Link>
        </div>
      )}
    </>
  );
};
