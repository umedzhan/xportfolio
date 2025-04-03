import { SmallProjectsBlock } from "./elements/block-project";

export const SmallProjects = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="text-[32px] font-bold">
        <font className="main-color">#</font>small-projects
      </div>
      <div className="flex gap-4">
        <SmallProjectsBlock />
        <SmallProjectsBlock />
        <SmallProjectsBlock />
      </div>
      <div className="flex gap-4">
        <SmallProjectsBlock />
        <SmallProjectsBlock />
      </div>
    </div>
  );
};

export default SmallProjects;
