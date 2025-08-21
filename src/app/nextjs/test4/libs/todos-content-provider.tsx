"use client";

import React, { createContext, useContext } from "react";

interface TodosContextType {
  todosPromise: Promise<any[]>;
}

// Create context with default values
const TodosContext = createContext<TodosContextType | null>(null);

export function TodosContextProvider({
  children,
  todosPromise,
}: {
  children: React.ReactNode;
  todosPromise: Promise<any[]>;
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
