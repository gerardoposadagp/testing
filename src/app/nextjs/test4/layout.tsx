import GetData from "./libs/GetData";
import { TodosContextProvider, useTodosContext } from "./libs/todos-content-provider";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const todosPromise = GetData();

    return (
    <>
      <div className="bg-gray-100" style={{ display: "flex", padding: "15px 15px 15px 35px" }}>Soy el layout de la página 4</div>
      <div style={{ display: "flex", padding: "15px 15px 15px 35px" }}>
        <TodosContextProvider todosPromise={todosPromise}>
          <main>{children}</main>
        </TodosContextProvider>
      </div>
    </>
  );    
}
