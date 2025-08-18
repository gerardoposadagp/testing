"use client";

import NavBarLinks from "@/app/components/navbars/navbar/_navbarRender";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

export default function NavBar() {
  const pathname = usePathname();

  // Extraer solo la sección principal para evitar re-renders en subsecciones
  const mainSection = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.length > 0 ? segments[0] : "/";
  }, [pathname]);
  
  // Solo recalcular links cuando cambie la sección principal
  const links: LinkNavbarType = useMemo(
    () => [
      {
        name: "Temas 1",
        href: "/tema1",
        current: mainSection === "tema1",
      },
      {
        name: "Temas 2",
        href: "/tema2",
        current: mainSection === "tema2",
      },
      {
        name: "Temas 3",
        href: "/tema3",
        current: mainSection === "tema3",
      },
      {
        name: "Temas 4",
        href: "/",
        current: mainSection === "",
      },
    ],
    [mainSection]
  ); // Depende de mainSection, no de pathname completo

  return <NavBarLinks linkProps={links} />;
}
