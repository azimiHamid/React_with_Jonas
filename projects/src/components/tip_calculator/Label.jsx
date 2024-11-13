/* eslint-disable react/prop-types */
const Label = ({ children, htmlFor }) => {
  return (
    <label className="" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
