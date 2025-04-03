export const Media = () => {
  return (
    <div className="fixed top-0 left-[17px]">
      <div className="flex flex-col gap-2 max-w-[32px] w-[32px] items-center">
        <div className="w-[1px] h-[191px] bg-[#ABB2BF]" />
        <div className="flex flex-col gap-2 items-center">
          <img src="icons/github.svg" />
          <img src="icons/telegram.svg" />
          <img className="mt-[-3px]" src="icons/linkedin1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Media;
