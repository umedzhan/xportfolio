import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between pt-[32px] pb-[8px]">
      <Link to="/" className="flex gap-2 items-center">
        <img src="icons/logo.png" />
        <span className="text-[16px] font-bold">Karayev Umedjon</span>
      </Link>
      <div className="flex gap-[32px]">
        <a href="#home">
          <span className="main-color">#</span>
          home
        </a>
        <a href="#work">
          <span className="main-color">#</span>
          work
        </a>
        <a href="#about-me">
          <span className="main-color">#</span>
          about-me
        </a>
        <a href="#contacts">
          <span className="main-color">#</span>
          contacts
        </a>
      </div>
    </div>
  );
};

export default Header;
