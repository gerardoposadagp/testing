const Code = () => {
  // export default function Code() {
  return (
    <div className="text-xs" style={{ display: "flex", verticalAlign: "top" }}>
      <hr />
      <div>
        <pre>
          {`

"use client";
import Code from "./code";

////////////////////////////////////////////////////////////
//
// Ambas funciones (declaracion de funcion y funcion flecha) 
// están en el mismo archivo pero al final 
// 
// Esta es una llamada a una funcion flecha - No hay hoisting → 
// no puedes llamarla antes de la línea donde se define. 
// Por eso saca error. Ver log de la consola en el browser.

try {
  (() => {
    console.log(`}
          <span style={{ color: "red" }}>
            funcionFlechaAsignadaAUnaConstante()
          </span>
          {`);
  })();
} catch (err1) {
  console.log("Error atrapado:", err1);
}

////////////////////////////////////////////////////////////
// 
// Esta es una llamada a una declaración de función - 
// No hay problema con el hoisting. la función se "eleva",
// es decir, puedes llamarla antes de declararla en el archivo.

try {
console.log(`}
          <span style={{ color: "red" }}>declaracionDeFuncion()</span>
          {`);
} catch (error2) {
  console.error("Error:", error2);
}

export function declaracionDeFuncion() {
  return "Hola desde declaracionDeFuncion";
}
export const funcionFlechaAsignadaAUnaConstante = () => {
  return "Hola desde funcionFlechaAsignadaAUnaConstante";
};

const Page = () => {
  return (
    <>
      <div className="text-xl pb-5">{'function xyz() {}'      
      VS      'const xyz = () => {}'}</div>
      <hr className="pb-5" />
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

`}
          <span style={{ color: "red" }}>{`const xyz = () => { ... }()`}</span>
          {`
--------------------------
Esto es una función flecha asignada a una constante.

- Características:

`}
          <span style={{ color: "red" }}>
            - No hay &ldquo;hoisting&rdquo; → no puedes
            <br />
            llamarla antes de la línea donde se define.()
          </span>
          {`

- Su nombre interno depende de la variable (xyz).

- También es un export nombrado, y se importa igual:

    import { xyz } from "./archivo";


`}
          <span style={{ color: "red" }}>{`const xyz = () => { ... }()`}</span>
          {`  
------------------------------
Esto es una declaración de función (function declaration)

Características:

`}
          <span style={{ color: "red" }}>
            - Hoisting: la función se eleva, es decir, <br />
            puedes llamarla antes de declararla en el archivo.
          </span>
          {`

- El nombre xyz queda ligado a la función (útil para 
depuración en stack traces).

- Es un export nombrado → al importar tienes que usar el 
mismo nombre:

    import { xyz } from "./archivo";


    `}
        </pre>
      </div>
    </div>
  );
};

export default Code;
