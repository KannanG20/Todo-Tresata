import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

function Input({ value, onChange, ...args }) {
  return (
    <div className="flex w-full items-center gap-2 border-gray-200 h-[36px] border px-3 py-2 rounded-md">
      {args?.icon ? args?.icon : <PlusIcon className="h-4 w-4 text-gray-400" />}
      <input
        value={value}
        onChange={onChange}
        className=" outline-none placeholder:text-gray-400 w-full placeholder:text-sm"
        {...args}
      />
    </div>
  );
}

export default Input;
