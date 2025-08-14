import Tema1SideNav from "@/app/components/navbars/sidenav/sidenav";
import "@/app/globals.css";


export default function Tema1Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
      <div className="flex">
        <Tema1SideNav tema="tema1" />
        <main className="flex-1 p-6 lg:p-1">  {children} </main>
      </div>
      </>
  );
}
