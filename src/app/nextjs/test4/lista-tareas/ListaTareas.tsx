"use client";

// se requiere pues el contexto esta en el cliente 
 // Attempted to call useTodosContext() from the server 
 // but useTodosContext is on the client.
 //  It's not possible to invoke a client function from the server,
 //  it can only be rendered as a Component or passed to props of a Client Component.

import { use, useState } from "react";
import { useTodosContext } from "../libs/todos-content-provider";
import { MouseEvent } from "react";
import Tarea from "./Tarea";

export default function ListaTareas() {
  const { todosPromise } = useTodosContext();
  const todos = use(todosPromise);

  return (
    <ul>
      {todos.map((todo: { id: number; title: string; completed: boolean }) => (
        <Tarea key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
