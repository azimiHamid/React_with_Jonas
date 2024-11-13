/* eslint-disable react/prop-types */
import Option from "./Option";

const Select = ({ options, setTip, tip, id }) => {
  return (
    <select
      onChange={(e) => setTip(Number(e.target.value))}
      value={tip}
      id={id}
    >
      {options.map((opt, idx) => (
        <Option key={idx} val={opt.value}>
          {opt.label}
        </Option>
      ))}
    </select>
  );
};

export default Select;
