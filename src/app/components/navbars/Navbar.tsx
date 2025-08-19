"use client";

import NavBarRender from "@/app/components/navbars/_navbarRender";
import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

export default function Navbar() {
  const links: LinkNavbarType = [
    {
      label: "Next.js",
      href: "/nextjs/test1",
    },
    {
      label: "React",
      href: "/react/test1",
    },
    {
      label: "TypeScript",
      href: "/typescript/test1",
    },
    {
      label: "Tailwind",
      href: "/tailwind/test1",
    },
    {
      label: "Tanstack",
      href: "/tanstack/test1",
    },
    {
      label: "ShadCN",
      href: "/shadcn/test1",
    },
    {
      label: "NodeJS",
      href: "/nodejs/test1",
    },
  ];

  return <NavBarRender linkProps={links} />;
}
