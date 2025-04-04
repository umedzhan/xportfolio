export const Media = () => {
  return (
    <div className="fixed top-0 left-[17px]">
      <div className="flex flex-col gap-2 max-w-[32px] w-[32px] items-center">
        <div className="w-[1px] h-[191px] bg-[#ABB2BF]" />
        <div className="flex flex-col gap-2 items-center">
          <a href="https://github.com/umedzhan" target="_blank">
            <img src="icons/github.svg" />
          </a>
          <a href="https://t.me/umezhon" target="_blank">
            <img src="icons/telegram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/umedjon-karayev-925009320"
            target="_blank"
          >
            <img className="mt-[-3px]" src="icons/linkedin1.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
