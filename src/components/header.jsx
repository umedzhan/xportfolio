import { Link } from "react-router-dom";

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
  return (
    <div>
      <div className="h-12"></div>
      <div className="fixed top-0 [width:calc(100%-16px)]">
        <div className="flex justify-between">
          <div>Karayev Umedjon</div>
          <div className="h-4 w-4 bg-red-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};
