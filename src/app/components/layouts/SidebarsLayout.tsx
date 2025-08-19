"use client";

import SidebarRender from "@/app/components/navbars/SidebarRender";
import SidebarLinksData from "@/app/components/navbars/SidebarJSONLinks";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function SidebarsLayout({ children }: Props) {
  const pathname = usePathname();
  const sidebarName = pathname.split("/")[1];

  const list = SidebarLinksData(sidebarName) ?? [];

  if (!sidebarName)
    return (
      <>
        <div
          className="box-border border-2 p-4 ..."
          style={{ width: "1110px", height: "880px" }}
        >
          <h1>Welcome to the Home Page</h1>
          <br />
          <p>Seleccione opción del menú principal...</p>
        </div>
      </>
    );
  else
    return (
      <div style={{ display: "flex" }}>
        <div
          className="flex h-48 items-stretch"
          style={{
            height: "880px",
            width: "210px",
            padding: "20px",
            background: "#798697ff",
          }}
        >
          <SidebarRender linkProps={list} />
        </div>
        <div className="box-border border-1" style={{ width: "900px" }}>
          {children}
        </div>
      </div>
    );
}

export default SidebarsLayout;
