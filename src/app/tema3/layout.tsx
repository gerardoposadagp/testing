import SideNav from "@/app/components/navbars/sidenav/sidenav";
import "@/app/globals.css";

export default function Tema3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <SideNav tema="tema3" />
        <main className="flex-1 p-6 lg:p-1"> {children} </main>
      </div>
    </>
  );
}
