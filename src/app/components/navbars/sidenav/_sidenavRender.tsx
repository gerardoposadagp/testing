import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import type { LinkNavbarType } from "@/app/types/NavBarsTypes";

const iconMap = {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  AcademicCapIcon,
};

export default function SideNavRender({ linkProps }: { linkProps: LinkNavbarType }) {
  const pathname = usePathname();
  
  console.log('>>> sidebar renderizado');

  return (
    <>
      {linkProps.map((link) => {
        const LinkIcon = iconMap[link.icon as keyof typeof iconMap];
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': isActive,
              },
            )}
          >
            {LinkIcon && <LinkIcon className="w-6" />}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
