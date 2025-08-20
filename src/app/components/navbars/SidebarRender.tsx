"use client";

import Link from "next/link";
import clsx from "clsx";
import React from "react";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

const iconMap = {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  AcademicCapIcon,
};

export default function SidebarRender({
  linkProps,
}: {
  linkProps: LinkNavbarType;
}) {
  const pathname = usePathname();
  const LinkIcon = iconMap["DocumentDuplicateIcon"];

  console.log(">>> Sidebar renderizado");

  return (
    <nav>
      <ul>
        {linkProps.map((link, i) => (
          <li key={i}>
            <Link
              key={i}
              href={{
                pathname: link.href
              }}
              className={clsx(
                "flex h-[48px] grow mt-2 items-center text-white-600 justify-center gap-2 rounded-md bg-gray-150 p-3 text-sm font-medium hover:bg-sky-300 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-900": pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-5" />
              <p className="hidden md:block">{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
