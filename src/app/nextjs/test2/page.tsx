import TodoList from "@/app/nextjs/test2/libs/TodoList";
import GetData from "./libs/GetData";
import { Suspense } from "react";

export default function Home() {
  const todosPromise = GetData();

  return (
    <>
      <div className="text-xl pb-5">
        fetch asincrono (SSR) vs use (CSR) - funciona parcialmente
      </div>
      <hr className="pb-5" />
      <pre className="text-sm">
        {`
Esta es la forma correcta de combinar el fetch asincrono pero no con useState sino con use 
para poder tener acceso a los eventos del lado del cliente, como un onClick event.

requiere -> export const dynamic = "force-dynamic"; en getData.tsx o de lo
contrario al hacer build lo convierte en estatico

en todo caso en build cada vez que se vuelve a esta pagina se vuelve a hacer el fetch

`}
      </pre>
      <br />
      <a href="https://www.youtube.com/watch?v=bKm1rNaCFOo" target="_blank">
        Video origen
      </a>

      <h1 className="text-center text-3xl font-bold mt-12">Todo App</h1>
      <Suspense fallback={<div>Cargando... 3 segs de delay en código...</div>}>
        <TodoList todosPromise={todosPromise} />
      </Suspense>
    </>
  );
}
