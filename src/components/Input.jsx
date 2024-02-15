import React from "react";

const Input = ({ label, state, setState, type, placeholder }) => {
  return (
    <div className="my-4 text-sm">
      <p className="mb-2">{label}</p>
      <input
        className="border-b w-full  opacity-80 outline-none focus:opacity-100 duration-200 placeholder:text-gray-500"
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default Input;
