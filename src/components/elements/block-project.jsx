import Live from "../buttons/live";

export const BlockProject = () => {
  return (
    <div className="w-[30%]">
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
  );
};

export default BlockProject;
