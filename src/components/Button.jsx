import React from "react";

const Button = ({ text, blue, onClick }) => {
  return (
    <div>
      <button
        className={
          blue
            ? "text-sm rounded-md hover:text-theme hover:bg-white bg-theme text-white text-center my-2 p-2 w-full border-[1px] border-theme flex justify-center items-center h-auto"
            : "text-sm rounded-md text-theme bg-white hover:bg-theme hover:text-white text-center my-2 p-2 w-full border-[1px] border-theme flex justify-center items-center h-auto"
        }
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;