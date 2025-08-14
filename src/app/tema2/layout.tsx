import SideNavTemaX from "@/app/components/navbars/sidenav/sidenav";
import "@/app/globals.css";

export default function Tema2Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
      <div className="flex">
        <SideNavTemaX tema="tema2" />
        <main className="flex-1 p-6 lg:p-1">  
          {children} 
        </main>
      </div>
      </>
  );
}