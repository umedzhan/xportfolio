import Live from "./buttons/live";
import BlockProject from "./elements/block-project";

export const CompleteApps = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="text-[32px] font-bold">
        <font className="main-color">#</font>complete-apps
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

export default CompleteApps;
