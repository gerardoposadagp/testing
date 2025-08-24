"use client";

import { use } from "react";
import { useTodosContext } from "../libs/todos-content-provider";

export default function ConteoTareas() {
  const { todosPromise } = useTodosContext();
  const todos = use(todosPromise);
  todos.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <ul>
        {todos.map((todo: { id: number; title: string; completed: boolean }, i: number) => (
        <li
          onClick={() => {
            console.log("Todo clicked:", todo.title);
          }}
          key={todo.id}
          className={`border-b border-gray-300 py-2 px-4 ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {i + 1} / {todo.id} - {todo.title}
        </li>
      ))}
    </ul>
  );
}
