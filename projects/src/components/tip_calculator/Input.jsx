/* eslint-disable react/prop-types */
const Input = ({ onSetBill, bill, id, type }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      onSetBill(Number(value));
    }
  };

  return (
    <input
      onChange={handleChange}
      value={bill}
      className="text-slate-700"
      type={type}
      id={id}
    />
  );
};

export default Input;
