import React, { createContext, useEffect, useState } from "react";

export const GlobalContextProvider = createContext();

function GlobalContext({ children }) {
  /*---------------------------- Local states ----------------------------*/

  const [selectedMultiTodoItem, setSelectedMultiTodoItem] = useState(null);
  const [selectedSingleTodoItem, setSelectedSingleTodoItem] = useState(null);

  const [updateTodo, setUpdateTodo] = useState(true);

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  /*---------------------------- useEffects ----------------------------*/

  useEffect(() => {
    getTodos();
  }, [updateTodo]);

  /*---------------------------- Functions ----------------------------*/

  const getTodos = () => {
    const inLocalStorage = JSON.parse(localStorage.getItem("todos"));
    if (inLocalStorage?.length > 0) {
      setTodos(inLocalStorage);
    } else {
      setTodos([]);
    }
    setLoading(false);
  };

  const completeAllTodos = () => {
    if (selectedMultiTodoItem?.length > 0) {
      let updatedTodos = todos.map((item) => {
        if (selectedMultiTodoItem?.includes(item?.id)) {
          return { ...item, status: "completed" };
        } else {
          return item;
        }
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setUpdateTodo((prev) => !prev);
      setSelectedMultiTodoItem([]);
    }
  };

  const deleteAllTodos = () => {
    if (selectedMultiTodoItem?.length > 0) {
      let updatedTodos = todos?.filter(
        (item) => !selectedMultiTodoItem?.includes(item?.id)
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setUpdateTodo((prev) => !prev);
      setSelectedMultiTodoItem([]);
    }
  };

  const editTodo = (e, id, value) => {
    e.preventDefault();
    if (value && value !== "") {
      let updatedTodo = todos.map((item) => {
        if (item?.id === id) {
          return { ...item, title: value };
        } else {
          return item;
        }
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      setUpdateTodo((prev) => !prev);
      setSelectedSingleTodoItem(null);
    }
  };

  return (
    <GlobalContextProvider.Provider
      value={{
        selectedMultiTodoItem,
        setSelectedMultiTodoItem,
        selectedSingleTodoItem,
        setSelectedSingleTodoItem,
        updateTodo,
        setUpdateTodo,
        todos,
        setTodos,
        completeAllTodos,
        deleteAllTodos,
        editTodo,
        loading,
      }}
    >
      {children}
    </GlobalContextProvider.Provider>
  );
}

export default GlobalContext;
