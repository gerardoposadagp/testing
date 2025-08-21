import ConteoTareas from "@/app/nextjs/test4/conteo-tareas/ConteoTareas";
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

No hace nuevamente fetch pues se hace uso del contexto creado en el Layout 

`}
      </pre>

      <h1 className="text-center text-3xl font-bold mt-12">Conteo de Tareas</h1>
      <Suspense fallback={<div>Cargando... 3 segs de delay en código...</div>}>
        <ConteoTareas />
      </Suspense>
    </>
  );
}
