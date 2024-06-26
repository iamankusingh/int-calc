import React from "react";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <>
      <header className="p-4 text-center dark:bg-slate-800">
        <h1 className="text-2xl font-bold text-indigo-800 dark:text-sky-200">
          Interest Calculator
        </h1>
      </header>

      <Calculator />
    </>
  );
};

export default App;
