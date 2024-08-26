import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { GlobalContextProvider } from "../context/GlobalContext";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import CustomTooltip from "./CustomTooltip";
import { motion } from "framer-motion";

function TodoItem({ title, id, status }) {
  /*---------------------- context -------------------------*/

  const {
    todos,
    setUpdateTodo,
    selectedMultiTodoItem,
    setSelectedMultiTodoItem,
    setSelectedSingleTodoItem,
  } = useContext(GlobalContextProvider);

  /*---------------------- Functions -------------------------*/

  // Update todo
  const updateTodo = () => {
    setSelectedSingleTodoItem({ title: title, id: id, status: status });
  };

  // Delete todo
  const deleteTodo = () => {
    let removedItems = todos.filter((item) => item?.id !== id);
    localStorage.setItem("todos", JSON.stringify(removedItems));
    setUpdateTodo((prev) => !prev);
  };

  // Mark todo status as completed
  const completeTodo = () => {
    let updatedTodos = todos?.map((item) => {
      if (item?.id === id) {
        return { ...item, status: "completed" };
      } else {
        return item;
      }
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setUpdateTodo((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className=" flex relative items-center"
    >
      {status === "completed" && (
        <CheckBadgeIcon className="h-5 w-5 text-teal-700 absolute -left-2 -top-2" />
      )}
      <div
        className={` bg-gray-50
        border-gray-100 rounded-md border shadow-sm w-full p-4 flex justify-between items-center`}
      >
        <span className="text-sm">{title}</span>
        <div className="flex gap-4 items-center">
          {status !== "completed" && (
            <CustomTooltip uniqueId={id} content={"Edit Todo"}>
              <PencilSquareIcon
                onClick={updateTodo}
                className="h-5 w-5 text-gray-400 cursor-pointer"
              />
            </CustomTooltip>
          )}
          <CustomTooltip uniqueId={id} content={"Delete Todo"}>
            <TrashIcon
              onClick={deleteTodo}
              className="h-5 w-5 text-red-400 cursor-pointer"
            />
          </CustomTooltip>
          {status !== "completed" && (
            <CustomTooltip uniqueId={id} content={"Mark completed"}>
              <CheckIcon
                onClick={completeTodo}
                className="h-5 w-5 text-teal-400 cursor-pointer"
              />
            </CustomTooltip>
          )}
        </div>
      </div>

      <div
        className={`bg-gray-50
         rounded-r-md flex justify-center items-center p-2`}
      >
        <input
          type="checkbox"
          checked={selectedMultiTodoItem?.includes(id)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedMultiTodoItem((prev) => {
                if (prev?.length > 0) {
                  return [...prev, id];
                } else {
                  return [id];
                }
              });
            } else {
              let removedIdList = selectedMultiTodoItem?.filter(
                (item) => item !== id
              );
              setSelectedMultiTodoItem(removedIdList);
            }
          }}
          className="border-none outline-none ring-0 ring-offset-0 ring-gray-400 border-gray-400"
        />
      </div>
    </motion.div>
  );
}

export default TodoItem;
