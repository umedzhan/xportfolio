export const Footer = () => {
  return (
    <div>
      <div className="h-[1px] bg-[#ABB2BF] mx-[-171px]" />
      <div className="pt-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex gap-[9px] items-center">
                <img className="w-4 h-4" src="icons/logo.png" />
                <span className="font-medium">Karayev</span>
              </div>
              <span className="text-[#ABB2BF]">karayev.umedjon@gmail.com</span>
            </div>
            <div>Back-end and front-end developer</div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-medium text-[24px]">Media</h1>
            <div className="flex gap-2 h-[32px] items-center">
              <div className="w-[32px]">
                <img className="" src="icons/github.svg" />
              </div>
              <div className="w-[32px]">
                <img src="icons/telegram.svg" />
              </div>
              <div className="w-[32px]">
                <img src="icons/linkedin.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center text-[#ABB2BF] pb-4">
        © Copyright 2025. Made by Karayev
      </div>
    </div>
  );
};

export default Footer;
