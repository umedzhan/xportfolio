const BlockFacts = ({ Text }) => {
  return <span className="border-1 border-[#ABB2BF] p-2">{Text}</span>;
};

export const MyFunFacts = () => {
  return (
    <div className="flex flex-col gap-[26px]">
      <h1 className="text-[32px] font-medium">
        <font className="main-color">#</font>my-fun-facts
      </h1>
      <div className="flex flex-col justify-between gap-[156px]">
        <div className="flex flex-wrap gap-3">
          <BlockFacts Text="I like autumn more than other seasons" />
          <BlockFacts Text="I don't enjoy reading literary books" />
          <BlockFacts Text="I like learning new algorithms" />
          <BlockFacts Text="I enjoy writing code" />
          <BlockFacts Text="I'm interested in swimming, but I don't know how to swim yet" />
          <BlockFacts Text="I don't like playing football" />
          <BlockFacts Text="I don't like playing volleyball" />
          <BlockFacts Text="I only enjoy reading books related to my field" />
          <BlockFacts Text="I prefer spending time learning tech stuff over playing sports" />
        </div>
      </div>
    </div>
  );
};
