import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { GlobalContextProvider } from "../context/GlobalContext";
import TodoItemLoader from "./TodoItemLoader";

function TodoList() {
  const { todos, loading } = useContext(GlobalContextProvider);

  return (
    <div className="flex flex-col gap-2 h-full ">
      {loading ? (
        Array.from({ length: 3 }).map((item) => <TodoItemLoader />)
      ) : todos?.length > 0 ? (
        todos?.map((item, index) => (
          <TodoItem
            title={item?.title}
            status={item?.status}
            id={item?.id}
            key={index}
          />
        ))
      ) : (
        <div className="h-full py-20 w-full flex justify-center items-center">
          <span className="text-gray-400 text-sm">No Todo Found.</span>
        </div>
      )}
    </div>
  );
}

export default TodoList;
