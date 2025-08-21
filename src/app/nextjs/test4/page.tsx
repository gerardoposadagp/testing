import TodoList from "@/app/nextjs/test4/libs/TodoList";
import { Suspense } from "react";

export default function Home() {

  return (
    <>
      <div className="text-xl pb-5">
        fetch asincrono (SSR) vs use (CSR) - funciona parcialmente
      </div>
      <hr className="pb-5" />
      <pre className="text-sm">
        {`
Combinar el fetch asincrono desde el layout con un context provider para manejar el estado global de la aplicación.
To spread arround the data on the client side
Se pasa la promesa (todosPromise) a un context provider 
spread arround to any component that will need it
`}
      </pre>
      <br />
      <a href="https://www.youtube.com/watch?v=bKm1rNaCFOo" target="_blank">
        Video origen
      </a>

      <h1 className="text-center text-3xl font-bold mt-12">Todo App</h1>
      <Suspense fallback={<div>Cargando... 3 segs de delay en código...</div>}>
        <TodoList />
      </Suspense>
    </>
  );
}
