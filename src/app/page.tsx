import { redirect } from "next/navigation"

export default function Home() {
  redirect("/tema1/test1") // Redirige automáticamente
  return (
    <>
      <div className="flex-1 p-6 lg:p-6">
        Escoge el tema a consultar
        </div>
    </>
  );
}
