"use client";

import NavBarRender from "@/app/components/navbars/navbar/_navbarRender";
import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

export default function NavBar() {

  const links: LinkNavbarType = [
      {
        label: "Temas 1",
        href: "/tema1",
      },
      {
        label: "Temas 2",
        href: "/tema2",
      },
      {
        label: "Temas 3",
        href: "/tema3",
      },
      {
        label: "Temas 4",
        href: "/",
      }
    ]

  return <NavBarRender linkProps={links} />;
}
