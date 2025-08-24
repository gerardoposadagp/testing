"use client";

import { use } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoList({
  todosPromise,
}: {
  todosPromise: Promise<Todo[]>;
}) {
  const todos = use(todosPromise);

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li
          onClick={() => {
            console.log("Todo clicked:", todo.title);
          }}
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
