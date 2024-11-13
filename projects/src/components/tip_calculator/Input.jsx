/* eslint-disable react/prop-types */
const Input = ({ setBill, value, id, type }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setBill(Number(value));
    }
  };

  return (
    <input
      onChange={handleChange}
      value={value}
      className="text-slate-700"
      type={type}
      id={id}
    />
  );
};

export default Input;
