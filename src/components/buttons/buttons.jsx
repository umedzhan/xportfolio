export const ReadMore = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex border-1 border-[#f53003] px-4 py-2 max-w-[148px] max-h-[37px] items-center justify-center text-[16px] hover:bg-[#483234] whitespace-nowrap text-white"
    >
      Read more {"->"}
    </a>
  );
};

export default ReadMore;
