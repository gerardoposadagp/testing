// "use client";

// import { use } from "react";
import getData from "./GetData";

export default async function TodoList() {
  const todos = await getData();

// export default function TodoList({
//   todosPromise,
// }: {
//   todosPromise: Promise<any>;
// }) {
  // const todos = use(todosPromise);

  return (
    <ul>
      {todos.map((todo: { id: number; title: string; completed: boolean }) => (
          <li
            // onClick={() => {console.log("Todo clicked:", todo.title)}}
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
