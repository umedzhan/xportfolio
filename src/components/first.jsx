import { Link } from "react-router-dom";

export const First = () => {
  return (
    <>
      <div className="hidden md:flex justify-between">
        <div className="max-w-[537px] mt-[74px]">
          <h1 className="text-[32px] font-semibold">
            Karayev Umedjon is a <font className="main-color">front-end</font>{" "}
            and <font className="main-color">back-end</font> developer
          </h1>
          <p className="text-[#ABB2BF] mt-[32px]">
            He crafts responsive websites and web applications that are fast,
            accessible and user-friendly.
          </p>
          <Link to="/contacts">
            <button className="border-1 border-[#f53003] mt-[24px] px-4 py-2 cursor-pointer">
              Contact me!!
            </button>
          </Link>
        </div>
        <div className="relative">
          <img
            className="absolute right-4 bottom-[80px] z-20"
            src="icons/Dots.svg"
          />
          <img
            className="max-w-[469px] max-h-[386px] relative z-10"
            src="images/iam.png"
          />
          <img
            className="absolute left-0 top-[84px] z-0"
            src="icons/Logo.svg"
          />
          <div className="flex items-center gap-2 border-1 ml-[31px] mr-[36px] text-[16px] p-2 font-medium">
            <div className="bg-color bg-[#f53003] w-4 h-4" />
            <span>
              Currently working on{" "}
              <font className="font-semibold">Portfolio</font>
            </span>
          </div>
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden flex flex-col gap-3 justify-between">
        <div className="max-w-[537px] mt-[8px]">
          <h1 className="text-[32px] font-semibold">
            Karayev Umedjon is a <font className="main-color">front-end</font>{" "}
            and <font className="main-color">back-end</font> developer
          </h1>
          <p className="text-[#ABB2BF] mt-[32px]">
            He crafts responsive websites and web applications that are fast,
            accessible and user-friendly.
          </p>
          <Link to="/contacts">
            <button className="border-1 border-[#f53003] mt-[24px] px-4 py-2 cursor-pointer">
              Contact me!!
            </button>
          </Link>
        </div>
        <div className="relative w-full">
          <img
            className="absolute right-4 bottom-[80px] z-20"
            src="icons/Dots.svg"
          />
          <img
            className="max-w-full max-h-[386px] relative z-10"
            src="images/iam.png"
          />
          <img
            className="absolute left-0 top-[84px] z-0"
            src="icons/Logo.svg"
          />
          <div className="flex items-center gap-2 border-1 ml-[31px] mr-[36px] text-[16px] p-2 font-medium">
            <div className="bg-color bg-[#f53003] w-4 h-4 min-w-4 max-w-4" />
            <span>
              Currently working on{" "}
              <font className="font-semibold">Portfolio</font>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
