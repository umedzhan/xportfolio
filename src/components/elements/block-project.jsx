import Live from "../buttons/live";

const Button = ({ Text, Url }) => {
  return (
    <a
      href={Url}
      className="flex items-center justify-center h-[37px] border-1 border-[#f53003] px-4 font-medium transition-all w-fit hover:bg-[#483234]"
    >
      {Text}
    </a>
  );
};

export const BlockProject = () => {
  return (
    <>
      <div className="hidden md:block w-[30%]">
        <img
          className="border-1 border-[#ABB2BF]"
          src="images/yellow-portfolio.png"
        />
        <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
          <span>React</span>
        </div>
        <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
          <h1>Yellow Portfolio</h1>
          <p className="text-[#ABB2BF]">Template for portfolio</p>
          <Live url="https://yellow-portfolio-eta.vercel.app/" />
        </div>
      </div>

      {/* For Mobile */}

      <div className="md:hidden">
        <img
          className="border-1 border-[#ABB2BF]"
          src="images/yellow-portfolio.png"
        />
        <div className="border-1 border-t-0 border-[#ABB2BF] flex gap-2 text-[16px] text-[#ABB2BF] p-2">
          <span>HTML</span>
          <span>CSS</span>
          <span>JS</span>
          <span>React</span>
        </div>
        <div className="border-1 border-t-0 border-[#ABB2BF] p-4 flex flex-col gap-4">
          <h1>Yellow Portfolio</h1>
          <p className="text-[#ABB2BF]">Template for portfolio</p>
          <Live url="https://yellow-portfolio-eta.vercel.app/" />
        </div>
      </div>
    </>
  );
};

export const SmallProjectsBlock = () => {
  return (
    <div className="flex flex-col">
      <div className="border-1 border-[#ABB2BF] p-2 text-[#ABB2BF]">
        TelegramPHP PHP SQL
      </div>
      <div className="flex flex-col gap-4 border-1 border-t-0 border-[#ABB2BF] p-4">
        <h1 className="font-medium text-[32px]">TelegramPHP</h1>
        <div>Start creating your own Telegram bot</div>
        <div>
          <Button
            Text="Github <~>"
            Url="https://github.com/umedzhan/telegram-php"
          />
        </div>
      </div>
    </div>
  );
};

export default BlockProject;
