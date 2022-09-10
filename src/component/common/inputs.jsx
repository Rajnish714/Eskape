import React from "react";
const Input = ({ onChange, name, value, label, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        type={name}
        id={name}
        className="form-control"
        onChange={onChange}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
