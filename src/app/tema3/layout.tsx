import TemasSideNav from "@/app/components/navbars/sidenav/sidenav";
import "@/app/globals.css";

export default function Tema3Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
      <div className="flex">
        <TemasSideNav tema="tema3" />
        <main className="flex-1 p-6 lg:p-1">  {children} </main>
      </div>
      </>
  );
}
