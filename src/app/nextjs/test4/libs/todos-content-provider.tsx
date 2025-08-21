"use client";

import React, { createContext, useContext } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosContextType {
  todosPromise: Promise<Todo[]>;
}

// Create context with default values
const TodosContext = createContext<TodosContextType | null>(null);

export function TodosContextProvider({
  children,
  todosPromise,
}: {
  children: React.ReactNode;
  todosPromise: Promise<Todo[]>;
}) {
  return (
    <TodosContext.Provider value={{ todosPromise: todosPromise }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      "useTodosContext must be used within a TodosContextProvider"
    );
  }
  return context;
}
