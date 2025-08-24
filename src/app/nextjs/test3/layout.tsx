import Link from "next/link";
import GetData from "./libs/GetData";
import { TodosContextProvider } from "./libs/todos-content-provider";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const todosPromise = GetData();

  return (
    <>
      <div
        className="bg-gray-100"
        style={{ display: "flex", padding: "15px 15px 15px 35px" }}
      >
        <div>
          <div style={{ display: "block" }}>
            Soy el layout de test 4
          </div>

          <div style={{ display: "block", margin: "20px" }}>
            <Link href="/nextjs/test3/lista-tareas" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Lista Tareas
            </Link>
            <Link href="/nextjs/test3/conteo-tareas" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Conteo Tareas
            </Link>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", padding: "15px 15px 15px 35px" }}>
        <TodosContextProvider todosPromise={todosPromise}>
          <main>{children}</main>
        </TodosContextProvider>
      </div>
    </>
  );
}
