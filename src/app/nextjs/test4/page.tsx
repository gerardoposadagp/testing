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

Combinar el fetch asincrono desde el layout con un context provider para manejar
el estado global de la aplicación, permitiendo que los datos se compartan entre
los componentes sin necesidad de volver a fetcharlos.
Se pasa la promesa (todosPromise) al context provider.
Spread arround to any component that will need it

requiere -> export const dynamic = "force-dynamic"; en getData.tsx o de lo
contrario al hacer build lo convierte en estatico

en este caso en build con que se cargue una vez la data,
ya no vuelve a hacer el fetch por el context provider

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
