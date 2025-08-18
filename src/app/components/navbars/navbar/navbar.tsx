"use client";

import NavBarRender from "@/app/components/navbars/navbar/_navbarRender";
import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

export default function Navbar() {

  const links: LinkNavbarType = [
      {
        label: "React",
        href: "/tema1",
      },
      {
        label: "Next.js",
        href: "/tema2",
      },
      {
        label: "Tailwind",
        href: "/tema3",
      },
      {
        label: "Tanstack",
        href: "/",
      },
      {
        label: "TypeScript",
        href: "/",
      },
      {
        label: "NodeJS",
        href: "/",
      },
      {
        label: "ShadCN",
        href: "/",
      }
    ]

  return <NavBarRender linkProps={links} />;
}
