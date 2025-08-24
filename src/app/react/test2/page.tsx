"use client";

import { useState, useEffect } from "react";

export default function Reloj() {
  const [hora, setHora] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer); // limpieza
  }, []);

  if (!mounted) {
    return null; // o un placeholder/skeleton
  }

  return (
  <>
    <h2>{hora.toLocaleTimeString()}</h2>

    <div className="pt-10 text-xs">
      <hr />
      <pre>
        {`

"use client";

import { useState, useEffect } from "react";

export default function Reloj() {
  const [hora, setHora] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer); // limpieza
  }, []);

  if (!mounted) {
    return null; // o un placeholder/skeleton
  }
  return (
    <h2>{hora.toLocaleTimeString()}</h2>
    ....
  )

  ///////////////////////////////////////////////////////////////////////
  // Cuando pones [] vacío, el useEffect solo se ejecuta una vez, justo después
  // del primer renderizado del componente (cuando se "monta").
  // No se vuelve a ejecutar aunque el componente se vuelva a renderizar, 
  // salvo que se desmonte y monte de nuevo.
  // Esto es útil para optimizar el rendimiento de componentes que no necesitan
  // realizar efectos secundarios en cada renderizado.
  //
  // Sin [] (en cada render):
  // Como cada vez que setHora cambia la hora el componente se vuelve a renderizar,
  // el useEffect también se vuelve a ejecutar, lo que crea un nuevo setInterval
  // cada segundo. Terminas con muchos intervalos acumulados. El navegador se
  // llena de timers innecesarios → fuga de memoria y consumo de CPU.
  //
  // Resumen:
  // [] → solo al montar/desmontar.
  // [var1, var2] → se ejecuta cada vez que cambian esas variables.
  // nada (useEffect(() => {...})) → se ejecuta en cada render.
  `}
      </pre>
    </div>
  </>
  )
}
