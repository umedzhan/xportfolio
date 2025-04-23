export const SelectLang = ({ Value, onChange }) => {
  return (
    <select
      className="text-[#ABB2BF] bg-[#21201c] outline-none"
      value={Value}
      onChange={onChange}
    >
      <option value="en">EN</option>
      <option value="tj">TJ</option>
      {/* <option value="uz">UZ</option> */}
    </select>
  );
};

export default SelectLang;
