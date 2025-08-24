// sacó error al hacer build ->
// En Next.js 13+ con la convención App Router, los archivos
// page.tsx solo deben exportar:

// El componente de página por defecto
// Metadatos y otras configuraciones específicas de Next.js
// Vamos a mover estas funciones a un archivo separado y
// luego importarlas:

// Primero, creemos un nuevo archivo para las funciones:
// Created functions.ts

// Ahora, actualizemos la página para importar las funciones:

"use client";
import Code from "./code";
import {
  declaracionDeFuncion,
  funcionFlechaAsignadaAUnaConstante,
} from "./functions";

try {
  (() => {
    console.log(funcionFlechaAsignadaAUnaConstante());
  })();
} catch (err1) {
  console.log("Error atrapado:", err1);
}

try {
  console.log(declaracionDeFuncion());
} catch (error2) {
  console.error("Error:", error2);
}

const Page = () => {
  return (
    <>
      <div className="text-xl pb-5">{`function xyz() {...} VERSUS const xyz = () => {...}`}</div>
      <hr className="pb-5" />
      <Code />
    </>
  );
};

export default Page;
