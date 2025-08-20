import TodoList from "@/app/nextjs/test2/libs/TodoList";
// import GetData from "./libs/GetData";
import { Suspense } from "react";

export default function Home() {
  // const todosPromise = GetData();

  return (
    <>
      <div className="text-xl pb-5">
        fetch asincrono (SSR) vs use (CSR) - funciona parcialmente
      </div>
      <hr className="pb-5" />
      <pre className="text-sm text-gray-600">
        {`En este ejemplo se hace un fetch a través del componente GetData, de manera asincrona,
delviendo un JSON, el cual es renderizado por el componente TodoList
(componente es SSR), que está inserto en esta pagina, envuelto en un Suspense
para que muestre un estado de carga mientras se obtienen los datos.

El problema viene cuando se tratar de colocar un onClick en el li no funciona
como se espera. La razon es que:

Regla general en Next.js:
  En Server Components (por defecto):
    No puedes usar useState, useEffect, useLayoutEffect, useRef, useReducer.
  En Client Components (pones "use client" arriba):
    Puedes usar todos los hooks de React sin problema.

`}
      </pre>
      <br />
      <a href="https://www.youtube.com/watch?v=bKm1rNaCFOo" target="_blank">
        Video origen
      </a>

      <h1 className="text-center text-3xl font-bold mt-12">Todo App</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        {/* <TodoList todosPromise={todosPromise} /> */}
        <TodoList />
      </Suspense>
    </>
  );
}
