"use client";

import { use } from "react";
import { useTodosContext } from "./todos-content-provider";

export default function TodoList() {
  const { todosPromise } = useTodosContext();
  const todos = use(todosPromise);

  return (
    <ul>
      {todos.map((todo: { id: number; title: string; completed: boolean }) => (
          <li
            onClick={() => {console.log("Todo clicked:", todo.title)}}
            key={todo.id}
            className={`border-b border-gray-300 py-2 px-4 ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.title}
          </li>
        ))}
    </ul>
  );
}
