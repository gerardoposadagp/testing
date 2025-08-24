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

  return (
    <nav>
      <ul>
        {linkProps.map((link, i) => {
          const Icon = link.icon
            ? iconMap[link.icon as keyof typeof iconMap]
            : DocumentDuplicateIcon;

          return (
            <li key={i}>
              <Link
                href={{
                  pathname: link.href,
                }}
                className={clsx(
                  "flex h-[48px] grow mt-2 items-center text-white-600 justify-center gap-2 rounded-md bg-gray-150 p-3 text-sm font-medium hover:bg-sky-300 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "bg-sky-100 text-blue-900": pathname === link.href,
                  }
                )}
              >
                <Icon className="w-6 h-6 flex-shrink-0 min-w-[24px] min-h-[24px]" />
                <p className="hidden md:block">{link.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
