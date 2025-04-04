const BlockFacts = ({ Text }) => {
  return <span className="border-1 border-[#ABB2BF] p-2">{Text}</span>;
};

export const MyFunFacts = () => {
  return (
    <div className="flex flex-col gap-[26px]">
      <h1 className="text-[32px] font-medium">
        <font className="main-color">#</font>my-fun-facts
      </h1>
      <div className="flex justify-between gap-[156px]">
        <div className="flex flex-wrap gap-3">
          <BlockFacts Text="I like winter more than summer" />
          <BlockFacts Text="I do'nt like to read books" />
          <BlockFacts Text="I like to play video games" />
          <BlockFacts Text="I like to play basketball" />
          <BlockFacts Text="I like to play football" />
          <BlockFacts Text="I like to play volleyball" />
          <BlockFacts Text="I like to play basketball" />
          <BlockFacts Text="I like to play football" />
          <BlockFacts Text="I like to play volleyball" />
        </div>
        <img src="icons/Logo.svg" />
      </div>
    </div>
  );
};
