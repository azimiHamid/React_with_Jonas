/* eslint-disable react/prop-types */
const Option = ({ children, val }) => {
  return (
    <option
      style={{ backgroundColor: "#475569", color: "greenyellow" }}
      value={val}
    >
      {children}
    </option>
  );
};
export default Option