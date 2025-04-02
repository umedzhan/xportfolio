export const Live = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex border-1 border-[#f53003] px-4 py-2 max-w-[115px] max-h-[37px] items-center justify-center text-[16px] hover:bg-[#483234]"
    >
      Live {"<~>"}
    </a>
  );
};

export default Live;
