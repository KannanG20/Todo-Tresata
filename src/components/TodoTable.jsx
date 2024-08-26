import React, { useContext } from "react";
import TodoList from "./TodoList";
import Button from "./Button";
import { GlobalContextProvider } from "../context/GlobalContext";
import ReactSelect from "react-select";

function TodoTable() {
  const { setTodos } = useContext(GlobalContextProvider);

  const options = [
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
    { label: "All", value: "all" },
  ];

  const onChangeFilter = (e) => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (e.value === "completed") {
      let completedTodos = todos?.filter(
        (item) => item?.status === "completed"
      );
      setTodos(completedTodos);
    } else if (e.value === "pending") {
      let pendingTodos = todos?.filter((item) => item?.status === "pending");
      setTodos(pendingTodos);
    } else {
      setTodos(todos);
    }
  };

  return (
    <div className="flex flex-col gap-2 px-5">
      <div className="flex items-center pt-2">
        <ReactSelect
          className="min-w-44"
          defaultValue={options[2]}
          options={options}
          onChange={onChangeFilter}
        />
      </div>
      <TodoList />
    </div>
  );
}

export default TodoTable;
