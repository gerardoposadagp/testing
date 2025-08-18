"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

const iconMap = {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  AcademicCapIcon,
};

export default function SidebarList({
  list,
}: {
  list: {
    href: string;
    label: string;
    descripcion?: string;
  }[];
}) {
  console.log(">>>SidebarList rendered");

  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {list.map((link, i) => (
          <li key={i}>
            <Link
              href={{
                pathname: link.href,
                query: { descripcion: link.descripcion, titulo: link.label },
              }}
              // className={pathname === link.href ? "text-lg font-medium" : ""}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === link.href,
                }
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
