import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";

function App() {
  return (
    <>
      <div className="h-screen p-5 lg:p-20 w-full bg-gray-100 flex justify-center items-center">
        <Panel />
      </div>
    </>
  );
}

export default App;
