"use client";

import { useState } from "react";
import Code from "./code";

const Page = () => {
  // console.log("**** Tema1 Test 1 rendered");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="text-xl pb-5">useState - Contador boton</div>
      <hr className="pb-5" />
      <p>
        Contador: <span>{count}</span>
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-5"
        onClick={increment}
      >
        Incrementar
      </button>
      <Code />
    </>
  );
};

export default Page;
