"use client";

import { useState } from "react";

type TareaProps = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Tarea({ id, title, completed }: TareaProps) {
  const [done, setDone] = useState(completed);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setDone(!done);
    console.log("Guardar mutacion en db de id:", id);
  };

  return (
    <>
      <li
        onClick={(event) => handleClick(event)}
        key={id}
        className={`border-b border-gray-300 py-2 px-4 ${
          done ? "line-through" : ""
        }`}
      >
        {title}
      </li>
    </>
  );
}
