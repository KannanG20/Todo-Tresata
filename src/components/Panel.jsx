import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import TodoTable from "./TodoTable";
import { GlobalContextProvider } from "../context/GlobalContext";
import Button from "./Button";
import Input from "./Input";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Panel() {
  /*-------------------------- Local states --------------------------*/

  const [selectedItemValue, setSelectedItemValue] = useState(null);

  /*-------------------------- Context --------------------------*/

  const {
    selectedMultiTodoItem,
    completeAllTodos,
    deleteAllTodos,
    editTodo,
    selectedSingleTodoItem,
    setSelectedSingleTodoItem,
  } = useContext(GlobalContextProvider);

  /*-------------------------- useEffects --------------------------*/
  useEffect(() => {
    if (selectedSingleTodoItem) {
      setSelectedItemValue(selectedSingleTodoItem?.title);
    }
  }, [selectedSingleTodoItem]);

  return (
    <div className=" lg:w-[60%] w-full justify-between h-full rounded-md border customScroll overflow-y-auto border-gray-200 bg-white flex flex-col">
      <div>
        <Header />
        <TodoTable />
      </div>

      {/* Delete or mark completion */}
      {!selectedSingleTodoItem && selectedMultiTodoItem?.length > 0 && (
        <div className="flex gap-4 p-5 sticky bottom-0 w-full justify-end bg-white items-center">
          <Button
            onClick={completeAllTodos}
            variant={"outline"}
            text={"Mark Completed"}
          />
          <Button
            onClick={deleteAllTodos}
            variant={"outline"}
            text={"Delete"}
          />
        </div>
      )}

      {/* Edit Todo */}
      {selectedSingleTodoItem && (
        <form
          onSubmit={(e) =>
            editTodo(e, selectedSingleTodoItem?.id, selectedItemValue)
          }
          className="flex p-5 w-full items-center gap-2"
        >
          <div className="flex-1">
            <Input
              icon={<PencilIcon className="h-4 w-4 text-gray-400" />}
              value={selectedItemValue}
              onChange={(e) => setSelectedItemValue(e.target.value)}
            />
          </div>
          <Button type={"submit"} text={"Edit"} />
          <Button
            onClick={() => setSelectedSingleTodoItem(null)}
            variant={"outline"}
            text={<XMarkIcon className="h-4 w-4" />}
          />
        </form>
      )}
    </div>
  );
}

export default Panel;
