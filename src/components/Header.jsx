import React, { useContext, useState } from "react";
import Button from "./Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { GlobalContextProvider } from "../context/GlobalContext";
import { generateRandomID } from "../utilities/RandomIDGenerator";
import Input from "./Input";

function Header() {
  /*---------------------- Local states -------------------------*/

  const [title, setTitle] = useState(null);

  /*---------------------- Context -------------------------*/

  const { todos, setUpdateTodo } = useContext(GlobalContextProvider);

  /*---------------------- Functions -------------------------*/

  const createTodo = (e) => {
    e.preventDefault();
    if (title && title !== "") {
      let allTodos = [
        ...todos,
        { title: title, status: "pending", id: generateRandomID() },
      ];
      localStorage.setItem("todos", JSON.stringify(allTodos));
      setUpdateTodo((prev) => !prev);
      setTitle("");
    }
  };

  return (
    <div className="flex justify-between md:flex-row flex-col gap-2 sticky border-b border-gray-200 top-0 bg-white p-5 items-center ">
      <h1 className="font-semibold text-xl">TODO List</h1>
      <form onSubmit={createTodo} className="flex gap-4 items-center">
        <div className="w-max">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Learn Threejs"
          />
        </div>
        <Button type={"submit"} text={"Add TODO"} />
      </form>
    </div>
  );
}

export default Header;
