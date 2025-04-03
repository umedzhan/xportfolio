export const SmallProjects = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="text-[32px] font-bold">
        <font className="main-color">#</font>small-projects
      </div>
      <div className="flex gap-4">
        <BlockProject />
        <BlockProject />
        <BlockProject />
      </div>
      <div className="flex gap-4">
        <BlockProject />
        <BlockProject />
      </div>
    </div>
  );
};

export default SmallProjects;
