import ReadMore from "./buttons/buttons";

export const AboutMe = () => {
  return (
    <div>
      <div className="flex justify-between gap-[209px]">
        <div className="flex gap-4 items-center w-full">
          <h1 id="about-me" className="text-[32px] whitespace-nowrap">
            <font className="main-color">#</font>about-me
          </h1>
          <div className="bg-[#f53003] w-full h-[1px]" />
        </div>
      </div>
      <div className="flex gap-[59px] justify-between">
        <div className="flex flex-col gap-5 mt-[23px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
          <span>Hello, I’m Umedjon!</span>
          <span>
            I’m a backend developer and IT enthusiast based in Termez,
            Uzbekistan. I specialize in building functional and efficient web
            applications using Laravel, PHP, MySQL, and SQLite. Additionally, I
            work with Vite and React to create modern and interactive front-end
            experiences.
          </span>
          <span>
            Creating innovative and practical solutions has been my passion for
            years. I continuously explore new technologies and frameworks to
            improve my skills and develop high-quality digital products.
          </span>
          <ReadMore url="https://t.me/ummedjon_karayev" />
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <img className="h-[508px]" src="images/iam2.png" />
            <img className="absolute top-[59px]" src="icons/Dots.svg" />
            <img
              className="absolute bottom-[172px] right-[16px]"
              src="icons/Dots.svg"
            />
          </div>
          <div className="h-[1px] w-[271px] bg-[#f53003]" />
        </div>
      </div>
    </div>
  );
};

export const AboutMe2 = () => {
  return (
    <div>
      <div className="flex justify-between gap-[209px]">
        <div className="flex gap-4 items-center w-full"></div>
      </div>
      <div className="flex gap-[59px] justify-between">
        <div className="flex flex-col gap-5 mt-[23px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
          <span>Hello, I’m Umedjon!</span>
          <span>
            I’m a backend developer and IT enthusiast based in Termez,
            Uzbekistan. I specialize in building functional and efficient web
            applications using Laravel, PHP, MySQL, and SQLite. Additionally, I
            work with Vite and React to create modern and interactive front-end
            experiences.
          </span>
          <span>
            Creating innovative and practical solutions has been my passion for
            years. I continuously explore new technologies and frameworks to
            improve my skills and develop high-quality digital products.
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <img className="h-[508px]" src="images/iam2.png" />
            <img className="absolute top-[59px]" src="icons/Dots.svg" />
            <img
              className="absolute bottom-[172px] right-[16px]"
              src="icons/Dots.svg"
            />
          </div>
          <div className="h-[1px] w-[271px] bg-[#f53003]" />
        </div>
      </div>
    </div>
  );
};
