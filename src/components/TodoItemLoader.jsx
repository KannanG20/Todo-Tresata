import React from "react";

function TodoItemLoader() {
  return (
    <div className="w-full bg-gray-50 border border-gray-100 rounded-md p-4 flex justify-between items-center">
      <div className="h-2 w-[60%] bg-gray-200 animate-pulse"></div>
      <div className="flex gap-4 items-center">
        <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-md"></div>
        <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
}

export default TodoItemLoader;
