import React from "react";

function Button({ text, variant, ...args }) {
  const variants = {
    outline: "border border-teal-700 text-gray-900",
    default: "bg-teal-700 text-white",
  };
  return (
    <button
      {...args}
      className={`disabled:bg-gray-900/50 ${
        variant ? variants[variant] : variants["default"]
      } h-[36px] rounded-md px-3 py-2 w-max font-medium text-sm`}
    >
      {text}
    </button>
  );
}

export default Button;
