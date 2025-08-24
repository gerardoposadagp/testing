const Code = () => {
  // export default function Code() {
  return (
    <div className="pt-10 text-xs" style={{ display: "flex" }}>
      <hr />
      <div>
        <pre>
          {`

"use client";

import { useState } from "react";
import Code from "./code";

const Page = () => {
  console.log("**** Tema1 Test 1 rendered");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="text-xl pb-5">useState - Contador boton</div>
      <hr className="pb-5" />
      <p>
        Contador: <span>{count}</span>
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-5"
        onClick={increment}
      >
        Incrementar
      </button>
      <Code />
    </>
  );
};

export default Page;

    `}
        </pre>
      </div>
      <div>
        <pre>
          {`

  Flujo:
  ------
  - Al inicio → count = 0 → render inicial.

  - Haces clic → setCount(1) → nuevo render.

  - Cada vez que haces clic → otro render.

  Si este componente tuviera un padre que se re-renderiza, 
  este hijo también se renderizaría aunque count no cambie.

  ¿Cuándo se renderiza un componente?
  ------------------------------------
  >>> Al montar (mount):
  Siempre que React coloca el componente por primera vez en 
  el DOM.
  → Render inicial.

  >>> Cuando cambian las props:
  Si el padre le pasa nuevas props, React vuelve a renderizar 
  ese componente.

  >>> Cuando cambia el estado (useState):
  Si llamas a setState (o setAlgo), React agenda un re-render.
  Ojo: React compara el nuevo valor con el anterior; 
  si es igual, no vuelve a renderizar.

  >>> Cuando cambia un contexto (useContext):
  Si el contexto al que está suscrito cambia, React 
  re-renderiza.

  >>> Cuando un padre se renderiza:
  Aunque las props no cambien, React también renderiza los 
  hijos por defecto (a menos que uses memo para optimizar).

  En desarrollo, con React Strict Mode, los componentes 
  pueden renderizarse dos veces seguidas en el montaje 
  para detectar efectos secundarios no seguros. 
  (Esto no pasa en producción).

    `}
        </pre>
      </div>
    </div>
  );
};

export default Code;
