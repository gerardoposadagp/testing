"use client";

import SideNavRender from "@/app/components/navbars/sidenav/_sidenavRender";
import {LinkNavsType} from "@/app/types/NavBarsTypes";

export default function SideNav(props: { tema: string }) {
  let links: LinkNavsType = [];

  switch (props.tema) {
    case "tema1":
      links = [
        {
          name: "Tema 1 - Test 1",
          href: "/tema1/test1",
          icon: "DocumentTextIcon",
        },
        {
          name: "Tema 1 - Test 2",
          href: "/tema1/test2",
          icon: "DocumentDuplicateIcon",
        },
        {
          name: "Tema 1 - Test 3",
          href: "/tema1/test3",
          icon: "AcademicCapIcon",
        },
      ];
      break;
    case "tema2":
      links = [
        {
          name: "Tema 2 - Test 1",
          href: "/tema2/test1",
          icon: "DocumentTextIcon",
        },
        {
          name: "Tema 2 - Test 2",
          href: "/tema2/test2",
          icon: "DocumentDuplicateIcon",
        },
        {
          name: "Tema 2 - Test 3",
          href: "/tema2/test3",
          icon: "AcademicCapIcon",
        },
      ];
      break;
    case "tema3":
      links = [
        {
          name: "Tema 3 - Test 1",
          href: "/tema3/test1",
          icon: "DocumentTextIcon",
        },
        {
          name: "Tema 3 - Test 2",
          href: "/tema3/test2",
          icon: "DocumentDuplicateIcon",
        },
        {
          name: "Tema 3 - Test 3",
          href: "/tema3/test3",
          icon: "AcademicCapIcon",
        },
      ];
      break;
    default:
      break;
  }

  return (
    <div className="w-full flex-none md:w-64">
      <SideNavRender linkProps={links} />
    </div>
  );
}
